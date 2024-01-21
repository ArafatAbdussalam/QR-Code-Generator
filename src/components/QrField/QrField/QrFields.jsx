import { useState } from "react";

import QrFieldData from "../QrData/QrFieldData";
import QrTextButton from "../QrTextButton/QrTextButton"
import QrInputModal from "../../Authentication/AuthModal/QrInputModal";
import QrInputField from "../QrInput/QrInputField";
import Loading from "../../Loading/Loading";
import QrOutputField from "../QrOutput/QrOutputField";

import qrSampleImage from  "./sampleImage.png"

const QrFields = () => {

    const [showInputField, setShowInputField] = useState(false)
    const [qrFieldIsAuth, setQrFieldIsAuth] = useState(false)
    const [qrInputFieldItem, setQrInputFieldItem] = useState({})
    const [showQrOutputField, setShowQrOutputField] = useState(false)
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
            setShowInputField(false)
            setShowQrOutputField(false)
            return;
        }

        if(!qrFieldIsAuth) {
            setQrFieldIsAuth(false)
            setShowInputField(true)
        }
    

        setQrInputFieldItem(
            currentQrInputFieldItem
        )

        setShowInputField(true)
        setShowQrOutputField(false)
    }

    
    
    const generateQrCodeHandler = async (inputValues) => {
        setShowQrOutputField(true)

        setIsQrCodeGenerated(false)
        console.log("qr code is generating")

        setQrImage(qrSampleImage)

        setTimeout(
            () => {
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
                setShowInputField(false)
                setShowQrOutputField(false)
            }, 5000
        )
    }

    return(
        <>
            <QrTextButton onShowQrInputField={showQrInputHandler} qrButtonFieldItem={qrFieldItems} /> 

            {qrFieldIsAuth && <QrInputModal className="qr-input-modal" />}

            {showInputField && <QrInputField onGenerateQrCode={generateQrCodeHandler} qrInputFieldItem={qrInputFieldItem} /> }

            {showQrOutputField && !isQrCodeGenerated && <Loading />}
            {showQrOutputField && isQrCodeGenerated && <QrOutputField qrImage={qrImage} onDownloadQrCode={hideQrCodeField} /> }
        </>
    )
}

export default QrFields;