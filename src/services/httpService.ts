export class HttpService {
    client : any;
    constructor(client: any) {
        this.client = client;
    }

    async get(url:string, config = {}){
        try{

            await this.client.get(url);
        }
        catch(error){
            alert("Failed to fetch coin")
            console.log("Error fetching coin:", error);
            throw error;
        }
    }
}