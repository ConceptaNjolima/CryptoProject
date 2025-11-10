import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as  faStarRegular} from "@fortawesome/free-regular-svg-icons"
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons"
import { LineChart, Line } from "recharts";
import { Coin } from "./Coin";

export const CoinTable =({CoinData}:any) =>{
    let idToDisplay=0;
    const getChartData =(data:any) =>{
        const chartData = data.map((value:number, index:number) => ({ index, value }))
        // console.log(chartData[0])
        return chartData
    }
    console.log("CoinTable", CoinData)
    return (
            <div>
                <table className="table-auto md:table-fixed">
                    <thead>
                        <tr className="border border-gray-300 dark:border-gray-600 p-7">
                            {/* Pick these categories from API */}
                            <th className="p-5"></th>
                            <th className="p-5">id</th>
                            <th className="p-5">Coin</th>
                            <th className="p-5"></th>
                            <th>Price</th>
                            <th>1h</th>
                            <th>24h</th>
                            <th>7d</th>
                            <th>24h Volume</th>
                            <th>Market Cap</th>
                            <th>Last 7 Days</th>
                        </tr>
                    </thead>
                    <tbody>
                        {CoinData.map((coinInfo:any) =>
                        (
                            <tr key={coinInfo.id} className="border border-gray-300 dark:border-gray-600">
                                <td className="p-5 w-1/10"><FontAwesomeIcon icon={faStarRegular}/></td>
                                <td className="p-5 w-1/10">{idToDisplay+=1}</td>
                                <td className="p-5 w-2/10">
                                    <Coin {...coinInfo} />
                                </td>
                                <td className="p-1 w-1/10">
                                    Buy
                                </td>
                                <td className="p-3 w-1/10">{new Intl.NumberFormat("en-US", {
                                    style:"currency",
                                    currency:"USD",
                                    minimumFractionDigits:0,
                                    maximumFractionDigits:0
                                }).format(coinInfo.current_price.toFixed(1))}</td>
                                <td className="p-2 w-1/10">
                                    <span><FontAwesomeIcon icon={Number(coinInfo.price_change_percentage_1h_in_currency)<0? faCaretDown: faCaretUp} className={Number(coinInfo.price_change_percentage_1h_in_currency)<0?"text-red-500":"text-green-500"}/></span>
                                    <span className={Number(coinInfo.price_change_percentage_1h_in_currency)<0?"text-red-500":"text-green-500"}>{Math.abs(coinInfo.price_change_percentage_1h_in_currency).toFixed(1)}%</span>
                                </td>
                                <td className="p-2 w-1/10">
                                    <span><FontAwesomeIcon icon={Number(coinInfo.price_change_percentage_24h_in_currency)<0? faCaretDown: faCaretUp} className={Number(coinInfo.price_change_percentage_24h_in_currency)<0?"text-red-500":"text-green-500"}/></span>
                                    <span className={Number(coinInfo.price_change_percentage_24h_in_currency)<0?"text-red-500":"text-green-500"}>{Math.abs(coinInfo.price_change_percentage_24h_in_currency).toFixed(1)}%</span>
                                </td>
                                <td className="p-2 w-1/10">
                                    <span><FontAwesomeIcon icon={Number(coinInfo.price_change_percentage_7d_in_currency)<0? faCaretDown: faCaretUp} className={Number(coinInfo.price_change_percentage_7d_in_currency)<0?"text-red-500":"text-green-500"}/></span>
                                    <span className={Number(coinInfo.price_change_percentage_7d_in_currency)<0?"text-red-500":"text-green-500"}>{Math.abs(coinInfo.price_change_percentage_7d_in_currency).toFixed(1)}%</span>
                                </td>
                                <td className="p-5 w-1/10">{new Intl.NumberFormat("en-US",{
                                    style:"currency",
                                    currency:"USD",
                                    minimumFractionDigits:0,
                                    maximumFractionDigits:0
                                }).format(coinInfo.total_volume*coinInfo.high_24h)}</td>
                                <td className="p-5 w-1/10">{new Intl.NumberFormat("en-US",{
                                    style:"currency",
                                    currency:"USD",
                                    minimumFractionDigits:0,
                                    maximumFractionDigits:0
                                }).format(coinInfo.market_cap)}</td>
                                <td>
                                    <LineChart width={100} height={50} data={getChartData(coinInfo.sparkline_in_7d.price)}>
                                        <Line type="monotone" dataKey="value" stroke="#82ca9d" />
                                    </LineChart>
                                </td>
                            </tr> 
                        )
                        )}
                    </tbody>
                </table>
            </div>
    )
}