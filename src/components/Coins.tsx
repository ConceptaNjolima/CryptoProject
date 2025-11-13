import { Suspense, useState } from "react";
import { Filters } from "./Filters";
import { CoinTable } from "./CoinTable";
import { useAllCoins } from "../hooks/useCoins";
import { LoadingPage } from "../pages/LoadingPage";

export const Coins = () => {
    const [filters, setFilters] = useState({
        sortBy: '',
        filterType: '',
        lowerPriceFilterValue: 0,
        upperPriceFilterValue: Infinity,
        lowerVolumeFilterValue: 0,
        upperVolumeFilterValue: Infinity,
        lowerMarketCapFilterValue: 0,
        upperMarketCapFilterValue: Infinity
    });

    const { data, isLoading } = useAllCoins(filters);

    return (
        <div className="flex flex-row gap-4 p-4">
            <Suspense fallback={<LoadingPage/>}>
                <Filters onFilter={setFilters} isLoading={isLoading}/>
                <CoinTable CoinData={data} isLoading={isLoading} onSort={setFilters}/>
            </Suspense>
        </div>
    )
}