import { coinService } from "../services/CoinService"
import { useQuery } from "@tanstack/react-query"
import type { FiltersState } from "../types/CoinTypes";

export const useCoins = () => {
    const defaultFilters: FiltersState = {
        sortBy: '',
        filterType: '',
        lowerPriceFilterValue: 0,
        upperPriceFilterValue: 1000000,
        lowerVolumeFilterValue: 0,
        upperVolumeFilterValue: 1000000000,
        lowerMarketCapFilterValue: 0,
        upperMarketCapFilterValue: 1000000000,
    };
    return useQuery({
        queryKey: ['coins'],
        queryFn: () => coinService.getAllCoins(defaultFilters),
    })
}

export const useAllCoins = (filters: FiltersState) => {
    return useQuery({
        queryKey: ['allCoins', filters],
        queryFn: () => coinService.getAllCoins(filters),
    })
}