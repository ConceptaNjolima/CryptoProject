type CoinInfo ={
    image:string,
    name:string,
    symbol:string
}
export const  Coin = (coinInfo:CoinInfo) => {
    return (
        <div className="flex flex-row items-center">
            <img src={coinInfo.image} alt={coinInfo.name} className="size-7 md-2"/>
            <div>
                <p className="font-semibold">{coinInfo.name}</p>
                <p className="uppercase font-light font-sans">{coinInfo.symbol}</p>
            </div>
        </div>
    )
}