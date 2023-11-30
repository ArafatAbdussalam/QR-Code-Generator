import React, {Fragment, useState} from "react";
import Button from "../../UI/Button/Button";

const QrOutputField = (props) => {

    const {onDownloadQrCode, imageSrc} = props;

    const [isDownloading, setIsDownloading] = useState(false)
    

    // get qrimage from api using axios method
    // const qrImage = ""
    // const qrLink = ""

    const downloadQrCodeHandler = (event) => {
        event.preventDefault()

        onDownloadQrCode(data)
    }


    return (
        <Fragment>
            <img src={imageSrc} />
            <Button onClick={downloadQrCodeHandler}>Download QR Code</Button>
        </Fragment>
    )
}

export default QrOutputField;