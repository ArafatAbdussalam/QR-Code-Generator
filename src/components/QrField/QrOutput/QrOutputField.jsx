import React, {Fragment, useState} from "react";
import Button from "../../UI/Button/Button";

const QrOutputField = (props) => {

    const {qrImage} = props

    return (
        <Fragment>
            <img src={qrImage} />
            <Button><a href={qrImage} download>Download QR COde</a></Button>
            
        </Fragment>
    )
}

export default QrOutputField;