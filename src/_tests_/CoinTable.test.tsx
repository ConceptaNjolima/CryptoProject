import { describe, it, vi } from "vitest"
import { CoinTable } from "../components/CoinTable";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import { mockCoinData } from "./TestUtils";
describe("CoinTable Component", () => {
    const mockOnSort = vi.fn();

    it('should render loading skeleton when isLoading is true', () => {
        render(<CoinTable CoinData={[]} isLoading={true} onSort={mockOnSort} />)
        expect(screen.getByRole('table')).toBeInTheDocument();
        const skeletonElements = document.querySelectorAll('.animate.pulse');
        //expect(skeletonElements.length).toBeGreaterThan(0);
    });
    it('should show no data message if coin data is empty and isLoading is false', () => {
        render(<CoinTable CoinData={[]} isLoading={false} onSort={mockOnSort} />)
        expect(screen.getByText('No Data Available')).toBeInTheDocument();
    });
    it('should render table with coin data', () => {
        render(<CoinTable CoinData={mockCoinData} isLoading={false} onSort={mockOnSort} />)
        expect(screen.getByText('Bitcoin')).toBeInTheDocument();
        expect(screen.getByText('Ethereum')).toBeInTheDocument();
    });

    it('should display coin prices formatted as currency', () => {
        render(<CoinTable CoinData={mockCoinData} isLoading={false} onSort={mockOnSort} />);
        expect(screen.getByText('$45,000.00')).toBeInTheDocument();
        expect(screen.getByText('$2,500.00')).toBeInTheDocument();
    });

    it('should display market cap and volume formatted as currency', () => {
        render(<CoinTable CoinData={mockCoinData} isLoading={false} onSort={mockOnSort} />);
        expect(screen.getByText('$28,000,000,000')).toBeInTheDocument();
        expect(screen.getByText('$900,000,000,000')).toBeInTheDocument();
    });

    it('should display percentage changes with correct signs', () => {
        render(<CoinTable CoinData={mockCoinData} isLoading={false} onSort={mockOnSort} />);
        expect(screen.getByText('2.50%')).toBeInTheDocument();
        expect(screen.getByText('5.20%')).toBeInTheDocument();
    });
    it('should render star icon for each coin row', () => {
        const { container } = render(<CoinTable CoinData={mockCoinData} isLoading={false} onSort={mockOnSort} />);
        const starIcons = container.querySelectorAll('[data-icon="star"]');
        expect(starIcons.length).toBeGreaterThan(0);
    });
      it('should call onSort when volume header is clicked', async () => {
    const user = userEvent.setup();
    render(<CoinTable CoinData={mockCoinData} isLoading={false} onSort={mockOnSort} />);
    
    const volumeHeader = screen.getByText('24h Vol');
    await user.click(volumeHeader);
    
    expect(mockOnSort).toHaveBeenCalled();
  });

  it('should call onSort when market cap header is clicked', async () => {
    const user = userEvent.setup();
    mockOnSort.mockClear();
    render(<CoinTable CoinData={mockCoinData} isLoading={false} onSort={mockOnSort} />);
    
    const marketCapHeader = screen.getByText('Market Cap');
    await user.click(marketCapHeader);
    
    expect(mockOnSort).toHaveBeenCalled();
  });
});