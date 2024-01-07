import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'


import LoginForm from "../LoginForm";



describe("loginForm component", () => {

    test('renders "Hello World" as a text', () => {
        render(<LoginForm />)
        const selectedMode = screen.getByText("copyright")
        expect(selectedMode).toBeInTheDocument()
    })

})