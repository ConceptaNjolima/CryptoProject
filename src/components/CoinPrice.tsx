import { useCoinHistory } from "../hooks/useCoin"

export const CoinPrice = (id:any) => {
    console.log("coinPrice_id", id.id)
    const {data} = useCoinHistory(id.id)
    console.log(data)

    return (
        <div>
        <p>CoinPrice</p>
        </div>
    )

}