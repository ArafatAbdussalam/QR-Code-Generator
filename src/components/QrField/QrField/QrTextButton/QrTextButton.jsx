import "./QrTextButton.css"

import QrFieldData from "../../QrData/QrFieldData";
import TextButton from "../../../UI/Button/TextButton";

import QrInputModal from "../../../Authentication/AuthModal/QrInputModal";
import { useState } from "react";



const QrTextButton = (props) => {

    const { onShowQrInputField } = props

    const [showAuthModal, setShowAuthModal] = useState(false)


    const qrFieldItems = QrFieldData


    const qrField = qrFieldItems.map(
        (item) => {
            return item
        }
    )

    const qrButtonText = qrField.map(
        (item) => {
            return item.text
        }
    )

    const qrFieldisAuth = qrField.map(
        (item) => {
            return item.isAuthenticated;
        }
    )

    const showQrinputFieldHandler = () => {
        console.log(qrButtonText)

        // const checkQrButtonIsAuth = (buttonValueAuth) => {
        //     if (buttonValueAuth === true) {
        //         setShowAuthModal(true)
        //         return;
        //     }
    
        //     if (buttonValueAuth === false) {
        //         setShowAuthModal(false)
        //         onShowQrInputField()
        //     }
        // }

        // checkQrButtonIsAuth(qrFieldisAuth)

        onShowQrInputField()

        // if i click on a particular button, i want to be able to check the value


    }



    const qrButtonField = qrButtonText.map(
        (qrField) => {
            return(
                <TextButton className="qr-button" key={qrField.id} onClick={showQrinputFieldHandler}>{qrField}</TextButton>
            )
        }
    )

    return (
        <>
            {qrButtonField}
            {showAuthModal && <QrInputModal /> }
        </>
    )
}

export default QrTextButton;
