import React, { Fragment, useRef } from "react"

const Input = (props) => {

    const {label, type, value, required} = props


    return (
        
        <Fragment>
            <label className="input-label">{label}</label>
            <input className="input-value" type={type} value={value} required={required}></input>
        </Fragment>
        
    )
}

export default Input;