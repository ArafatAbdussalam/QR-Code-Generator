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

    test(`should render label text with "Email" and "Password" `, () => {
        const emailLabelText = component.getByLabelText(/email/i)
        const passwordLabelText = component.getByLabelText(/password/i)

        expect(emailLabelText).toBeInTheDocument()
        expect(passwordLabelText).toBeInTheDocument()
    })

    test(`should render textbutton child component with name "login" `, () => {
        const selectedMode = component.getByText(/login/i)
        expect(selectedMode).toBeInTheDocument()
    })

    test(`should render text to ask users if they have no account`, () => {
        const selectedMode = component.getByText(/you do not have an account?/i)
        expect(selectedMode).toBeInTheDocument()
    })

    test(`should render link that redirects users to Signup page`, () => {
        // mock child component
        const selectedMode = component.getByRole("link", {name: "Sign up"})
        expect(selectedMode).toBeInTheDocument()
    })

    test(`should not render error message if login attempt is successful`, () => {
        // mock api
    })

    test(`should render error message if login attempt is not successful`, () => {
        // mock api
    })

    test(`should render cancel button`, () => {
        const selectedMode = component.getByRole("button", {name: /cancel/i})
        // render function when clicked
        expect(selectedMode).toBeInTheDocument()
    })

})