import { useState } from "react";

import QrFieldData from "../QrData/QrFieldData";
import QrTextButton from "./QrTextButton/QrTextButton";
import QrInputField from "../QrInput/QrInputField";
import Loading from "../../Loading/Loading";
import QrOutputField from "../QrOutput/QrOutputField";

import qrImageSample from "./Image.png"

const QrFields = () => {

    const [showInputField, setShowInputField] = useState(false)
    const [qrInputValues, setQrInputValues] = useState([])

    const [showQrOutputField, setShowQrOutputField] = useState(false)
    const [isQrCodeGenerated, setIsQrCodeGenerated] = useState(false)
    const [qrImage, setQrImage] = useState(null)

    const qrFieldItems = QrFieldData


    const showQrInputHandler = () => {
        setShowInputField(!showInputField)
        setShowQrOutputField(false)
    }


    const qrFields = qrFieldItems.map(
        (item) => {
            return item;
        }
    )

    const storeInputValueHandler = (qrInputValue) => {
        setQrInputValues(
            () => {
                return [
                    qrInputValue
                ]
            }
        )
    }

    
    const generateQrCodeHandler = async (inputValues) => {
        setShowQrOutputField(true)

        setIsQrCodeGenerated(false)
        console.log("qr code is generating")
        console.log(qrInputValues)

        setQrImage(qrImageSample)

        setTimeout(
            () => {
                setIsQrCodeGenerated(true)
                console.log("qr code is generated")
            }, 4000
        )



        // try {
        //     const url = ""
        //     const response = await axios.post(url,
        //         JSON.stringify({qrInputValues}),
        //         {
        //             headers: {"Content-Type": "application/json"},
        //         }
        //     )

        //     const result = await response.json()

        //     const qrImage = result.image

        //     setQrImage(qrImage)

        //     setIsQrCodeGenerating(false)
        //     setIsQrCodeGenerated(true)


        // } catch (error) {

        // }
    }





    const qrInPutField = qrFields.map(
        (inputField) => {
            return (
                <QrInputField key={inputField.id} fields={inputField.inputFieldValues} onGenerateQrCode={generateQrCodeHandler} onStoreInputValue={storeInputValueHandler} />
            )
        }
    )


    const hideQrCodeField= () => {
        setTimeout(
            () => {
                setShowInputField(false)
                setShowQrOutputField(false)
            }, 5000
        )
    }

    return(
        <>

            <QrTextButton onShowQrInputField={showQrInputHandler} />

            {showInputField && qrInPutField}

            {showQrOutputField && !isQrCodeGenerated && <Loading />}
            {showQrOutputField && isQrCodeGenerated && <QrOutputField qrImage={qrImage} onDownloadQrCode={hideQrCodeField} /> }
        </>
    )
}

export default QrFields;