import React, { Fragment, useContext, useState } from "react";

import AuthContext from "../../store/auth-context";

import TextButton from "../../UI/Button/TextButton";
import QrInputField from "../QrInput/QrInputField";
import QrInputModal from "../../Authentication/AuthModal/QrInputModal";


import "./QrField.css"


const QrField = (props) => {
 
    const {qrFieldItems, onGenerateQrCode} = props

    const [showInputField, setShowInputField] = useState(false)
    const authContext = useContext(AuthContext)

    const showQrInputFieldHandler = () => {


        // if (authContext.isLoggedIn){
        //     setShowInputField(!showInputField)
        // }

        // if (!authContext.isLoggedIn && qrFieldItems.isAuthenticated){
        //     setShowInputField(false)
        //     return(
        //         <AuthModal />
        //     )
        // }

        // if (!authContext.isLoggedIn && qrFieldItems.isAuthenticated) {
        //     setShowInputField(!showInputField)
        // }

        setShowInputField(!showInputField)
    }
    

    return (
        <Fragment>
            <TextButton className="qr-button" onClick={showQrInputFieldHandler}>{qrFieldItems.text}</TextButton>
            <span className="qr-input">
                {showInputField && <QrInputField  fields={qrFieldItems.inputFieldValues} onGenerateQrCode={onGenerateQrCode}  />}
            </span>
           
        </Fragment>
    )
}

export default QrField;