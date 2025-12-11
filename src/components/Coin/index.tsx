import type { CoinType } from '../types/CoinTypes';

export const Coin = (coinInfo: Pick<CoinType, 'image' | 'name' | 'symbol'>) => {
    return (
        <div className="flex items-center group">
            <div>
                <img
                    src={coinInfo.image}
                    alt={coinInfo.name}
                    className="h-8 w-8 rounded-full object-cover shadow-sm group-hover:shadow-md transition-shadow duration-200"
                    onError={(e) => {
                        e.currentTarget.src = 'https://cdn-icons-png.flaticon.com/128/15393/15393096.png';
                    }}
                />
            </div>
            <div className="pl-1 min-w-0">
                <p className="font-semibold text-gray-900 dark:text-gray-100 truncate whitespace-normal group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {coinInfo.name}
                </p>
                <p className="uppercase text-xs font-medium text-gray-500 dark:text-gray-400 tracking-wider">
                    {coinInfo.symbol}
                </p>
            </div>
        </div>
    )
}