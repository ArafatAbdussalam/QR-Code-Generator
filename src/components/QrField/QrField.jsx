import { Fragment, useState } from "react";
import Button from "../UI/Button/Button";
import QrFieldData from "./QrFieldData";
import QrInputField from "./QRInputField";
import QrOutputField from "./QrOutputField";

const QRField = () => {

    const [isGeneratingQrCode, setIsGeneratingQrCode] = useState(false)
    const [isGeneratedQrCode, setIsGeneratedQrCode] = useState(null)

    const showQrInputField = () => {
        setIsGeneratingQrCode(true)
    }

    const generatedCodeHandler = (generatedQrCodeValue) => {
        setIsGeneratedQrCode(
            () => {
                return (
                    // set the imagesrc to the generatedcodevalue
                    <QrOutputField imageSrc={generatedQrCodeValue} ></QrOutputField>
                )
            }
        )
    }

    const fieldButtonValue = ""

    // if the value of a button is clicked, display the relevant QR input field
    // the qr input field has to match each value of a button field
    // 

    // pseudo-code

    // if a value can be found in a button field, the value has to be an object
    // return an input field, each according to the value
    // if i click on wifi, return an input field with the following inputs: network type, network ssid, password

    return (
        <Fragment>
            <Button onClick={showQrInputField}>{fieldButtonValue}</Button>
            {isGeneratingQrCode && <QrInputField />}
            <QrOutputField onGenerateQrCode={generatedCodeHandler} />
        </Fragment>
    )
}