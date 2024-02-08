import { fireEvent, render } from "@testing-library/react"
import "@testing-library/jest-dom"

import { BrowserRouter } from "react-router-dom";
import LogoutModal from "../AuthModal/LogoutModal"
import TextButton from "../../UI/Button/TextButton/TextButton"



const component = render(
    <BrowserRouter>
        <LogoutModal/>
    </BrowserRouter>
)

jest.mock("../../UI/Button/TextButton/TextButton")

const mockChildComponent = ""

const container = document.createElement("div")
document.body.appendChild(container)
ReactDOM.createPortal(<LogoutModal />)
const selectedMode = container.innerHTML
expect(selectedMode).toMatchSnapshot()
expect(container).toBeInTheDocument()


describe('LogoutModal component', () => {

    test('should render question to ask users before they log out', () => {
        const selectedQuestionText = component.getByText(/do you want to logout?/i)
        expect(selectedQuestionText).toBeInTheDocument()
    })

    test(`should render textbutton child component with length of 2`, () => {
        const selectedMode = component.getAllByRole("button")
        expect(selectedMode).toHaveLength(2)
    })

    test(`should render textButton child component with name "Yes" `, () => {   
        const selectedMode = component.getByText(/yes/i) 
        fireEvent(selectedMode, new MouseEvent("click"))  
        expect(screen.findByText(/do you want to logout?/i)).toBeNull()  
    })

    test(`should render textButton child component with name "No" `, () => {        
        const selectedMode = component.getByText(/no/i) 
        fireEvent(selectedMode, new MouseEvent("click")) 
        expect(screen.findByText(/do you want to logout?/i)).toBeNull() 
    })
})



