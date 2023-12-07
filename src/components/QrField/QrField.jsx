import React, { Fragment, useState } from "react";

import Button from "../UI/Button/Button";

import QrInputField from "./QrInput/QrInputField";

const QrField = (props) => {

    const {qrFieldItems, onGenerateQrCode} = props

    const [showInputField, setShowInputField] = useState(false)

    const showQrInputFieldHandler = () => {
        setShowInputField(!showInputField)
    }

    

    return (
        <Fragment>
            <Button onClick={showQrInputFieldHandler}>{qrFieldItems.text}</Button>
            {showInputField && <QrInputField fields={qrFieldItems.inputFieldValues} onGenerateQrCode={onGenerateQrCode} />}
        </Fragment>
    )
}

export default QrField;