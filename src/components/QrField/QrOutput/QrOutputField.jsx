import React from "react";

import "./QrOutputField.css"

import TextButton from "../../UI/Button/TextButton/TextButton";

const QrOutputField = (props) => {

    const {qrImage, onDownloadQrCode} = props


    return (
        <>
            <div className="qr-output-field">
                <img className="qr-output-image" alt="qr code image" src={qrImage} />
                <TextButton className="qr-output-button" onClick={onDownloadQrCode}><a href={qrImage} download>Download QR Code</a></TextButton>
            </div>    
        </>
    )
}

export default QrOutputField;