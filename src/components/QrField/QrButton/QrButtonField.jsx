import Button from "../../UI/Button/Button";
import QrFieldData from "../QrData/QrFieldData";

const QrButtonField = () => {

    const QrButtons = QrFieldData

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