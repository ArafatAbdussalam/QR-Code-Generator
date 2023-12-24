import { Fragment, useRef, useState } from "react";

import "./QrInputField.css"

import Input from "./Input";

import TextButton from "../../UI/Button/TextButton";

const QrInputField = (props) => {

    const {fields, onGenerateQrCode} = props

    let qrInputValues = [];

    // const valueChangeHandler = (event) => {

    //     setInputValue(
    //         event.target.value
    //     )

    //     qrInputValues.push(event.target.value)

    // }

    const qrCodeSubmitHandler = (event) => {
        event.preventDefault()

        console.log(qrInputValues)

        onGenerateQrCode(qrInputValues)

    }

    const qrInputs = fields.map(
        (field) => {
            return (
                <Input 
                    key = {field.id}
                    label = {field.label} 
                    type = {field.type} 
                    required = {field.required} 
                />
            )
        }
    )


    return (
        <Fragment>
            <form name="qr-input-form" className="qr-input-form" onSubmit={qrCodeSubmitHandler}>
                {qrInputs}
                <TextButton className="qr-input-button" type="submit">Generate</TextButton>
            </form>
        </Fragment>
    )
}

export default QrInputField;