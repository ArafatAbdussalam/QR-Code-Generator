import React, {Fragment, useState} from "react";
import Button from "../../UI/Button/Button";

const QrOutputField = (props) => {

    const {qrImage} = props

    return (
        <Fragment>
            <img src={qrImage} />
            <a href={qrImage} download>
                <Button>Download QR Code</Button>
            </a>
            
        </Fragment>
    )
}

export default QrOutputField;