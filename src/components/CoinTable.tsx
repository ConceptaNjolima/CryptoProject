import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons"
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons"
import { LineChart, Line } from "recharts";
import { Coin } from "./Coin";
import { useState } from "react";

const getStroke = (changeIn7day: string) => {
    let strokeColor: string = "#82ca9d";
    if (Number(changeIn7day) <= 0) {
        strokeColor = "#FF0000"
    }
    return strokeColor
}

const CoinsTableSkeleton = () => {
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
export const CoinTable = ({ CoinData, isLoading, onSort }: any) => {
    let idToDisplay = 0;
    const getChartData = (data: any) => {
        const chartData = data.map((value: number, index: number) => ({ index, value }))
        // console.log(chartData[0])
        return chartData
    }

    const [isPriceDown, setIsPriceDown] = useState(true);
    const handlePriceSortClick = (type: string) => {
        setIsPriceDown(!isPriceDown)
        onSort((prev: any) => ({ ...prev, sortBy: type }))
    }

    const [isVolumeDown, setIsVolumeDown] = useState(true);
    const handleVolumeSortClick = (type: string) => {
        setIsVolumeDown(!isVolumeDown)
        onSort((prev: any) => ({ ...prev, sortBy: type }))
    }

    const [isMarketCapDown, setIsMarketCapDown] = useState(true);
    const handleMarketCapSortClick = (type: string) => {
        setIsMarketCapDown(!isMarketCapDown)
        onSort((prev: any) => ({ ...prev, sortBy: type }))
    }

    if (isLoading) {
        return <CoinsTableSkeleton />
    }
    if (!CoinData || CoinData.length === 0) {
        return (
            <div className="flex items-center justify-center min-h-96">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">No Data Available</h2>
                    <p className="text-gray-500 dark:text-gray-400">No coins match your current filters. Try adjusting your search criteria.</p>
                </div>
            </div>
        )
    }
    return (
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg">
            <table className="border-collapse">
                <thead>
                    <tr className="bg-linear-to-r from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-600 border-b-2 border-blue-200 dark:border-gray-500 sticky top-0">
                        <th className="px-2 py-3 text-left text-xs font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wide">★</th>
                        <th className="px-2 py-3 text-left text-xs font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wide">#</th>
                        <th className="px-7 py-3 text-left text-xs font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wide">Coin</th>
                        <th className="px-2 py-3 text-center text-xs font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wide"></th>
                        <th className="px-2 py-3 text-right text-xs font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wide cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <span className="flex items-center justify-end gap-1">
                                Price
                            </span>
                        </th>
                        <th className="px-2 py-3 text-right text-xs font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wide">1h %</th>
                        <th className="px-2 py-3 text-right text-xs font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wide">24h %</th>
                        <th className="px-2 py-3 text-right text-xs font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wide">7d %</th>
                        <th className="px-2 py-3 text-right text-xs font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wide cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <span onClick={() => isVolumeDown ? handleVolumeSortClick("volume_asc") : handleVolumeSortClick("volume_desc")} className="flex items-center justify-end gap-1">
                                24h Vol
                                <FontAwesomeIcon icon={isVolumeDown ? faCaretDown : faCaretUp} size="sm" />
                            </span>
                        </th>
                        <th className="px-2 py-3 text-right text-xs font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wide cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                            <span onClick={() => isMarketCapDown ? handleMarketCapSortClick("market_cap_asc") : handleMarketCapSortClick("market_cap_desc")} className="flex items-center justify-end gap-1">
                                Market Cap
                                <FontAwesomeIcon icon={isMarketCapDown ? faCaretDown : faCaretUp} size="sm" />
                            </span>
                        </th>
                        <th className="px-2 py-3 text-right text-xs font-bold text-gray-700 dark:text-gray-200 uppercase tracking-wide">7d Chart</th>
                    </tr>
                </thead>
                <tbody>
                    {!isLoading && CoinData.map((coinInfo: any) =>
                    (
                        <tr key={coinInfo.id} className="border-b border-gray-200 dark:border-gray-700 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-150">
                            <td className="px-2 py-3 text-center">
                                <FontAwesomeIcon icon={faStarRegular} className="text-yellow-400 hover:text-yellow-500 cursor-pointer transition-colors" />
                            </td>
                            <td className="px-2 py-3 text-sm font-semibold text-gray-600 dark:text-gray-300 w-12">{idToDisplay += 1}</td>
                            <td className="px-4 py-3 w-80">
                                <Coin {...coinInfo} />
                            </td>
                            <td className="px-2 py-3 text-center">
                                <button className="px-3 py-1 bg-white border-green-700 dark:bg-gray-500 hover:bg-green-400 dark:text-white text-green-600 text-xs font-semibold rounded-full transition-colors duration-200">
                                    Buy
                                </button>
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
                            <td className="px-2 py-3 text-right text-sm font-semibold text-gray-900 dark:text-gray-100">{new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD",
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0
                            }).format(coinInfo.total_volume)}</td>
                            <td className="px-2 py-3 text-right text-sm font-semibold text-gray-900 dark:text-gray-100">{new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD",
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0
                            }).format(coinInfo.market_cap)}</td>
                            <td className="px-2 py-3 text-center">
                                <div className="flex justify-center">
                                    <LineChart width={100} height={40} data={getChartData(coinInfo.sparkline_in_7d.price)}>
                                        <Line type="monotone" dataKey="value" dot={false} stroke={getStroke(coinInfo.price_change_percentage_7d_in_currency)} strokeWidth={2} />
                                    </LineChart>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}