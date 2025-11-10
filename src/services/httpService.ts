export class HttpService {
    client : any;
    constructor(client: any) {
        this.client = client;
    }

    async get(url:string, config = {}){
        try{
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