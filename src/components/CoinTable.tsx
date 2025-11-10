import { Coin } from "./Coin"
import { useCoins } from "../hooks/useCoins"
import { usePing } from "../hooks/usePing";
import { useCoinHistory } from "../hooks/useCoin";
import { CoinPrice } from "./CoinPrice";
import {Last7DayChart} from "./CoinChart"
import { LineChart,Line } from "recharts";
import {useReactTable, createColumnHelper, flexRender, getCoreRowModel} from "@tanstack/react-table"
import type {ColumnDef} from "@tanstack/react-table"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import {faStar as faStarRegular} from '@fortawesome/free-regular-svg-icons'
import type { CoinType } from "../types/CoinTypes";

const getChartData =(data:any) =>{
    const chartData = data.map((value:number, index:number) => ({ index, value }))
    // console.log(chartData[0])
    return chartData

}
export const CoinTable =() =>{
    // const serverStatus = usePing();
    // console.log("ping:",serverStatus);
    const {data, isLoading} = useCoins();
    console.log("Loading", isLoading)
    let idToDisplay=0;
    
    return (
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
                {!isLoading && data.data.map((coinInfo:any) =>
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
    )
}

    // console.log("isLoading:", isLoading);
    // let idToDisplay:number;
    // idToDisplay=0;
    // let coinData:CoinType[];
    // if (!isLoading){
    //     console.log("check again Loading", isLoading)
    //      coinData= data.data

    //     console.log("coins data received", coinData);
        
    // }
    // else{
    //     coinData=[]
    // }
    // // const columns: ColumnDef<CoinType>[]=[
    // //     {
    // //         header:"#",
    // //         cell: ()=>{
    // //                 idToDisplay+=1
    // //                 console.log("id",idToDisplay)
    // //                 return (
    // //                     <p>{idToDisplay}</p>
    // //                 )
    // //             }
    // //     },
    // //     {
    // //         header: "Coin"
    // //         cell: (row) =>{
    // //             const {imageUrl, symbol, name} = row.Original
    // //             return (
    // //                 <Coin coinInfo={imageUrl, symbol, name}/>
    // //             )
    // //         }
    // //     }
    // // ]
    // const ColumnHelper = createColumnHelper<CoinType>();
    // const tableColumns = [
    //         ColumnHelper.accessor('id',{
    //             header:"#",
    //             cell: ()=>{
    //                 return (
    //                     <p>{idToDisplay+=1}</p>
    //                 )
    //             }
    //         }),
    //         ColumnHelper.accessor('imageUrl', {
    //             cell: ({row})=>{
    //                 const {imageUrl, name, symbol} = row.original
    //                 return (
    //                     <div>
    //                         <Coin coinInfo={imageUrl,name,symbol}/>
    //                     </div>
    //                 )
    //             }
    //             header:"image"
    //         }),
    //         ColumnHelper.accessor('name', {
    //             cell: info => info.getValue(),
    //             header:"name"
    //         }),
    //                 ColumnHelper.accessor('symbol', {
    //             cell: info => info.getValue(),
    //             header:"symbol"
    //         }),
    //         ColumnHelper.accessor('current_price', {
    //             cell: info => info.getValue(),
    //             header:"current price"
    //         }),
    //         ColumnHelper.accessor('price_change_percentage_1h_in_currency', {
    //             cell: info => info.getValue(),
    //             header: "1hr"
    //         }),
    //         ColumnHelper.accessor('price_change_percentage_24h_in_currency', {
    //             cell: info => info.getValue(),
    //             header: "24hr"
    //         }),
    //         ColumnHelper.accessor('price_change_percentage_7d_in_currency', {
    //             cell: info => info.getValue(),
    //             header:"7d"
    //         }),
    //         ColumnHelper.accessor('volume_24h', {
    //             cell: info => info.getValue(),
    //             header:"volume 24h"
    //         }),
    //         ColumnHelper.accessor('market_cap', {
    //             cell: info => info.getValue(),
    //             header:"market_cap"
    //         }),
    //     ]
    // const mainTable = useReactTable({data:coinData, columns:tableColumns, getCoreRowModel:getCoreRowModel()})
    // console.log("mainTable", mainTable)
    // console.log("rows", mainTable.getRowModel().rows)

    // return(
    //     <table className="table-auto border-collapse border">
    //         <thead>
    //             {mainTable.getHeaderGroups().map((headerGroup)=>(
    //                 <tr key={headerGroup.id}>
    //                     {headerGroup.headers.map((header)=>
    //                     <th key={header.id} className="border p-2">
    //                         {flexRender(header.column.columnDef.header, header.getContext())}
    //                     </th>
    //                     )}
    //                 </tr>
    //             ))}
    //         </thead>
    //         <tbody>
    //             {mainTable.getRowModel().rows.map((row)=>(
    //                 <tr key={row.id}>
    //                     {row.getVisibleCells().map((cell:any)=>(
    //                         <td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</td>
    //                     ))}
    //                 </tr>
    //             ))}
    //         </tbody>
    //     </table>
    // )