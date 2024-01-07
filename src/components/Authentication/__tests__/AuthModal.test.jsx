import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'


import LoginModal from "../AuthModal/LoginModal";
import LogoutModal from "../AuthModal/LogoutModal";



describe("loginModal component", () => {

    test('renders "Hello World" as a text', () => {
        render(<LoginModal />)
        const selectedMode = screen.getByText("copyright")
        expect(selectedMode).toBeInTheDocument()
    })

})

describe("logoutModal component", () => {

    test('renders "Hello World" as a text', () => {
        render(<LogoutModal />)
        const selectedMode = screen.getByText("copyright")
        expect(selectedMode).toBeInTheDocument()
    })

})