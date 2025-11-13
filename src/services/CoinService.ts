import { httpClient } from "./HttpClient";
import { HttpService } from "./httpService";
import type{ CoinType } from "../types/CoinTypes";

export class CoinService extends HttpService{
    constructor(){
        super(httpClient)
    }

    async getServerStatus(){
        const statusUrl ="ping";
        return this.get(statusUrl);
    }

    async getCoinsList(){
        const marketUrl = "markets?vs_currency=usd&per-page=100&page=1&price_change_percentage=1h,24h,7d&sparkline=true";
        return this.get(marketUrl);
    }

    async getCoinById(id:string){
        const coinUrl = `/${id}`;
        return this.get(coinUrl);
    }

    async getAllCoins(filters:any){
        console.log("before get all coins",filters)
        let coinsUrl= `/markets?vs_currency=usd&price_change_percentage=1h,24h,7d&sparkline=true`;
        if(filters?.sortBy){
            console.log("sorting")
            coinsUrl+=`&order=${filters.sortBy}`
        }
        const response = await this.get(coinsUrl);
        const responseData = response;
        console.log("responseData", responseData)
        let dataToReturn = responseData;
        if (filters?.filterType=="byPrice"){
            dataToReturn = responseData?.filter((coin:CoinType) => Number(coin.current_price) >= filters.lowerPriceFilterValue && Number(coin.current_price) <= filters.upperPriceFilterValue);
            console.log("filtered by price", dataToReturn)
        }
        if (filters?.filterType=="byVolume"){
            dataToReturn = responseData?.filter((coin:CoinType) => Number(coin.volume_24h) >= filters.lowerVolumeFilterValue && Number(coin.volume_24h) <= filters.upperVolumeFilterValue);
            console.log("filtered by Volume", dataToReturn)
        }
        if (filters?.filterType=="byMarketCap"){
            dataToReturn = responseData?.filter((coin:CoinType) => Number(coin.market_cap) >= filters.lowerMarketCapFilterValue && Number(coin.market_cap) <= filters.upperMarketCapFilterValue);
            console.log("filtered by MarketCap", dataToReturn)
        }
        if (filters?.filterType=="Gainers24hr"){
            dataToReturn = responseData?.filter((coin:CoinType)=>Number(coin.price_change_percentage_24h_in_currency)>0);
            console.log("filtered by MarketCap", dataToReturn)
        }
        if (filters?.filterType=="Losers24hr"){
            dataToReturn = responseData?.filter((coin:CoinType)=>Number(coin.price_change_percentage_24h_in_currency)<0);
            console.log("filtered by MarketCap", dataToReturn)
        }
        return dataToReturn;
    }

    async getSortedCoins(sortedBy:string){
        const coinsUrl= `/markets?order=${sortedBy}&vs_currency=usd&per_page=250&page=5&price_change_percentage=1h,24h,7d&sparkline=true`;
        console.log("all coins")
        return this.get(coinsUrl);
    }

    async getCoinHistory(id:string){
        const historicalUrl= `/aave/history?date=30-12-2024/localization=false`;
        console.log("using", historicalUrl)
        return this.get(historicalUrl);
    }

    async getCoinHistoricalChart(id:string){
        const historicalChartUrl= `/${id}/market_chart?vs_currency=usd&days=7&interval=daily`;
        return this.get(historicalChartUrl);
    }
}

export const coinService = new CoinService();