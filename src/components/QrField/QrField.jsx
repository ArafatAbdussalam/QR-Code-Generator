import { Fragment, useState } from "react";
import Button from "../UI/Button/Button";
import QrFieldData from "./QrData/QrFieldData";
import QrInputField from "./QrInput/QrInputField";
import QrOutputField from "./QrOutput/QrOutputField";

const QRField = () => {
    
    const [error, setError] = useState(null)
    const [qrCodeImageSrc, setQrCodeImageSrc] = useState(null)
    const [isGeneratingQrCode, setIsGeneratingQrCode] = useState(false)
    const [isGeneratedQrCode, setIsGeneratedQrCode] = useState(null)

    const showQrInputField = () => {
        setIsGeneratingQrCode(true)
    }

    const generateQrCodeHandler = async (generatedQrCodeValue) => {
        setIsGeneratedQrCode(false)

        try {
            const response = await fetch("")

            const data = await response.json()

            const imageSrc = data.image

            setQrCodeImageSrc(imageSrc)

            setIsGeneratedQrCode(true)

        } catch (error) {
            setError(error.message)
            }
        
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
            {isGeneratingQrCode && <QrOutputField onGenerateQrCode={generateQrCodeHandler} imageSrc={qrCodeImageSrc} />}
        </Fragment>
    )
}