import type { AxiosInstance } from 'axios';

export class HttpService {
    client: AxiosInstance;
    constructor(client: AxiosInstance) {
        this.client = client;
    }

    async get(url: string) {
        try {
            console.log("using in httpService", url)
            const response = await this.client.get(url);
            return response.data;
        }
        catch(error){
            // alert("Failed to fetch coin")
            console.log("Error fetching coin:", error);
            throw error;
        }
    }
}