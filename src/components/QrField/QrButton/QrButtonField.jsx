import React, { Fragment } from "react";

import "./QrButtonField.css"
import QrFieldData from "../QrData/QrFieldData";
import Button from "../../UI/Button/Button";

const QrButtonField = (props) => {

    const {onShowQrInputField} = props

    const qrData = QrFieldData

    const QrButtons = qrData.map(
            (item) => {
                
                const buttonText = item.text

                return (
                    <Button key={item.id} onClick={onShowQrInputField}>{buttonText}</Button>
                )
            }
        )

    return (
        <Fragment>
            {QrButtons}
        </Fragment>
    )
}

export default QrButtonField;