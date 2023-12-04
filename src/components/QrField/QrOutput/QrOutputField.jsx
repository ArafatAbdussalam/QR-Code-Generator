import React, {Fragment, useState} from "react";
import Button from "../../UI/Button/Button";

const QrOutputField = (props) => {

    const {qrImage} = props

    const downloadQrCodeHandler = async (qrImage) => {

        try {

            await fetch("", {
                body: JSON.stringify({
                    id: qrImage.id,
                    imageSrc: qrImage.src,
                })
            })

        } catch(error) {
    
        }
    

    }
    

    return (
        <Fragment>
            <img src={qrImage} />
            <a href={qrImage} download>
                <Button onClick={downloadQrCodeHandler}>Download QR Code</Button>
            </a>
            
        </Fragment>
    )
}

export default QrOutputField;