import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'


import TextButton from "../TextButton";

describe("TextButton component", () => {

    test('renders "Hello World" as a text', () => {
        render(<TextButton>Hello World</TextButton>)
        const selectedMode = screen.getByText("Hello World")
        expect(selectedMode).toBeInTheDocument()
    })

    // test('renders expected className', () => {
    //     const component = render(<TextButton>Hello</TextButton>)
    //     const selectedMode = component.getByText("Hello")
        
    //     expect(selectedMode).toHaveClass("text-button")
    
    // })
})

