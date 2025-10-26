import { coinService } from "../services/CoinService"
import { useQuery } from "@tanstack/react-query"

export const useCoins =() =>{
    return useQuery({
        queryKey:['coins'],
        queryFn: () => coinService.getCoinsList(),
    })
}