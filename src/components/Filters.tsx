import React, { useState } from 'react';
import type { FiltersProps } from '../types/CoinTypes';
import { useSortedCoins } from '../hooks/useCoins';

export const Filters = ({onFilter, filters}:any) => {
    const [lowValue, setLowValue] = useState<string>('');
    const [highValue, setHighValue] = useState<string>('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const low = lowValue ? Number(lowValue) : undefined;
        const high = highValue ? Number(highValue) : undefined;
        onFilter("byPrice", low, high);
    };

    const handleSort = (colName:string)=>{
            const {data} = useSortedCoins(colName)
            console.log(data)
    }

    return (
            <div className="flex-1/3 p-3">
                <div className='md-4'>
                    <h3 className='text-lg font-semibold'></h3>
                    <select className='w-full p-2 border rounded-2xl' onChange={(e)=>onFilter((prev:any)=>({...prev, sortBy:e.target.value}))}>
                        <option value='volume_asc'>Ascending Volume</option>
                        <option value='volume_desc'>Descending Volume</option>
                    </select>
                </div>
                <div>
                    <h3 className="font-semibold">Filters</h3>
                    <em className='float-left'>By Price</em>
                    <form onSubmit={handleSubmit}>
                        <input name="lowValue" placeholder="From" value={lowValue} onChange={e => setLowValue(e.target.value)}></input>
                        <input name="highValue" placeholder="To" value={highValue} onChange={e => setHighValue(e.target.value)}></input>
                        <button className="block w-full mb-1 p-2 bg-gray-200 rounded hover:bg-gray-300" type="submit" >Filter By Price</button>
                    </form>
                </div>
                <div>
                    <em className='float-left'>By 1hr Trend</em>
                <button className="block w-full mb-1 p-2 bg-gray-200 rounded hover:bg-gray-300" type="submit" onClick = {()=>onFilter("1HrIncrease")}>Filter By Increase</button>
                <button className="block w-full mb-1 p-2 bg-gray-200 rounded hover:bg-gray-300" type="submit" onClick = {()=>onFilter("1HrDecrease")}>Filter By Decrease</button>
                </div>
            </div>
    )
}