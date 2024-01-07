import { useState } from "react";

import "./QrTextButton.css"

import QrFieldData from "../../QrData/QrFieldData";
import TextButton from "../../../UI/Button/TextButton";
import QrInputModal from "../../../Authentication/AuthModal/QrInputModal";



const QrTextButton = (props) => {

    const { qrButtonFieldItem, onShowQrInputField } = props

    const [showAuthModal, setShowAuthModal] = useState(false)


    // const qrFieldItems = QrFieldData
    // // to find the index of the field
    // // item[currentButton]

    // const fieldItemId = qrFieldItems.map(
    //     (item) => {
    //         return item.id
    //     }  
    // )

    // const authItem = qrField.map(
    //     (item) => {
    //         const itemIsAuth = item.isAuthenticated
    //         return itemIsAuth
    //     }
    // )

    const showQrInputFieldHandler = (buttonId) => {

        console.log(buttonId)

        // on Show Qr Input Field based on this id
        // get the button id - 
        // set the id for which the inputValue will be displayed
        // let be id be called current Id
        // that would be 
        onShowQrInputField(buttonId)

    }





    const qrButtonField = qrButtonFieldItem.map(
        (qrField) => {
            return(
                <TextButton className="qr-button" key={qrField.id} onClick={showQrInputFieldHandler.bind(null, qrField.id)} >{qrField.text}</TextButton>
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
