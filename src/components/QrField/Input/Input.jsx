import React, { useRef, forwardRef, useImperativeHandle, useState } from "react"

import "./Input.css"



const Input = forwardRef((props, ref) => {

    const {label, type, onSaveInputValues, required} = props

    const [inputValue, setInputValue] = useState("")

    const inputRef = useRef()

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

    const activate = () => {
        inputRef.current.focus()
    }

    useImperativeHandle(ref, () => {
        return {
            focus: activate,
        }
    })

    return (
        <>
            <div className="qr-input">
                <label htmlFor={label}>{label}</label>
                <input ref={inputRef} id={label} type={type} required={required} onChange={valueChangeHandler} onBlur={inputValueBlurHandler} value={inputValue} {...props}></input>
            </div>
            
        </>
    )
})

export default Input;