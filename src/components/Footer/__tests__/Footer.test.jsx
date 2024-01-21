import { render } from "@testing-library/react";
import '@testing-library/jest-dom'

import Footer from "../Footer";

describe('Footer Component', () => {

    const component = render(<Footer />)

    test('should render names of developers', () => {
        const developerOne = component.getByText(/emmanuel akolade/i)
        const developerTwo = component.getByText(/arafat abdussalam/i)

        expect(developerOne).toBeInTheDocument()
        expect(developerTwo).toBeInTheDocument()

        expect(developerOne).toHaveAttribute("href", "https://www.example.com")
        expect(developerTwo).toHaveAttribute("href", "https://www.example.com")

    })

    test(`should render current year`, () => {
        
    })

})