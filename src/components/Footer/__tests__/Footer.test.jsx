import { render } from "@testing-library/react";
import '@testing-library/jest-dom'

import Footer from "../Footer";

describe('Footer Component', () => {

    test('should render names of developers', () => {
        const component = render(<Footer />)

        const developerOne = component.getByText(/emmanuel akolade/i)
        const developerTwo = component.getByText(/arafat abdussalam/i)

        expect(developerOne).toBeInTheDocument()
        expect(developerTwo).toBeInTheDocument()

        expect(developerOne).toHaveAttribute("href", "https://www.example.com")
        expect(developerTwo).toHaveAttribute("href", "https://www.example.com")
        

    })

    // test(`should render current year`, () => {
    //     const year = new Date().getFullYear()
    //     const component = render(<Footer />)

    //     const selectedMode = component.getByText(`${year}`)
    //     expect(selectedMode).toBeDateString()

    // })

})