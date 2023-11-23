import React, {Fragment, useState} from "react";

const sample = () => {

    const [isGenerating, setIsGenerating] = useState(false)
    const [isGenerated, setIsGenerated] = useState(false)

    const generateCodeHandler = (data) => {
        // do something to the data based the available keys
        // if the data has a particular key, do this to the key
        if (data.hasKeys["key"]) {
            data.map
        }

    }

    const generateCodeContent = () => {
        // shows the content of the generated content
    }

    const submitCodeHandler = async () => {
        setIsGenerating(true)

        await fetch("api", {
            data: data
        })

        setIsGenerated(true)
    }

    return (
        <Fragment>
            {isGenerated && generateCodeContent}
        </Fragment>
    )

}

export default sample;

// take in the data from the input field
// submit using generateCode Handler
// generate code handler takes in the data as parameter and displays it in the qr image