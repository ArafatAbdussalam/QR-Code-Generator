import React from "react";
import useInput from "../hooks/use-input";
import Button from "../UI/Button/Button"

const QrInputField = (props) => {

    const { onGenerateQrCode } = props

    const isNotEmpty = (value) => value.trim() !== ""

    const {
        value: WifiValue,
        isValid: wifiValueIsValid,
        valueHasError: wifiValueHasError,
        valueChangeHandler: wifiValueChangeHandler,
        inputBlurHandler: wifiValueBlurHandler,
        reset: resetWifiValue
    } = useInput(isNotEmpty)


    const generateQrCodeHandler = (event) => {
        event.preventDefault()

        // axios method

        // onGenerateCode(value)

        resetWifiValue()
    }


    return (
        <form onSubmit={generateQrCodeHandler}>


            <div className="wifi">

            <input value={WifiValue} onChange={wifiValueChangeHandler} onBlur={wifiValueBlurHandler}/>
                {/* <input value={networkName} onChange={networkNameChangeHandler} onBlur={wifiValueBlurHandler}/>
                <input value={networkType} onChange={networkTypeChangeHandler} onBlur={wifiValueBlurHandler}/>
                <input value={WifiPassword} onChange={wifiPasswordChangeHandler} onBlur={wifiValueBlurHandler}/> */}
            </div>
            

            <Button type="submit" onClick={onGenerateQrCode}>Generate</Button>
        </form>
    )
}

export default QrInputField;