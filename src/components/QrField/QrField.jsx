import { Fragment, useState } from "react";
import QrInputField from "./QRInputField";
import QrOutputField from "./QrOutputField";

const QrField = () => {

    const [codeIsGenerating, setCodeIsGenerating] = useState(false)
    const [codeIsGenerated, setCodeIsGenerated] = useState(false)
    const [qrCode, setQrCode] = useState([])


    const generateCodeHandler = async (data) => {
        setCodeIsGenerating(true)


        try {
            const response = await fetch()

            if (!response.ok) {
                throw new Error("Request failed!")
            }

            const data = await response.json()

            const generatedCode = []

            for (const codeKey in data) {
                generatedCode.push({id: code, text: data[codeKey].text})
            }

            setQrCode(generatedCode)
        }
        
    }

    const generateCodeHandler = (QrCode) => {
        setQrCode(QrCode)
    }

    return (
        <Fragment>
            <QrInputField onGenerateCode={generateCodeHandler} />
            { codeIsGenerated && <QrOutputField onDownloadQrCode = {downloadQrCode} /> }
        </Fragment>
    )
}

export default QrField;