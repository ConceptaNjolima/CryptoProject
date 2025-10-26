import { Coin } from "./Coin"
import { useCoins } from "../hooks/useCoins"
import { usePing } from "../hooks/usePing";

export const CoinTable =() =>{
    // const serverStatus = usePing();
    // console.log("ping:",serverStatus);
    const coins = useCoins();
    console.log("coins", coins);
    return (
        <table className="table-auto md:table-fixed border-collapse border border-gray-400">
            <thead>
                <tr>
                    {/* Pick these categories from API */}
                    <th className="border border-gray-300 dark:border-gray-600">id</th>
                    <th className="border border-gray-300 dark:border-gray-600">Coin</th>
                    <th className="border border-gray-300 dark:border-gray-600">Price</th>
                </tr>              
            </thead>
        </table>
    )
}