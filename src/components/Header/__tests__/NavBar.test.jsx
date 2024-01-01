import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'


import NavBar from "../NavBar/NavBar";

describe("Footer component", () => {

    test('renders "Hello World" as a text', () => {
        render(<NavBar/>)
        const selectedMode = screen.getByText("copyright")
        expect(selectedMode).toBeInTheDocument()
    })

})