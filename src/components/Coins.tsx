import { Suspense, useState } from "react";
import { Filters } from "./Filters";
import { CoinTable } from "./CoinTable";
import { useAllCoins, useSortedCoins } from "../hooks/useCoins";
import type { CoinType, FiltersProps } from '../types/CoinTypes';
import { LoadingPage } from "../pages/LoadingPage";
export const Coins = (CoinData:any) => {
    // TO DO: Use the full list of coins for filtering
    console.log("allCoins CoinData", CoinData)
    const [filters, setFilters] = useState({
        sortBy:'',
        filterType:'',
        lowerPriceFilterValue:0,
        upperPriceFilterValue:Infinity,
        lowerVolumeFilterValue:0,
        upperVolumeFilterValue:Infinity,
        lowerMarketCapFilterValue:0,
        upperMarketCapFilterValue:Infinity
    });
    console.log("filters", filters)
    const {data, isError, isLoading} = useAllCoins(filters);
    console.log("allCoins data", data);
    console.log("allCoins error", isError);
    console.log("allCoins Loading", isLoading);

    return (
        <div className="flex flex-row">
            <Suspense fallback={<LoadingPage/>}>
                <Filters className="flex-1"filters={filters} onFilter={setFilters} isLoading={isLoading}/>
                <CoinTable className="flex-3" CoinData={data} isLoading={isLoading} onSort={setFilters}/>
            </Suspense>
        </div>
    )
}