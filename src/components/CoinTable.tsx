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

const CoinsTableSkeleton=()=>{
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
                {Array(10).fill(0).map((_, i)=>(
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
    console.log("CoinTable", CoinData)
    if (isLoading){
        return <CoinsTableSkeleton/>
    }
    if (!CoinData || CoinData.length === 0) {
        return (
            <div className="flex flex-5 items-center justify-center min-h-96">
                <div className="text-center">
                    <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-2">No Data Available</h2>
                    <p className="text-gray-500 dark:text-gray-400">No coins match your current filters. Try adjusting your search criteria.</p>
                </div>
            </div>
        )
    }
    return (
        <div>
            {!isLoading && CoinData.map((coinInfo: any) =>
            (
                <table className="table-auto md:table-fixed">
                    <thead>
                        <tr className="border border-gray-300 dark:border-gray-600 p-7">
                            {/* Pick these categories from API */}
                            <th className="p-5"></th>
                            <th className="p-5">id</th>
                            <th className="p-5">Coin</th>
                            <th className="p-5"></th>
                            <th>
                                <span><FontAwesomeIcon icon={isPriceDown ? faCaretDown : faCaretUp} onClick={() => handlePriceSortClick("current_price_asc")} /></span>
                                Price
                            </th>
                            <th>1h</th>
                            <th>24h</th>
                            <th>7d</th>
                            <th>
                                <span><FontAwesomeIcon icon={isVolumeDown ? faCaretDown : faCaretUp} onClick={() => isVolumeDown ? handleVolumeSortClick("volume_asc") : handleVolumeSortClick("volume_desc")} /></span>
                                24h Volume
                            </th>
                            <th>
                                <span><FontAwesomeIcon icon={isMarketCapDown ? faCaretDown : faCaretUp} onClick={() => isMarketCapDown ? handleMarketCapSortClick("market_cap_asc") : handleMarketCapSortClick("market_cap_desc")} /></span>
                                Market Cap
                            </th>
                            <th>Last 7 Days</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr key={coinInfo.id} className="border border-gray-300 dark:border-gray-600">
                            <td className="p-5 w-1/10"><FontAwesomeIcon icon={faStarRegular} /></td>
                            <td className="p-5 w-1/10">{idToDisplay += 1}</td>
                            <td className="p-5 w-2/10">
                                <Coin {...coinInfo} />
                            </td>
                            <td className="p-1 w-1/10">
                                Buy
                            </td>
                            <td className="p-3 w-1/10">{new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD",
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0
                            }).format(coinInfo.current_price?.toFixed(1))}</td>
                            <td className="p-2 w-1/10">
                                <span><FontAwesomeIcon icon={Number(coinInfo.price_change_percentage_1h_in_currency) < 0 ? faCaretDown : faCaretUp} className={Number(coinInfo.price_change_percentage_1h_in_currency) < 0 ? "text-red-500" : "text-green-500"} /></span>
                                <span className={Number(coinInfo.price_change_percentage_1h_in_currency) < 0 ? "text-red-500" : "text-green-500"}>{Math.abs(coinInfo.price_change_percentage_1h_in_currency).toFixed(1)}%</span>
                            </td>
                            <td className="p-2 w-1/10">
                                <span><FontAwesomeIcon icon={Number(coinInfo.price_change_percentage_24h_in_currency) < 0 ? faCaretDown : faCaretUp} className={Number(coinInfo.price_change_percentage_24h_in_currency) < 0 ? "text-red-500" : "text-green-500"} /></span>
                                <span className={Number(coinInfo.price_change_percentage_24h_in_currency) < 0 ? "text-red-500" : "text-green-500"}>{Math.abs(coinInfo.price_change_percentage_24h_in_currency).toFixed(1)}%</span>
                            </td>
                            <td className="p-2 w-1/10">
                                <span><FontAwesomeIcon icon={Number(coinInfo.price_change_percentage_7d_in_currency) < 0 ? faCaretDown : faCaretUp} className={Number(coinInfo.price_change_percentage_7d_in_currency) < 0 ? "text-red-500" : "text-green-500"} /></span>
                                <span className={Number(coinInfo.price_change_percentage_7d_in_currency) < 0 ? "text-red-500" : "text-green-500"}>{Math.abs(coinInfo.price_change_percentage_7d_in_currency).toFixed(1)}%</span>
                            </td>
                            <td className="p-5 w-1/10">{new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD",
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0
                            }).format(coinInfo.total_volume)}</td>
                            <td className="p-5 w-1/10">{new Intl.NumberFormat("en-US", {
                                style: "currency",
                                currency: "USD",
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 0
                            }).format(coinInfo.market_cap)}</td>
                            <td>
                                <LineChart width={100} height={50} data={getChartData(coinInfo.sparkline_in_7d.price)}>
                                    <Line type="monotone" dataKey="value" dot={false} stroke={getStroke(coinInfo.price_change_percentage_7d_in_currency)} />
                                </LineChart>
                            </td>
                        </tr>
                    </tbody>
                </table>
            )
            )}
        </div>
    )
}