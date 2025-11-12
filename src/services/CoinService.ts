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
        let coinsUrl= `/markets?vs_currency=usd&per_page=250&page=5&price_change_percentage=1h,24h,7d&sparkline=true`;
        if(filters?.sortBy){
            console.log("sorting")
            coinsUrl+=`&order=${filters.sortBy}`
        }
        const response = await this.get(coinsUrl);
        const responseData = response?.data || response;
        console.log("responseData", responseData)
        let dataToReturn = responseData;
        if (filters?.filterType=="byPrice"){
            dataToReturn = responseData?.filter((coin:any) => Number(coin.current_price) >= filters.lowerFilterValue && Number(coin.current_price) <= filters.upperFilterValue);
            console.log("filtered by price", dataToReturn)
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