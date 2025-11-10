import { useState } from "react";
import { Filters } from "./Filters";
import { CoinTable } from "./CoinTable";
import { useAllCoins, useSortedCoins } from "../hooks/useCoins";
import type { CoinType, FiltersProps } from '../types/CoinTypes';
export const Coins = (CoinData:any) => {
    // TO DO: Use the full list of coins for filtering
    console.log("allCoins CoinData", CoinData)
    const [filters, setFilters] = useState({
        sortBy:'volume_asc',
        filterType:''
    });
    console.log("filters", filters)
    const {data, isError, isLoading} = useAllCoins(filters);
    console.log("allCoins data", data);
    console.log("allCoins error", isError);
    console.log("allCoins Loading", isLoading);

    // const handleFilter = (filterType: string, lowValue?: number, highValue?: number) => {
    //     if (filterType == "byPrice"){
    //         const low = lowValue ?? 0;
    //         const high = highValue ?? Infinity;
    //         console.log("byPrice")
    //         setFilteredData(data?.data?.filter((coin:CoinType) => Number(coin.current_price) < high && Number(coin.current_price) > low) ?? CoinData.CoinData)
    //     }
    //     else if(filterType == "1HrIncrease"){
    //         console.log("increase")
    //         setFilteredData(data?.data?.filter((coin:CoinType)=>Number(coin.price_change_percentage_24h_in_currency)>0))
    //         }
    //     if(filterType == "1HrDecrease"){
    //         console.log("decrease")
    //         setFilteredData(data?.data?.filter((coin:CoinType)=>Number(coin.price_change_percentage_24h_in_currency)<0))
    //         }
    //     else {
    //         setFilteredData(CoinData.CoinData)
    //     }
    // }

    return (
        <div className="flex flex-row">
            <Filters filters={filters} onFilter={setFilters}/>
            <CoinTable CoinData={data} isLoading={isLoading}/>
        </div>
    )
}