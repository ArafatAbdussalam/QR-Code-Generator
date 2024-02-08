import {render} from "@testing-library/react";
import '@testing-library/jest-dom'

import QrTextButton from "../QrTextButton";



const mockFunction = jest.fn()

const mockFieldItems = [
    {   id: "5",
        text: "whatsapp",
        isAuthenticated: false,
        inputFieldValues:[
                { id: "a5", label: "WhatsApp", type: "number", required: "required" }, 
                { id: "b5", label: "Logo", type: "file" },
            ],
    },
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

describe(`QrTextButton Component`, () => {

    const component = render(<QrTextButton qrButtonFieldItem={mockFieldItems} onShowQrInputField={mockFunction} />)

    test(`should render text button child component with name "wifi" `, () => {
        const selectedMode = component.getByText(/wifi/i)
        expect(selectedMode).toBeInTheDocument
    })

    test(`should render array of text button child components with length of "2" `, () => {
        const selectedMode = component.getAllByRole("button")
        expect(selectedMode).toHaveLength(2)
    })
    
})