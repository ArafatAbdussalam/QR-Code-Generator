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

    test('', () => {
        const selectedMode = component.getByLabelText(/confirm password/i)
        fireEvent.change(selectedMode, { target: {value: "123456!@#$%ABCDEF"}})
        expect(screen.findByText(/123456!@#$%ABCDE/i)).toBeTruthy()
        expect(screen.findByText(/ABCDE!@#$-_^%123456/i)).toBeNull()
    })


    test(`should render textbutton child component with name "sign up" `, () => {
        const selectedMode = component.getByText('sign up/i')
        fireEvent(selectedMode, new MouseEvent("click")) 
        expect(selectedMode).toBeInTheDocument()
    })

    test(`should render textbutton child component with name "sign up" `, () => {
        const selectedMode = component.getByText('login/i')
        fireEvent(selectedMode, new MouseEvent("click")) 
        expect(screen.getByRole("button")).toBeInTheDocument()
    })
})