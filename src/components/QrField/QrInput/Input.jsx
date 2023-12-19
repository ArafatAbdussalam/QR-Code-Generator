import React, { Fragment, useRef } from "react"

const Input = (props) => {

    const {label, type, required, onChange, value} = props


    return (
        
        <Fragment>
            <label className="input-label">{label}</label>
            <input className="input-value" type={type} required={required} onChange={onChange} value={value}></input>
        </Fragment>
        
    )
}

export default Input;