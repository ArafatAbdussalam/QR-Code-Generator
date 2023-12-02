import React, {Fragment, useState} from "react";
import Button from "../../UI/Button/Button";

const QrOutputField = (props) => {

    const {onDownloadQrCode, imageSrc} = props;

    const [isGenerating, setIsGenerating] = useState(false)
    

    // get image src based on data passed into qrinputfield

    const downloadQrCodeHandler = async (event) => {
        event.preventDefault()

        try {
            const response = await fetch("", {
                body: JSON.stringify(),
                headers: {
                    "Content-Type": "application/json",
                }
            })

            const imageSrc = response.qrImage

        } catch (error) {

        }

        onDownloadQrCode(data)
    }


    return (
        <Fragment>
            <img src={imageSrc} />
            <a href={imageSrc} download>
                <Button onClick={downloadQrCodeHandler}>Download QR Code</Button>
            </a>
            
        </Fragment>
    )
}

export default QrOutputField;