import React, { Fragment, useContext, useState } from "react";

import AuthContext from "../store/auth-context";

import TextButton from "../UI/Button/TextButton";
import QrInputField from "./QrInput/QrInputField";

import "./QrField.css"


const QrField = (props) => {

    const {qrFieldItems, onGenerateQrCode} = props

    const [showInputField, setShowInputField] = useState(false)
    
    const authContext = useContext(AuthContext)

    const showQrInputFieldHandler = () => {

        const isAuth = qrFieldItems.isAuthenticated

        if (authContext.isLoggedIn) {

            if(isAuth) {

            }


            setShowInputField(!showInputField)
        }

        if (!authContext.isLoggedIn) {
            
            if(!isAuth) {
                setShowInputField(null)

                return (
                    <p>Works for logged in users only</p>
                )
            }
            setShowInputField(null)

        }
    }

    

    return (
        <Fragment>
            <TextButton className="qr-button" onClick={showQrInputFieldHandler}>{qrFieldItems.text}</TextButton>
            {showInputField && <QrInputField fields={qrFieldItems.inputFieldValues} onGenerateQrCode={onGenerateQrCode} />}
        </Fragment>
    )
}

export default QrField;