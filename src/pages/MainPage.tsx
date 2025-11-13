import { useCoins } from "../hooks/useCoins"
import { Coins } from "../components/Coins";
import { LoadingPage } from "./LoadingPage";

export const MainPage = () => {
    const { isLoading } = useCoins();

    if (isLoading) return <LoadingPage/>
    
    return (
        <Coins />
    )
}