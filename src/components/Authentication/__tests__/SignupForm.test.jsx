import { render} from "@testing-library/react";
import "@testing-library/jest-dom"

import { BrowserRouter } from "react-router-dom";
import SignupForm from "../SignupForm";



describe(`SignupForm Component`, () => {

    const component = render(
        <BrowserRouter>
            <SignupForm />
        </BrowserRouter>
    )

    test(`should render role with name "form" `, () => {
        const selectedMode = component.getByRole("form")
        expect(selectedMode).toBeInTheDocument()
    })


    test(`should render label text with "Email", "Password" and "Confirm Password" `, () => {
        const emailLabelText = component.getByLabelText(/email/i)
        const passwordLabelText = component.getByLabelText(/password/i)
        const confirmPasswordLabelText = component.getByLabelText(/confirm password/i)

        expect(emailLabelText).toBeInTheDocument()
        expect(passwordLabelText).toBeInTheDocument()
        expect(confirmPasswordLabelText).toBeInTheDocument()
    })

    test(`should render textbutton child component with name "sign up" `, () => {
        const selectedMode = component.getAllByText('sign up/i')
        expect(selectedMode).toBeInTheDocument()
    })

})