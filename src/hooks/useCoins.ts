import { coinService } from "../services/CoinService"
import { useQuery } from "@tanstack/react-query"

export const useCoins =() =>{
    return useQuery({
        queryKey:['coins'],
        queryFn: () => coinService.getCoinsList(),
    })
}

export const useAllCoins =(filters:any) =>{
    console.log("in all coins", filters)
    return useQuery({
        queryKey:['allCoins', filters],
        queryFn: () => coinService.getAllCoins(filters),
    })
}

export const useSortedCoins =(sortedBy:string) =>{
    console.log("in all sorted coins")
    return useQuery({
        queryKey:['allCoins'],
        queryFn: () => coinService.getSortedCoins(sortedBy),
    })
}