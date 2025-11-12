import React, { useState } from 'react';
import { useSortedCoins } from '../hooks/useCoins';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

const valuetext = (value: number) => {
  return `$${value}`;
}
export const Filters = ({onFilter, filters}:any) => {
    // const [lowValue, setLowValue] = useState<string>('');
    // const [highValue, setHighValue] = useState<string>('');

    const handleSort = (colName:string)=>{
            const {data} = useSortedCoins(colName)
            console.log(data)
    }

    const [priceValue, setPriceValue] = React.useState<number[]>([10, 50]);

    const handleChange = (event: Event, newValue: number[]) => {
        console.log("filter values", newValue)
        setPriceValue(newValue);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onFilter("byPrice", priceValue[0], priceValue[1]);
    };

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
                    <Box sx={{ width: 300 }}>
                        <Slider
                            getAriaLabel={() => 'Filter by price'}
                            value={priceValue}
                            onChange={handleChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                        />
                    </Box>
                    <button className="block w-full mb-1 p-2 bg-gray-200 rounded hover:bg-gray-300" type="submit" onClick={()=>onFilter((prev:any)=>({...prev, filterType: "byPrice", lowerFilterValue:priceValue[0], upperFilterValue:priceValue[1]}))} >Filter By Price</button>
                    {/* <form onSubmit={handleSubmit}>
                        <input name="lowValue" placeholder="From" value={lowValue} onChange={e => setLowValue(e.target.value)}></input>
                        <input name="highValue" placeholder="To" value={highValue} onChange={e => setHighValue(e.target.value)}></input>
                        <button className="block w-full mb-1 p-2 bg-gray-200 rounded hover:bg-gray-300" type="submit" >Filter By Price</button>
                    </form> */}
                </div>
                <div>
                    <em className='float-left'>By 1hr Trend</em>
                <button className="block w-full mb-1 p-2 bg-gray-200 rounded hover:bg-gray-300" type="submit" onClick = {()=>onFilter("1HrIncrease")}>Filter By Increase</button>
                <button className="block w-full mb-1 p-2 bg-gray-200 rounded hover:bg-gray-300" type="submit" onClick = {()=>onFilter("1HrDecrease")}>Filter By Decrease</button>
                </div>
            </div>
    )
}