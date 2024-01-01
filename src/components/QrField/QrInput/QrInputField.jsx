import { Fragment, useState } from "react";

import axios from "axios";

import "./QrInputField.css"

import Input from "./Input/Input";
import TextButton from "../../UI/Button/TextButton";


const QrInputField = (props) => {

    const {fields, onStoreInputValue, onGenerateQrCode} = props
    const [qrInputValues, setQrInputValues] = useState([])


    const storeInputValueHandler = (qrInputValue) => {
        setQrInputValues(
            () => {
                return [
                    qrInputValue
                ]
            }
        )
    }

    const qrCodeSubmitHandler = async (event) => {
        event.preventDefault()


        onGenerateQrCode(qrInputValues)

        // try {
        //     await axios.post(
        //         generate_url,
        //         JSON.stringify({qrInputValues}),
        //         {
        //             headers: {"Content-Type": "application/json"},
        //             withCredentials: true
        //         }
        //     )

        //     onGenerateQrCode(qrInputValues)

        // } catch (error) {

        // }
    }



    const qrInputs = fields.map(
        (field) => {
            return (
                <Input 
                    key = {field.id}
                    label = {field.label} 
                    type = {field.type} 
                    required = {field.required}
                    onStoreInputValue = {onStoreInputValue}
                />
            )
        }
    )


    return (
        <Fragment>
            <form className="qr-input-form" onSubmit={qrCodeSubmitHandler}>
                {qrInputs}
                <TextButton className="qr-input-button" type="submit">Generate</TextButton>
            </form>
        </Fragment>
    )
}

export default QrInputField;