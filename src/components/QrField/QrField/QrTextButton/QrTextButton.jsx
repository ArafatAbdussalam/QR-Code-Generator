import { useState } from "react";

import "./QrTextButton.css"

import TextButton from "../../../UI/Button/TextButton";
import QrInputModal from "../../../Authentication/AuthModal/QrInputModal";



const QrTextButton = (props) => {

    const { onShowQrInputField, qrField } = props

    const [showAuthModal, setShowAuthModal] = useState(false)


    const qrButtonText = qrField.map(
        (item) => {
            return item.text
        }
    )

    // const authItem = qrField.map(
    //     (item) => {
    //         const itemIsAuth = item.isAuthenticated
    //         return itemIsAuth
    //     }
    // )

    const showQrinputFieldHandler = () => {

        // console.log(authItem)

        // const itemIsAuth = authItem

        // if(itemIsAuth) {
        //     setShowAuthModal(true)
        //     return;
        // }

        // if(itemIsAuth) {
        //     setShowAuthModal(false)
        //     onShowQrInputField()
        // }

        onShowQrInputField()


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
