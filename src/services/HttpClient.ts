import axios from "axios";

export const httpClient = axios.create({
    baseURL: "https://api.coingecko.com/api/v3/coins",
    headers: {
        "x-cg-demo-api-key": import.meta.env.VITE_COIN_GECKO_API_KEY || ""
    }
});