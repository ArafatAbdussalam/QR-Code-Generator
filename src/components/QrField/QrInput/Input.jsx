import React, { Fragment, useState } from "react"

import "./Input.css"

const Input = (props) => {

    const {label, type, required} = props

    const [inputValue, setInputValue] = useState("")

    const valueChangeHandler = (event) => {
        setInputValue(event.target.value)
    }


    return (
        
        <Fragment>
            <div className="qr-input">
                <label>{label}</label>
                <input type={type} required={required} onChange={valueChangeHandler} value={inputValue}></input>
            </div>
            
        </Fragment>
        
    )
}

export default Input;