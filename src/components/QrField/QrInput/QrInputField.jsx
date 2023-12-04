import React, { useRef } from "react";
import Input from "./Input";
import Button from "../../UI/Button/Button"
import QrFieldData from "../QrData/QrFieldData";

const QrInputField = (props) => {

    const {onGenerateQrCode} = props

    const inputValueRef = useRef()

    const qrInputField = QrFieldData

    let inputFieldValues = []

    qrInputField.map(
        (item) => {

            // const itemText = item.text

            // render based on the text of the button 
            // if (item.id === 1) 
            
            //if (item) {

                const inputField = item.inputFieldValues

                inputField.map(
                    (item) => {

                        const inputKey = item.id
                        
                        const inputLabel = item.label
                        const inputType = item.type
                        const requiredMode = item.required ? "true" : true ? "false": false

                        // const inputValue = inputValueRef.current.value() 
                        // inputFieldValues.push(inputValue)

                        return (
                            <Input 
                                key = {inputKey}
                                label = {inputLabel} 
                                type = {inputType} 
                                required = {requiredMode} 
                                // value = {inputValueRef}
                            />
                        )
                    }
                )
            }
       // }
    )


    const generateQrCodeHandler = (event) => {
        event.preventDefault()

        const generateQrCode = async (inputField) => {
            
            try {
                const response = await fetch(
                    "", {
                        method: "POST",
                        body: JSON.stringify({
                            text: itemText,
                            inputField: inputField,
                        }),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                )

                if (!response.ok) {
                    throw new Error("Request failed")
                }
                
                const data = await response.json()

            } catch(error) {
                setError(error.message || "unable to generate QR code")
            }

        } 

        // convert array to obj

        // const inputFieldValuesObject = Object.fromEntries(inputFieldValues)
        // generateQrCode(inputFieldValuesObject)

        // onGenerateQrCode(allQrCodeData)

    }

    return (
        <form className="input-form" onSubmit={generateQrCodeHandler}>
            <input />
            {qrInputField} 
            <Button className="input-button" type="submit">Generate</Button>
        </form>
    )
}

export default QrInputField;