import React, { Fragment, useRef } from "react"

const Input = (props) => {

    const {label, type, ref, required} = props


    return (
        
        <Fragment>
            <label className="input-label">{label}</label>
            <input className="input-value" type={type} ref={ref} required={required}></input>
        </Fragment>
        
    )
}

export default Input;