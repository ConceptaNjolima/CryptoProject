import { httpClient } from "./HttpClient";
import { HttpService } from "./httpService";
import type{ CoinType } from "../types/CoinTypes";

export class CoinService extends HttpService{
    constructor(){
        super(httpClient)
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
            dataToReturn = responseData?.filter((coin:CoinType) => Number(coin.total_volume) >= filters.lowerVolumeFilterValue && Number(coin.total_volume) <= filters.upperVolumeFilterValue);
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
}

export const coinService = new CoinService();