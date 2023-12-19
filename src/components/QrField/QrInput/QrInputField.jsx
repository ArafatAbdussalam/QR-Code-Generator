import { Fragment, useRef, useState } from "react";
import Input from "./Input";

import TextButton from "../../UI/Button/TextButton";

const QrInputField = (props) => {

    const {fields, onGenerateQrCode } = props

    const [inputValue, setInputValue] = useState()


    let qrInputValues = [];

    const valueChangeHandler = (event) => {

        setInputValue(
            event.target.value
        )

        qrInputValues.push(event.target.value)

    }

    const qrCodeSubmitHandler = (event) => {
        event.preventDefault()

        console.log(qrInputValues)

        onGenerateQrCode(qrInputValues)

        setInputValue("")
    }

    const qrInputs = fields.map(
        (field, index) => {
            return (
                <Input 
                    key = {index}
                    label = {field.label} 
                    type = {field.type} 
                    required = {field.required} 
                    onChange = {valueChangeHandler}
                    value = {inputValue}
                />
            )
        }
    )


    return (
        <Fragment>
            <form name="inputForm" className="input-form" onSubmit={qrCodeSubmitHandler}>
                {qrInputs}
                <TextButton className="input-button" type="submit">Generate</TextButton>
            </form>
        </Fragment>
    )
}

export default QrInputField;