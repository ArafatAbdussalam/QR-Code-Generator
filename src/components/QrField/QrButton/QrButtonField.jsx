import { useContext } from "react";

import "./QrButtonField.css"

import Button from "../../UI/Button/Button";
import QrFieldData from "../QrData/QrFieldData";
import AuthContext from "../../store/auth-context";
import QrInputField from "../QrInput/QrInputField";


const QrButtonField = () => {

    const context = useContext(AuthContext)

    const QrButtons = QrFieldData

    const showQrInputFieldHandler = () => {

        if (!context.isLoggedIn) {
            return
            // works for authenticated users only
        }
        
        if (context.isLoggedIn) {
            return (
                <QrInputField />
            )

        }
    }

    QrButtons.map(
        (button) => {
            return (
                <Button key={button.id} label={button.text} onClick={showQrInputFieldHandler}/>
            )

        }
    )

    return (
        {QrButtons}
    )
}

export default QrButtonField;