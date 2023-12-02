import React, { Fragment, useRef } from "react"

const Input = (props) => {

    const {label, type, value, required} = props

    value = useRef()
    const inputValue = value.current.value()

    const requiredValue = required || false

    return (
        <Fragment>
            <label>{label}</label>
            <input type={type} value={inputValue} required={requiredValue}></input>
        </Fragment>
        
    )
}

export default Input;