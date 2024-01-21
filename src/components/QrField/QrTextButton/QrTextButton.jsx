import "./QrTextButton.css"

import TextButton from "../../UI/Button/TextButton/TextButton"



const QrTextButton = (props) => {

    const { qrButtonFieldItem, onShowQrInputField } = props


    const showQrInputFieldHandler = (buttonId) => {
        onShowQrInputField(buttonId)
        
    }


    const qrButtonField = qrButtonFieldItem.map(
        (qrField) => {
            return(
                <TextButton  className="qr-button" key={qrField.id} onClick={showQrInputFieldHandler.bind(null, qrField.id)} >{qrField.text}</TextButton>
            )
        }
    )

    return (
        <>
            {qrButtonField}
        </>
    )
}

export default QrTextButton;
