import {render} from "@testing-library/react";
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";

import QrInputField from "../QrInputField";



const mockQrInputFieldItem = [
    {   id: "6",
        text: "wifi",
        isAuthenticated: false,
        inputFieldValues: [
                { id: "a6", label: "Network Name", type: "text", required: "required" }, 
                { id: "b6", label: "Network Type", type: "text", required: "required" },
                { id: "c6", label: "Password", type: "password", required: "required" }, 
                { id: "d6", label: "Logo", type: "file" },
            ],
    },
]
const mockFunction = jest.mock()


describe(`QrInputField Component`, () => {

    const component = render(<QrInputField qrInputFieldItem={mockQrInputFieldItem} onGenerateQrCode = {mockFunction} />)
    test(`should render array of input fields`, () => {

    })

    test(`should render array of input fields with matching array length`, () => {

    })

    test(`should render focus state for first item on the input field array`, () => {

    })
})