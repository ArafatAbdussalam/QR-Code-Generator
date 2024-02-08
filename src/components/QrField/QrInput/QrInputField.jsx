import { useState, useRef } from "react";

import "./QrInputField.css"

import Input from "../Input/Input";
import TextButton from "../../UI/Button/TextButton/TextButton";


const QrInputField = (props) => {

    const {qrInputFieldItem, onGenerateQrCode} = props
    const [formValues, setFormValues] = useState([])

    const [buttonType, setButtonType] = useState("submit")
    const [buttonText, setButtonText] = useState("Generate")

    const inputValueRef = useRef()


    const saveInputFieldHandler = async (inputValue) => {

        setFormValues(
            () => {
                const values = formValues;
                values.push(inputValue);

                // const map = new Map ()
                // map.set("item", inputValue)

                // // transform values array to object
                // const mapValues = Object.assign({}, values)


                return ( 
                    // mapValues
                    values
                )
            }
        )
    }

    const valuesObject = formValues

    // const inputValueRefHandler = (fieldId) => {

    //     // set the ref of the first input item to be on focus
    //     // when the qr button is clicked
    // return inputValueRef.current.focus()
    // }


    const qrCodeSubmitHandler = async (event) => {
        event.preventDefault()

        inputValueRef.current.focus()
        console.log(formValues)
        onGenerateQrCode(formValues)
 
        // setButtonType("button")
        // setButtonText("Generated")
    }

    const qrInputs = qrInputFieldItem.inputFieldValues.map(
        (field) => {
            return (
                <Input 
                    ref = {inputValueRef}
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