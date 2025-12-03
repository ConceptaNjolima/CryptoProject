import {describe} from "vitest"
import { render, screen } from "@testing-library/react"
import { Coin } from "../components/Coin"
import { CoinValues } from "./TestUtils"
describe ('Coin Component', ()=>{
it('should render Coin component', () =>{
    const coinContainer = render(<Coin {...CoinValues}/>);
    console.log(coinContainer)
    expect(coinContainer).toMatchSnapshot();
})
it("The coin values show as expected", ()=>{
   render(<Coin {...CoinValues}/>);
   const coinImage = screen.getByRole("img")
   expect(coinImage).toHaveAttribute("src","imageUrl")
   expect(screen.getByText("name")).toBeInTheDocument();
   expect(screen.getByText("symbol")).toBeInTheDocument();
})
})