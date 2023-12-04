import { Fragment, useRef } from "react";
import Input from "./Input";

const sampleInputField = () => {

    const {fields, onGenerateQrCode} = props

    const valueRef = useRef()

    const qrInputs = fields.map(
        (field) => {
            return (
                <Input 
                    key = {field.key}
                    label = {field.label} 
                    type = {field.type} 
                    required = {field.required} 
                    ref = {valueRef}
                />
            )
        }
    )


    const generateQrCodeHandler = (event) => {
        event.preventDefault()

        // get all values of all inputs
        const qrInputValues = []

        qrInputValues.push(valueRef.current.value)

        onGenerateQrCode(qrInputValues)
    }

    return (
        <Fragment>
            <form className="input-form" onSubmit={generateQrCodeHandler}>
                {qrInputs}
                <Button className="input-button" type="submit">Generate</Button>
            </form>
        </Fragment>
    )
}

export default sampleInputField;