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
        const marketUrl = "/list";
        const data = await this.get(marketUrl);
        return data;
    }
}

export const coinService = new CoinService();