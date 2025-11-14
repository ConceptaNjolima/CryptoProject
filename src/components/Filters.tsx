import React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import type { FiltersProps } from '../types/CoinTypes';

const valuetext = (value: number) => {
    return `$${value}`;
}

const FiltersSkeleton = () => {
    return (
        <aside className="flex-1/4 p-3 bg-white shadow animate-pulse">
            <div className='mb-4'>
                <div className='h-6 bg-gray-300 dark:bg-gray-600 rounded w-24 mb-3'></div>
                <div className='h-10 bg-gray-200 dark:bg-gray-700 rounded w-full'></div>
            </div>

            {Array(3).fill(0).map((_, i) => (
                <div key={i} className='mb-6 pb-4 border-b border-gray-200 dark:border-gray-700'>
                    <div className='h-5 bg-gray-300 dark:bg-gray-600 rounded w-32 mb-3'></div>
                    <div className='mb-4'>
                        <div className='h-2 bg-gray-200 dark:bg-gray-700 rounded mb-2'></div>
                        <div className='flex justify-between'>
                            <div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-12'></div>
                            <div className='h-4 bg-gray-200 dark:bg-gray-700 rounded w-12'></div>
                        </div>
                    </div>
                    <div className='h-10 bg-gray-200 dark:bg-gray-700 rounded w-full'></div>
                </div>
            ))}

            <div className='pt-4 border-t border-gray-200 dark:border-gray-700'>
                <div className='h-5 bg-gray-300 dark:bg-gray-600 rounded w-32 mb-3'></div>
                <div className='h-10 bg-gray-200 dark:bg-gray-700 rounded w-full mb-2'></div>
                <div className='h-10 bg-gray-200 dark:bg-gray-700 rounded w-full'></div>
            </div>
        </aside>
    )
}
export const Filters = ({ onFilter, isLoading }: FiltersProps) => {
    const [priceValue, setPriceValue] = React.useState<number[]>([10, 100]);
    const [volumeValue, setVolumeValue] = React.useState<number[]>([10, 100]);
    const [marketCapValue, setMarketCapValue] = React.useState<number[]>([10, 100]);

    const handlePriceFilterChange = (_e: Event, newValue: number[]) => {
        setPriceValue(newValue);
    };
    const handleVolumeFilterChange = (_e: Event, newValue: number[]) => {
        setVolumeValue(newValue);
    };
    const handleMarketCapFilterChange = (_e: Event, newValue: number[]) => {
        setMarketCapValue(newValue);
    };

    if (isLoading) {
        return <FiltersSkeleton />
    }

    return (
        <aside className="p-3 bg-white dark:bg-gray-800">
            <h3 className='text-lg font-semibold  text-gray-700 dark:text-gray-300 mb-2"'>Filters</h3>
            <div className='md-4'>
                <button className="block w-full mb-1 p-2 bg-gray-200 rounded hover:bg-gray-300" onClick={() => onFilter((prev) => ({ ...prev, filterType: "" }))}>Reset filters</button>
            </div>
            <div>
                <div>
                    <em className='float-left  text-gray-700 dark:text-gray-300 mb-2"'>By Price</em>
                    <Box sx={{ width: 300 }}>
                        <Slider
                            getAriaLabel={() => 'Filter by price'}
                            value={priceValue}
                            onChange={handlePriceFilterChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                            min={0}
                            max={10000}
                        />
                    </Box>
                    <button className="block w-full mb-1 p-2 bg-gray-200 rounded hover:bg-gray-300" type="submit" onClick={() => onFilter((prev: any) => ({ ...prev, filterType: "byPrice", lowerPriceFilterValue: priceValue[0], upperPriceFilterValue: priceValue[1] }))} >Filter By Price</button>
                </div>
                <div>
                    <em className='float-left  text-gray-700 dark:text-gray-300 mb-2"'>By Volume</em>
                    <Box sx={{ width: 300 }}>
                        <Slider
                            getAriaLabel={() => 'Filter by Volume'}
                            value={volumeValue}
                            onChange={handleVolumeFilterChange as any}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                            min={5000}
                            step={10000}
                            max={1000000}
                        />
                    </Box>
                    <button className="block w-full mb-1 p-2 bg-gray-200 rounded hover:bg-gray-300" type="submit" onClick={() => onFilter((prev: any) => ({ ...prev, filterType: "byVolume", lowerVolumeFilterValue: volumeValue[0], upperVolumeFilterValue: volumeValue[1] }))} >Filter By Volume</button>
                </div>
                <div>
                    <em className='float-left text-gray-700 dark:text-gray-300 mb-2"'>By MarketCap</em>
                    <Box sx={{ width: 300 }}>
                        <Slider
                            getAriaLabel={() => 'Filter by MarketCap'}
                            value={marketCapValue}
                            onChange={handleMarketCapFilterChange as any}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                            min={1000000}
                            step={1000000}
                            max={100000000000}
                        />
                    </Box>
                    <button className="block w-full mb-1 p-2 bg-gray-200 rounded hover:bg-gray-300" type="submit" onClick={() => onFilter((prev: any) => ({ ...prev, filterType: "byMarketCap", lowerMarketCapFilterValue: marketCapValue[0], upperMarketCapFilterValue: marketCapValue[1] }))} >Filter By Market Cap</button>
                </div>
            </div>
            <div>
                <em className='float-left  text-gray-700 dark:text-gray-300 mb-2"'>By 24 hr Trend</em>
                <button className="block w-full mb-1 p-2 bg-gray-200 rounded hover:bg-gray-300" type="submit" onClick={() => onFilter((prev: any) => ({ ...prev, filterType: "Gainers24hr" }))}>Filter By 24 hr Increase</button>
                <button className="block w-full mb-1 p-2 bg-gray-200 rounded hover:bg-gray-300" type="submit" onClick={() => onFilter((prev: any) => ({ ...prev, filterType: "Losers24hr" }))}>Filter By 24 hr Decrease</button>
            </div>
        </aside>
    )
}