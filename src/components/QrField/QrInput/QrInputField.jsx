import { useState, useEffect } from "react";

import axios from "axios";

import "./QrInputField.css"

import Input from "./Input/Input";
import TextButton from "../../UI/Button/TextButton";


const QrInputField = (props) => {

    const {qrInputFieldItem, onGenerateQrCode} = props
    
    const [qrInputValues, setQrInputValues] = useState({})


    const storeInputValueHandler = (qrInputValue) => {
        // store previous qrInput Value
        // create an object for all values
        setQrInputValues(
            () => {
                return {
                    qrInputValue
                }
                // let object1 = {}

                // for(let key in object1){
                //     qrInputValue = object1(key)
                // }

                // console.log(object1) 
            }
        )
    }

    const qrCodeSubmitHandler = async (event) => {
        event.preventDefault()

        console.log(qrInputValues)

        onGenerateQrCode(qrInputValues)

        // try {
        //     await axios.post(
        //         generate_url,
        //         JSON.stringify({qrInputValues}),
        //         {
        //             headers: {"Content-Type": "application/json"},
        //         }
        //     )

        //     onGenerateQrCode(qrInputValues)

        // } catch (error) {

        // }
    }

    // after it has returned the current field based on the index of the button text

    // the qrInputFieldItem here is based on the currentId which is equal to the buttonId


    const qrInputs = qrInputFieldItem.inputFieldValues.map(
        (field) => {
            return (
                <Input 
                    key = {field.id}
                    label = {field.label} 
                    type = {field.type} 
                    required = {field.required}
                    onStoreInputValue = {storeInputValueHandler}
                />
            )
        }

    )
 
    // const qrInputs = qrInputFieldItem.map(
    //     (item) => {
    //         return item.inputFieldValues.map(
    //             (field) => {
    //                 return (
    //                     <Input 
    //                         key = {field.id}
    //                         label = {field.label} 
    //                         type = {field.type} 
    //                         required = {field.required}
    //                         onStoreInputValue = {storeInputValueHandler}
    //                     />
    //                 )
    //             }
    //         )
    //     }
    // )


    return (
        <>
            <form className="qr-input-form" onSubmit={qrCodeSubmitHandler}>
                {qrInputs}
                <TextButton className="qr-input-button" type="submit">Generate</TextButton>
            </form>
        </>
    )
}

export default QrInputField;