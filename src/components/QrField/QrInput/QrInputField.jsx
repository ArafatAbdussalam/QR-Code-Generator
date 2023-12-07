import { Fragment, useRef } from "react";
import Input from "./Input";

import Button from "../../UI/Button/Button";

const QrInputField = (props) => {

    const {fields, onGenerateQrCode } = props

    const valueRef = useRef()

    const qrCodeSubmitHandler = (event) => {
        event.preventDefault()

        let qrInputValues;

        qrInputValues.push(valueRef.current.value)

        onGenerateQrCode(qrInputValues)
    }

    const qrInputs = fields.map(
        (field, index) => {
            return (
                <Input 
                    key = {index}
                    label = {field.label} 
                    type = {field.type} 
                    required = {field.required} 
                    ref = {valueRef}
                />
            )
        }
    )


    return (
        <Fragment>
            <form className="input-form" onSubmit={qrCodeSubmitHandler}>
                {qrInputs}
                <Button className="input-button" type="submit">Generate</Button>
            </form>
        </Fragment>
    )
}

export default QrInputField;