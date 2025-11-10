import { coinService } from "../services/CoinService"
import { useQuery } from "@tanstack/react-query"

export const useCoins =() =>{
    return useQuery({
        queryKey:['coins'],
        queryFn: () => coinService.getCoinsList(),
    })
}

export const useAllCoins =() =>{
    console.log("in all coins")
    return useQuery({
        queryKey:['allCoins'],
        queryFn: () => coinService.getAllCoins(),
    })
}