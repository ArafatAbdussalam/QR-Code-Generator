import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'


import Footer from "../Footer";

describe("Footer component", () => {

    test('renders "Hello World" as a text', () => {
        render(<Footer />)
        const selectedMode = screen.getByText("copyright")
        expect(selectedMode).toBeInTheDocument()
    })

})