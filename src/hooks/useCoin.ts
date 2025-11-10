import { coinService } from "../services/CoinService"
import { useQuery } from "@tanstack/react-query"

export const useCoin = (id:string) =>{
    return useQuery({
        queryKey:['coin'],
        queryFn: () => coinService.getCoinById(id)
    })
}

export const useCoinHistory = (id:string) => {
    return useQuery({
        queryKey: ['coinHistory', id],
        queryFn: () => coinService.getCoinHistory(id)
    })
}