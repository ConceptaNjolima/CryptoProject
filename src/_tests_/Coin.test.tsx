import { describe } from "vitest"
import { render, screen } from "@testing-library/react"
import { Coin } from "../components/Coin"
import { mockCoinData } from "./TestUtils"
describe('Coin Component', () => {
    it('should render Coin component', () => {
        const coinContainer = render(<Coin {...mockCoinData[0]} />);
        console.log(coinContainer)
        expect(coinContainer).toMatchSnapshot();
    })
    it("The coin values show as expected", () => {
        render(<Coin {...mockCoinData[0]} />);
        const coinImage = screen.getByRole("img")

        expect(coinImage).toHaveAttribute("src", mockCoinData[0].image)
        expect(screen.getByText(mockCoinData[0].name)).toBeInTheDocument();
        expect(screen.getByText(mockCoinData[0].symbol)).toBeInTheDocument();


        //    const firstCoinImage = mockCoinData[0].image;
        //    expect(coinImage).toHaveAttribute("src",firstCoinImage)
        //    expect(screen.getByText("Bitcoin")).toBeInTheDocument();
        //    expect(screen.getByText("btc")).toBeInTheDocument();
    })
})