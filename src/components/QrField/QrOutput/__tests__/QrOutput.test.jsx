import {render} from "@testing-library/react";
import '@testing-library/jest-dom'
import axios from "axios";

import QrOutputField from "../QrOutputField";



jest.mock(axios)

const mockFunction = jest.fn()

const mockQrImage = ""

describe(`QrTextButton Component`, () => {

    const component = render(<QrOutputField qrImage={mockQrImage} onDownloadQrCode={mockFunction} />)

    test(`should render qr image`, () => {
        const selectedMode = component.getByRole("img")
        expect(selectedMode).toHaveAttribute("src", {name: {mockQrImage}})
    })

    test(`should render qr image alt text`, () => {
        const selectedMode = component.getByAltText(/graphical representation of generated qr code/i)
        expect(selectedMode).toBeInTheDocument()
    })

    test(`should render download link from text button child component with href attribute of qr image`, () => {
        const selectedMode = component.getByText('download qr code/i')

        expect(selectedMode).toHaveAttribute("download")
        expect(selectedMode).toHaveHaveAttribute("href", {name: {mockQrImage}})
    })

})