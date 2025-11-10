import { httpClient } from "./HttpClient";
import { HttpService } from "./httpService";

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

    async getCoinChart(id:string){
        const chartUrl= `/${id}/market_chart?vs_currency=usd&days=1`;
        return this.get(chartUrl);
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