import React from "react";
import Input from "./Input";
import Button from "../../UI/Button/Button"
import QrFieldData from "../QrData/QrFieldData";

const QrInputField = (props) => {

    const {onDisplayQrCode} = props
    
    const qrInputData = QrFieldData

    const qrInputField = qrInputData.map(
        (item) => {

            const inputLabel = item.inputFieldValues.required.map((label)=> { return label })
            console.log(inputLabel)

            return (
                <Input key={item.id} 
                       label={inputLabel}
                       type={item.type}
                       value={item.value}
                       required={item.required}
                />
            )
        }
    )

    // how do i get the value and id after it has been passed into input component
    const inputId = qrInputField.id
    const inputValues = qrInputField.value

    const inputFieldValue = {
        id: inputId,
        inputValues: [[].push(inputValues)]
    }

    const generateQrCodeHandler = (event) => {
        event.preventDefault()

        setIsGenerating(true)
        setError(null)

        const generateQrCode = async (inputField) => {

            // the only data i need to send here is the value of each input and its id
            // store all the values of each input as an object
            
            try {
                const response = await fetch(
                    "", {
                        method: "POST",
                        body: JSON.stringify({inputField}),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                )

                if (!response.ok) {
                    throw new Error("Request failed")
                }
                
                const data = await response.json()

                const inputId = data.id
                const inputValue = data.value
            } catch(error) {
                setError(error.message || "unable to generate QR code")
            }

        } 

        generateQrCode(inputFieldValue)

        onDisplayQrCode()

    }

    return (
        <form onSubmit={generateQrCodeHandler}>
            {qrInputField}
            <Button type="submit">Generate</Button>
        </form>
    )
}

export default QrInputField;