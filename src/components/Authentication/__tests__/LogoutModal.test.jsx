import { render } from "@testing-library/react"
import "@testing-library/jest-dom"

import { BrowserRouter } from "react-router-dom";
import LogoutModal from "../AuthModal/LogoutModal"
import TextButton from "../../UI/Button/TextButton/TextButton"



jest.mock("../../UI/Button/TextButton/TextButton")

const component = render(
    <BrowserRouter>
        <LogoutModal/>
    </BrowserRouter>
)


describe('LogoutModal component', () => {

    test('should render question to ask users before they log out', () => {
        const selectedQuestionText = component.getByText(/do you want to logout?/i)
        expect(selectedQuestionText).toBeInTheDocument()
    })

    test(`should render textbutton child component with length of 2`, () => {
        
    })

    test(`should render textButton child component with name "No" `, () => {        
        expect(TextButton).toHaveBeenCalledWith({ children: "No"}, expect.anything())
    })

    test(`should render textButton child component with name "Yes" `, () => {        
        expect(TextButton).toHaveBeenCalledWith({ children: "Yes"}, expect.anything())
    })
})