import { coinService } from "../services/CoinService"
import { useQuery } from "@tanstack/react-query"

export const useCoinChart =(id:string) =>{
    return useQuery({
        queryKey:['chart'],
        queryFn: () => coinService.getCoinHistoricalChart(id)
    })
}