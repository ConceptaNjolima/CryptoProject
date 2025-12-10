export type CoinType = {
    id: string;
    image: string;
    name: string;
    symbol: string;
    current_price: number;
    price_change_percentage_1h_in_currency: number;
    price_change_percentage_24h_in_currency: number;
    price_change_percentage_7d_in_currency: number;
    total_volume: number;
    market_cap: number;
    sparkline_in_7d: {
        price: number[];
    };
}

export type FiltersState = {
    sortBy: string;
    filterType: string;
    lowerPriceFilterValue: number;
    upperPriceFilterValue: number;
    lowerVolumeFilterValue: number;
    upperVolumeFilterValue: number;
    lowerMarketCapFilterValue: number;
    upperMarketCapFilterValue: number;
}

export type FiltersProps = {
    onFilter: (filters: FiltersState | ((prev: FiltersState) => FiltersState)) => void;
    isLoading: boolean;
};

export type ChartDataPoint = {
    index: number;
    value: number;
};

export type SortFunction = (prevState: FiltersState) => FiltersState;

export type CoinTableProps = {
    CoinData: CoinType[];
    isLoading: boolean;
    onSort: (sortFn: SortFunction) => void;
};

export type FavoriteCoinTableProps = {
    CoinData?: CoinType[];
};