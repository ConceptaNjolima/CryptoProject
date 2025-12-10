import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons"
import { Coin } from "./Coin";
import { FavoriteContext } from "../context/FavoriteContext";
import type { FavoriteCoinTableProps, CoinType } from '../types/CoinTypes';
import { use } from "react";

const FavoriteCoinsTableSkeleton = () => {
    return (
        <div className="shadow animate-pulse">
            <table className="table-auto md:table-fixed w-full">
                <thead>
                    <tr className="border border-gray-300 dark:border-gray-600 bg-gray-100 dark:bg-gray-700">
                        <th className="p-5 w-1/10"><div className="h-4 bg-gray-300 dark:bg-gray-600 rounded"></div></th>
                        <th className="p-5 w-1/10"><div className="h-4 bg-gray-300 dark:bg-gray-600 rounded"></div></th>
                        <th className="p-5 w-2/10"><div className="h-4 bg-gray-300 dark:bg-gray-600 rounded"></div></th>
                        <th className="p-5 w-1/10"><div className="h-4 bg-gray-300 dark:bg-gray-600 rounded"></div></th>
                        <th className="p-5 w-1/10"><div className="h-4 bg-gray-300 dark:bg-gray-600 rounded"></div></th>
                        <th className="p-5 w-1/10"><div className="h-4 bg-gray-300 dark:bg-gray-600 rounded"></div></th>
                        <th className="p-5 w-1/10"><div className="h-4 bg-gray-300 dark:bg-gray-600 rounded"></div></th>
                        <th className="p-5 w-1/10"><div className="h-4 bg-gray-300 dark:bg-gray-600 rounded"></div></th>
                        <th className="p-5 w-1/10"><div className="h-4 bg-gray-300 dark:bg-gray-600 rounded"></div></th>
                        <th className="p-5 w-1/10"><div className="h-4 bg-gray-300 dark:bg-gray-600 rounded"></div></th>
                        <th className="p-5 w-1/10"><div className="h-4 bg-gray-300 dark:bg-gray-600 rounded"></div></th>
                    </tr>
                </thead>
                <tbody>
                    {Array(10).fill(0).map((_, i) => (
                        <tr key={i} className="border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800">
                            <td className="p-5 w-1/10"><div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div></td>
                            <td className="p-5 w-1/10"><div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div></td>
                            <td className="p-5 w-2/10">
                                <div className="flex items-center gap-3">
                                    <div className="h-8 w-8 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
                                    <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-24"></div>
                                </div>
                            </td>
                            <td className="p-1 w-1/10"><div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div></td>
                            <td className="p-3 w-1/10"><div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div></td>
                            <td className="p-2 w-1/10"><div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div></td>
                            <td className="p-2 w-1/10"><div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div></td>
                            <td className="p-2 w-1/10"><div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div></td>
                            <td className="p-5 w-1/10"><div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div></td>
                            <td className="p-5 w-1/10"><div className="h-4 bg-gray-200 dark:bg-gray-700 rounded"></div></td>
                            <td className="p-5 w-1/10"><div className="h-8 bg-gray-200 dark:bg-gray-700 rounded"></div></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )

}

export const FavoriteCoinTable = ({}: FavoriteCoinTableProps) => {
    let idToDisplay = 0;

    const favoriteContext = use(FavoriteContext);
    const { favoriteCoins = [] } = favoriteContext || { favoriteCoins: [], addToFavoriteCoins: () => { } };
    console.log("coinsToShow in favorites table", favoriteCoins)
    if (!favoriteCoins || favoriteCoins.length === 0) {
        return (
            <div className="flex items-center justify-center min-h-96">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">No Favorite coins Available</h2>
                    <p className="text-gray-500 dark:text-gray-400">No coins added to your favorites. Try adding coins to your favorites.</p>
                </div>
            </div>
        )
    }
    return (
        <div className="min-h-screen flex items-start justify-center py-10 bg-gray-50 dark:bg-gray-900">
            <div className="w-full max-w-5xl bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 text-center">My Favorite Coins</h2>
                <div className="overflow-x-auto">
                    <table className="border-collapse w-full">
                <thead>
                    <tr className="bg-linear-to-r from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-600 border-b-2 border-blue-200 dark:border-gray-500 sticky top-0">
                        <th className="px-2 py-3 text-left text-xs font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wide">#</th>
                        <th className="px-7 py-3 text-left text-xs font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wide">Coin</th>
                        <th className="px-2 py-3 text-right text-xs font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wide cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <span className="flex items-center justify-end gap-1">
                                Price
                            </span>
                        </th>
                        <th className="px-2 py-3 text-right text-xs font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wide">1h %</th>
                        <th className="px-2 py-3 text-right text-xs font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wide">24h %</th>
                        <th className="px-2 py-3 text-right text-xs font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wide">7d %</th>
                    </tr>
                </thead>
                <tbody>
                    { favoriteCoins.map((coinInfo: CoinType) =>
                    (
                        <tr className="bg-linear-to-r from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-600 border-b-2 border-blue-200 dark:border-gray-500 sticky top-0">
                            <td className="px-2 py-3 text-sm font-semibold text-gray-600 dark:text-gray-300 w-12">{idToDisplay += 1}</td>
                            <td className="px-4 py-3 w-80">
                                <Coin {...coinInfo} />
                            </td>
                            <td className="px-2 py-3 text-right font-bold text-gray-900 dark:text-gray-100">{new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD",
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            }).format(coinInfo.current_price)}</td>
                            <td className="px-4 py-3 text-right">
                                <div className="flex items-center justify-end gap-1">
                                    <FontAwesomeIcon icon={Number(coinInfo.price_change_percentage_1h_in_currency) < 0 ? faCaretDown : faCaretUp} size="sm" className={Number(coinInfo.price_change_percentage_1h_in_currency) < 0 ? "text-red-500" : "text-green-500"} />
                                    <span className={`font-semibold ${Number(coinInfo.price_change_percentage_1h_in_currency) < 0 ? "text-red-600 dark:text-red-400" : "text-green-600 dark:text-green-400"}`}>
                                        {Math.abs(coinInfo.price_change_percentage_1h_in_currency).toFixed(2)}%
                                    </span>
                                </div>
                            </td>
                            <td className="px-2 py-3 text-right">
                                <div className="flex items-center justify-end gap-1">
                                    <FontAwesomeIcon icon={Number(coinInfo.price_change_percentage_24h_in_currency) < 0 ? faCaretDown : faCaretUp} size="sm" className={Number(coinInfo.price_change_percentage_24h_in_currency) < 0 ? "text-red-500" : "text-green-500"} />
                                    <span className={`font-semibold ${Number(coinInfo.price_change_percentage_24h_in_currency) < 0 ? "text-red-600 dark:text-red-400" : "text-green-600 dark:text-green-400"}`}>
                                        {Math.abs(coinInfo.price_change_percentage_24h_in_currency).toFixed(2)}%
                                    </span>
                                </div>
                            </td>
                            <td className="px-2 py-3 text-right">
                                <div className="flex items-center justify-end gap-1">
                                    <FontAwesomeIcon icon={Number(coinInfo.price_change_percentage_7d_in_currency) < 0 ? faCaretDown : faCaretUp} size="sm" className={Number(coinInfo.price_change_percentage_7d_in_currency) < 0 ? "text-red-500" : "text-green-500"} />
                                    <span className={`font-semibold ${Number(coinInfo.price_change_percentage_7d_in_currency) < 0 ? "text-red-600 dark:text-red-400" : "text-green-600 dark:text-green-400"}`}>
                                        {Math.abs(coinInfo.price_change_percentage_7d_in_currency).toFixed(2)}%
                                    </span>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}