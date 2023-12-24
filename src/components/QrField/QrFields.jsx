import React, { Fragment, useState } from "react";

import QrFieldData from "./QrData/QrFieldData"
import QrField from "./QrField/QrField"
import QrOutputField from "./QrOutput/QrOutputField";

const QrFields = () => {

    const [isQrCodeGenerated, setIsQrCodeGenerated] = useState(false)
    const [qrImage, setQrImage] = useState(null)
    const [isShowQrOutputField, setIsShowQroutputField] = useState(false)

    
    const generateQrCodeHandler = async (inputValues) => {

        setIsQrCodeGenerated(true)
        setIsShowQroutputField(true)

        try {
            const url = ""
            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify({inputValues}),
                headers: {
                    "Content-Type": "application/json"
                }

            })

            const result = await response.json()
            const qrImage = result.image

            setQrImage(qrImage)

            setIsQrCodeGenerated(true)


        } catch (error) {

        }

    }


    const qrFieldItems = QrFieldData

    const qrField = qrFieldItems.map(
        (qrField, index) => {
            return(
                <QrField key={index} qrFieldItems={qrField} onGenerateQrCode={generateQrCodeHandler} />
            )
        }
    )

    

    return(
        <Fragment>
            {qrField}
            {isQrCodeGenerated && isShowQrOutputField && <QrOutputField qrImage={qrImage} /> }
        </Fragment>
    )
}

export default QrFields; 