import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'


import SignupForm from "../SignupForm";

describe("Footer component", () => {

    test('renders "Hello World" as a text', () => {
        render(<SignupForm />)
        const selectedMode = screen.getByText("copyright")
        expect(selectedMode).toBeInTheDocument()
    })

})