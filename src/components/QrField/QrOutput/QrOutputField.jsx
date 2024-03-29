import React from "react";

import "./QrOutputField.css"

import TextButton from "../../UI/Button/TextButton/TextButton";

const QrOutputField = (props) => {

    const {qrImage, onDownloadQrCode} = props

    return (
        <>
            <div className="qr-output-field">
                <h3 className="qr-output-field-heading" aria-live="polite">Qr Code Image is generated</h3>
                <img className="qr-output-image" alt="graphical representation of generated qr code" src={qrImage} />
                <TextButton className="qr-output-button" onClick={onDownloadQrCode}><a href={qrImage} download>Download QR Code</a></TextButton>
            </div>    
        </>
    )
}

export default QrOutputField;