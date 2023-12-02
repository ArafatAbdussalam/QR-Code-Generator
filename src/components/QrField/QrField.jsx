import React, { Fragment, useState } from "react";

import QrInputField from "./QrInput/QrInputField";
import QrOutputField from "./QrOutput/QrOutputField";

const QrField = () => {

    const [isQrCodeDisplayed, setIsQrCodeDisplayed] = useState(false)

    const displayQrCode = () => {
        setIsQrCodeDisplayed(true)
    }

    return (
        <Fragment>
            <QrInputField onDisplayQrCode={displayQrCode} />
            {isQrCodeDisplayed && <QrOutputField />}
        </Fragment>
        
    )
}

export default QrField;

