import React from "react";
import useInput from "../../hooks/use-input";
import Button from "../../UI/Button/Button"

const QrInputField = (props) => {

    const {onGenerateQrCode} = props

    const [error, setError] = useState(null)
    // const [isGenerating, setIsGenerating] = useState(false)

    const isNotEmpty = (value) => value.trim() !== ""

    const {
        value: wifiValue,
        isValid: wifiValueIsValid,
        valueHasError: wifiValueHasError,
        valueChangeHandler: wifiValueChangeHandler,
        inputBlurHandler: wifiValueBlurHandler,
        reset: resetWifiValue
    } = useInput(isNotEmpty)

    
    const fieldValue = {
        forWifi: wifiValue
    }
    
    // const {wifi: forWifi} = fieldValue

    const generateQrCodeHandler = (event) => {
        event.preventDefault()

        setIsGenerating(true)
        setError(null)

        const generateQrCode = async (inputField) => {
            
            try {
                const response = awaitfetch(
                    "", {
                        method: "POST",
                        body: JSON.stringify({inputField}),
                        headers: {
                            "Content-Type": "application/json",
                        },
                    }
                )

                if (!response.ok) {
                    throw new Error("Request failed")
                }
                
                const data = await response.json()

                // where do we have data.name from
                const generatedId = data.name
                // inputfield here is same as the one passed as param
                const generatedCode = {id: generatedId, codeValue: inputField}

                onGenerateQrCode(generatedCode)
            } catch(error) {
                SpeechSynthesisErrorEvent(error.message || "unable to generate QR code")
            }

        }

        generateQrCode(fieldValue)

    }


    return (
        <form onSubmit={generateQrCodeHandler}>


            <div className="wifi">

            <input value={wifiValue} onChange={wifiValueChangeHandler} onBlur={wifiValueBlurHandler}/>
                {/* <input value={networkName} onChange={networkNameChangeHandler} onBlur={wifiValueBlurHandler}/>
                <input value={networkType} onChange={networkTypeChangeHandler} onBlur={wifiValueBlurHandler}/>
                <input value={WifiPassword} onChange={wifiPasswordChangeHandler} onBlur={wifiValueBlurHandler}/> */}
            </div>
            
            <Button type="submit">Generate</Button>

            {!error}
        </form>
    )
}

export default QrInputField;