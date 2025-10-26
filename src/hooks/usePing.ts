import { coinService } from "../services/CoinService"
import { useQuery } from "@tanstack/react-query"

export const usePing =() =>{
    return useQuery({
        queryKey:['ping'],
        queryFn: () => coinService.getServerStatus()
    })
}