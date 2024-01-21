import React, { useEffect, useState } from "react"

import "./Input.css"



const Input = (props) => {

    const {label, type, onSaveInputValues, required} = props

    const [inputValue, setInputValue] = useState("")


    const valueChangeHandler = (event) => {

        if(type === "file") {
            setInputValue(event.file)
        }

        if(type !== "file") {
            setInputValue(event.target.value)
        }
    }



    const inputValueBlurHandler = () => {
        const inValidInputValue = inputValue.length < 1
        if(inValidInputValue) {
            return;
        }

        const validInputValue = inputValue.length >= 1
        if(validInputValue) {
            onSaveInputValues(inputValue)
        }
    }


    return (
        <>
            <div className="qr-input">
                <label htmlFor={label}>{label}</label>
                <input id={label} type={type} required={required} onChange={valueChangeHandler} onBlur={inputValueBlurHandler} value={inputValue} {...props}></input>
            </div>
            
        </>
    )
}

export default Input;