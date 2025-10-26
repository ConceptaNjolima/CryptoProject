export const  Coin = (coinInfo:any) => {
    return (
        <div>
            <span>{coinInfo.id}</span>
            <span>{coinInfo.name}</span>
            <span>{coinInfo.symbol}</span>
        </div>
    )
}