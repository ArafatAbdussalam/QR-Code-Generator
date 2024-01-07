import React, { useEffect, useState } from "react"

import "./Input.css"

const Input = (props) => {

    const {label, type, onStoreInputValue, required} = props

    const [inputValue, setInputValue] = useState("")

    const valueChangeHandler = (event) => {
        setInputValue(event.target.value)
        // onStoreInputValue(event.target.value)
    }

    useEffect(
        () => {
            onStoreInputValue(inputValue)
        }, [inputValue]
    )

    return (
        <>
            <div className="qr-input">
                <label>{label}</label>
                <input type={type} required={required} onChange={valueChangeHandler} value={inputValue}></input>
            </div>
            
        </>
    )
}

export default Input;