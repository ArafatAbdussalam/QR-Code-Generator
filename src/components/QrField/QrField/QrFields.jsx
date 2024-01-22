import { useState } from "react";

import QrFieldData from "../QrData/QrFieldData";
import QrTextButton from "../QrTextButton/QrTextButton"
import QrInputModal from "../../Authentication/AuthModal/QrInputModal";
import QrInputField from "../QrInput/QrInputField";
import Loading from "../../Loading/Loading";
import QrOutputField from "../QrOutput/QrOutputField";

import qrSampleImage from  "./sampleImage.png"

const QrFields = () => {

    const [showQrInputField, setShowQrInputField] = useState(false)
    const [qrFieldIsAuth, setQrFieldIsAuth] = useState(false)
    const [qrInputFieldItem, setQrInputFieldItem] = useState({})
    const [showQrOutputField, setShowQrOutputField] = useState(false)
    const [isQrCodeGenerating, setIsQrCodeGenerating] = useState(false)
    const [isQrCodeGenerated, setIsQrCodeGenerated] = useState(false)
    const [qrOutputErrorMessage, setQrOutputErrorMessage] = useState("")
    const [qrImage, setQrImage] = useState(null)


    const qrFieldItems = QrFieldData


    const showQrInputHandler = (buttonId) => {

        const currentButtonIndex = qrFieldItems[buttonId - 1]
        const currentQrInputFieldItem = currentButtonIndex

        const qrFieldIsAuth = currentQrInputFieldItem.isAuthenticated

        if(qrFieldIsAuth) {
            setQrFieldIsAuth(true)
            setShowQrInputField(false)
            setShowQrOutputField(false)
            return;
        }

        if(!qrFieldIsAuth) {
            setQrFieldIsAuth(false)
            setShowQrInputField(true)
        }
    

        setQrInputFieldItem(
            currentQrInputFieldItem
        )

        setShowQrInputField(true)
        setShowQrOutputField(false)
    }

    
    
    const generateQrCodeHandler = async (inputValues) => {
        setShowQrOutputField(true)
        setShowQrInputField(false)
        setIsQrCodeGenerating(true)
        setIsQrCodeGenerated(false)
        console.log("qr code is generating")

        setQrImage(qrSampleImage)

        setTimeout(
            () => {
                setShowQrOutputField(true)
                setShowQrInputField(false)
                setIsQrCodeGenerating(false)
                setIsQrCodeGenerated(true)
                console.log("qr code is generated")
            }, 5000
        )

        // try {
        //     const url = ""
        //     const response = await axios.post(url,
        //         JSON.stringify({qrInputValues}),
        //         {
        //             headers: {"Content-Type": "application/json"},
        //         }
        //     )

        //     const result = await response.json()

        //     const qrImage = result.image

        //     setQrImage(qrImage)

        // setShowQrOutputField(true)
        // setIsQrCodeGenerated(true)
        
        // } catch (error) {
            // if(error){
            // // setQrOutputErrorMessage("Unable to load QrCode Image. Try again")
            // }
            // setIsQrCodeGenerated(false)
            // }
        // }
    }


    const hideQrCodeField= () => {
        setTimeout( 
            () => {
                setShowQrInputField(false)
                setShowQrOutputField(false)
            }, 6000
        )
    }

    return(
        <>
            <QrTextButton onShowQrInputField={showQrInputHandler} qrButtonFieldItem={qrFieldItems} /> 

            {qrFieldIsAuth && <QrInputModal className="qr-input-modal" />}

            {showQrInputField && <QrInputField onGenerateQrCode={generateQrCodeHandler} qrInputFieldItem={qrInputFieldItem} /> }

            {!showQrInputField && showQrOutputField && isQrCodeGenerating && !isQrCodeGenerated && <Loading />}
            {!showQrInputField && showQrOutputField && !isQrCodeGenerating && isQrCodeGenerated && <QrOutputField qrImage={qrImage} onDownloadQrCode={hideQrCodeField} /> }
        </>
    )
}

export default QrFields;