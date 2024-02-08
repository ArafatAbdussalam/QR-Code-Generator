import {render, fireEvent} from "@testing-library/react";
import '@testing-library/jest-dom'

import TextButton from "../TextButton";



describe("TextButton component", () => {
    const component = render(<TextButton>mock button name</TextButton>)
    const mockFunction = jest.fn()
    
    test(`should render button with specified name`, () => {
        const selectedMode = component.getByRole("button", {name: /mock button name/i})
        expect(selectedMode).toBeInTheDocument()
    })

    test(`should have class name of text button`, () => {
        const selectedMode = component.getByText(/mock button name/i)
        expect(selectedMode).toHaveClass("text-button")
    })

    test(`should have type attribute of button`, () => {
        const selectedMode = component.getByRole("button")
        expect(selectedMode).toHaveAttribute("type", {name: "button"})
    })

    test(`should render mock function when clicked once with mouse`, () => {
        const selectedMode = component.getByRole("button")
        fireEvent(selectedMode, new MouseEvent("click")) 
        expect(mockFunction).toHaveBenCalledTimes(1)
    })

    test(`should render mock function when pressed once with keyboard`, () => {
        const selectedMode = component.getByRole("button")
        fireEvent.keyDown(selectedMode, {key: 'Enter', code: 'Enter'})
        expect(mockFunction).toHaveBenCalledTimes(1)
    })
})

