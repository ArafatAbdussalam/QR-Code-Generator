import {render, fireEvent} from "@testing-library/react"
import "@testing-library/jest-dom"
import "@testing-library/user-event"

import Input from "../Input"
// import userEvent from "@testing-library/user-event"

const mockFunction = jest.fn()



describe(`Input Component`, () => {

    test(`should render label text`, () => {
        const selectedMode = component.getByLabelText(/sample label/i)
        expect(selectedMode).toBeInTheDocument()
    })


    test(`should render number values`, () => {
        const component = render(<Input label="sample label" type="number" onStoreInputValue={mockFunction}/>)
        const selectedMode = component.getByLabelText(/sample label/i)
        fireEvent.change(selectedMode, {target: "123"})
        expect(selectedMode).toHaveValue(123)
    })

})