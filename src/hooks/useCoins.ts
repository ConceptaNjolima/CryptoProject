import { coinService } from "../services/CoinService"
import { useQuery } from "@tanstack/react-query"

export const useCoins = () => {
    return useQuery({
        queryKey: ['coins'],
        queryFn: () => coinService.getAllCoins({}),
    })
}

export const useAllCoins = (filters: any) => {
    return useQuery({
        queryKey: ['allCoins', filters],
        queryFn: () => coinService.getAllCoins(filters),
    })
}