import type { CoinType } from "../types/CoinTypes";
export const mockCoinData: CoinType[] = [
  {
    id: 'bitcoin',
    symbol: 'btc',
    name: 'Bitcoin',
    image: 'https://example.com/bitcoin.png',
    current_price: 45000,
    price_change_percentage_1h_in_currency: 2.5,
    price_change_percentage_24h_in_currency: -1.3,
    price_change_percentage_7d_in_currency: 5.2,
    total_volume: 28000000000,
    market_cap: 900000000000,
    sparkline_in_7d: { price: [44000, 44500, 45000, 45500, 46000, 45800, 45000] }
  },
  {
    id: 'ethereum',
    symbol: 'eth',
    name: 'Ethereum',
    image: 'https://example.com/ethereum.png',
    current_price: 2500,
    price_change_percentage_1h_in_currency: 1.2,
    price_change_percentage_24h_in_currency: 3.4,
    price_change_percentage_7d_in_currency: -2.1,
    total_volume: 15000000000,
    market_cap: 300000000000,
    sparkline_in_7d: { price: [2400, 2420, 2450, 2500, 2520, 2510, 2500] }
  }
];