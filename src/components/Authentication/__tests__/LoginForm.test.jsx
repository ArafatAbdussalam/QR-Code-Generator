import { render} from "@testing-library/react";
import "@testing-library/jest-dom"

import { BrowserRouter } from "react-router-dom";
import LoginForm from "../LoginForm"



const component = render(
    <BrowserRouter>
        <LoginForm />
    </BrowserRouter>
)

describe(`SignupForm Component`, () => {

    test(`should render role with name "form" `, () => {
        const selectedMode = component.getByRole("form")
        expect(selectedMode).toBeInTheDocument()
    })

    test('', () => {
        const selectedMode = component.getByLabelText(/email/i)
        fireEvent.change(selectedMode, { target: {value: "sampleemail@gmail.com"}})
        expect(screen.findByText(/sampleemail@gmail.com/i)).toBeInTheDocument()
    })

    test('', () => {
        const selectedMode = component.getByLabelText(/password/i)
        fireEvent.change(selectedMode, { target: {value: "123456!@#$%ABCDEF"}})
        expect(screen.findByText(/123456!@#$%ABCDE/i)).toBeTruthy()
    })

    test(`should render textbutton child component with name "login" `, () => {
        const selectedMode = component.getByText(/login/i)
        fireEvent(selectedMode, new MouseEvent("click")) 
    })

    test(`should render text to ask users if they have no account`, () => {
        const selectedMode = component.getByText(/you do not have an account?/i)
        expect(selectedMode).toBeInTheDocument()
    })

    test(`should render link that redirects users to Signup page`, () => {
        // mock child component
        const selectedMode = component.getByRole("link", {name: "Sign up"})
        fireEvent(selectedMode, new MouseEvent("click")) 
    })

    test(`should render cancel button`, () => {
        const selectedMode = component.getByRole("button", {name: /cancel/i})
        fireEvent(selectedMode, new MouseEvent("click")) 
        expect(screen.findByText(/login/i)).toBeNull()
    })

})