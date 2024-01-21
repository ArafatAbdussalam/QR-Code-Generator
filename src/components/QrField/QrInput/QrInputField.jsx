import { useState, useRef, useEffect } from "react";

import "./QrInputField.css"

import Input from "../Input/Input";
import TextButton from "../../UI/Button/TextButton/TextButton";


const QrInputField = (props) => {

    const {qrInputFieldItem, onGenerateQrCode} = props
    const [formValues, setFormValues] = useState([])

    const [buttonType, setButtonType] = useState("submit")
    const [buttonText, setButtonText] = useState("Generate")


    const saveInputFieldHandler = async (inputValue) => {

        setFormValues(
            () => {
                const values = [...formValues];
                values.push(inputValue);


                return (
                    values
                );
            }
        )
    }



    const qrCodeSubmitHandler = async (event) => {
        event.preventDefault()

        console.log(formValues)
        onGenerateQrCode(formValues)

        // setButtonType("button")
        // setButtonText("Generated")
    }

    const qrInputs = qrInputFieldItem.inputFieldValues.map(
        (field) => {
            return (
                <Input 
                    key = {field.id}
                    label = {field.label} 
                    type = {field.type} 
                    required = {field.required}
                    onSaveInputValues = {saveInputFieldHandler}
                />
            )
        }
    )



    return (
        <>
            <form encType="multipart/form-data" className="qr-input-form" onSubmit={qrCodeSubmitHandler}>
                {qrInputs}
                <TextButton  className="qr-input-button" type={buttonType}>{buttonText}</TextButton>
            </form>
        </>
    )
}

export default QrInputField;