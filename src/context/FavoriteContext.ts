import { createContext } from "react"
import type { CoinType } from "../types/CoinTypes";

interface FavoriteContextType {
  favoriteCoins: CoinType[];
  addToFavoriteCoins: (coin: CoinType) => void;
}

export const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined)