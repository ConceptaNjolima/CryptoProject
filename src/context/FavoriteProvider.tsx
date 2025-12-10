import { useState, type ReactNode } from 'react'
import {FavoriteContext} from "./FavoriteContext"
import type { CoinType } from '../types/CoinTypes'

type FavoriteProviderProps = {
    children: ReactNode;
};

export const FavoriteProvider = ({children}: FavoriteProviderProps) =>{
    const [favoriteCoins, setFavoriteCoins] = useState<CoinType[]>([])
    
    const addToFavoriteCoins =(coinToAdd:CoinType) => {
        console.log("adding favorite coin:", coinToAdd)
        setFavoriteCoins((currentFavoriteCoins: CoinType[])=>{
            return [...currentFavoriteCoins, {...coinToAdd}]
        });
    }
    return (
    <FavoriteContext.Provider value={{favoriteCoins, addToFavoriteCoins}}>{children}</FavoriteContext.Provider>
)
}