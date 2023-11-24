import Button from "../UI/Button/Button";
import QRFieldData from "./QRFieldData";

const QrButtonField = () => {

    const QrButtons = QRFieldData

    const showQrInputFieldHandler = () => {
        
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