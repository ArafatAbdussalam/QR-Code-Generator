import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'


import About from "../About/About";

describe("Footer component", () => {

    test('renders "Hello World" as a text', () => {
        render(<About />)
        const selectedMode = screen.getByText("copyright")
        expect(selectedMode).toBeInTheDocument()
    })

})