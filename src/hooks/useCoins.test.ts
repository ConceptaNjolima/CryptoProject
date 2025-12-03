import {describe, it, expect, vi} from "vitest";
import { useQuery } from "@tanstack/react-query";
import { useAllCoins, useCoins } from "./useCoins";
import { coinService } from "../services/CoinService";

vi.mock('@tanstack/react-query');
vi.mock('../services/CoinService')
describe("useCoins Hook", ()=>{
        beforeEach(()=>{
        vi.clearAllMocks();
    });
it('should call useQuery with correct queryKey', ()=>{
    const mockUseQuery = vi.mocked(useQuery);
    mockUseQuery.mockReturnValue({isLoading:false, data:[]} as any )
    useCoins();
    expect (mockUseQuery).toHaveBeenCalledWith(
        expect.objectContaining({
            queryKey:['coins'],
        })
    )
})
it('should call coinService.getAllCoins with empty object',()=>{
    const mockUseQuery = vi.mocked(useQuery);
    mockUseQuery.mockReturnValue({isLoading:false, data:[]} as any);

    useCoins();

    const call = vi.mocked(useQuery).mock.calls[0][0] as any;
    if (typeof call?.queryFn === 'function') {
        call.queryFn();
    }

    expect(coinService.getAllCoins).toHaveBeenCalledWith({});
})
})

describe("useAllCoins Hook", ()=>{
    beforeEach(()=>{
        vi.clearAllMocks();
    });

it('should call useQuery with filters in queryKey', () => {
    const mockUseQuery = vi.mocked(useQuery);
    const filters = {priceValue:[100,200]}
    mockUseQuery.mockReturnValue({isLoading:false, data:[]} as any);

    useAllCoins(filters);

    expect(mockUseQuery).toHaveBeenCalledWith(
        expect.objectContaining({
            queryKey:['allCoins', filters],
        })
    )
});
})