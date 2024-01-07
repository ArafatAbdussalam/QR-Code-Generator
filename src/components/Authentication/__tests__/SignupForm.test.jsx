import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'


import SignupForm from "../SignupForm";



describe("SignupForm component", () => {

    test('renders "Hello World" as a text', () => {
        render(<SignupForm />)
    })

})