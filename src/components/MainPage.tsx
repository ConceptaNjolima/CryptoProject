import { useCoins } from "../hooks/useCoins"
import { Coins } from "./Coins";

export const MainPage =() =>{
    // const serverStatus = usePing();
    // console.log("ping:",serverStatus);
    const {data, isLoading} = useCoins();
    console.log("Loading", isLoading)

    if (isLoading) return <div>Loading</div>
    
    return (
        <Coins CoinData={data.data}/>
    )
}