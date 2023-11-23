import { useEffect, useState } from "react";

import QRFieldItem from "./QRFieldItem";

const GeneratedCode = () => {

    const [httpError, setHttpError] = useState()
    

    useEffect( () => {
        const fetchCode = async () => {
            const response = await fetch("")

            if (!response.ok) {
                throw new Error("Inavlid code input")
            }

            const responseData = await response.json()

            const codeGenerated = []

            for (const key in responseData) {
                codeGenerated.push({
                    id: key,
                    field: responseData[key].fieldData,
                })
            }
        }

        fetchCode().catch((error) => {
            setHttpError(error.message)
        })
    })

}

export default GeneratedCode;