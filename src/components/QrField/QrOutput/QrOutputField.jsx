import React, {Fragment} from "react";

import "./QrOutputField.css"

import TextButton from "../../UI/Button/TextButton";

const QrOutputField = (props) => {

    const {qrImage} = props

    return (
        <Fragment>
            <div className="qr-output-field">
                <img className="qr-output-image" src={qrImage} />
                <TextButton className="qr-output-button"><a href={qrImage} download>Download QR Code</a></TextButton>
            </div>    
        </Fragment>
    )
}

export default QrOutputField;