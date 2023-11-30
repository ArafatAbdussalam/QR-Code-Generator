const qrData = [
    {   id:1,
        text: "link",
        isAuthenticated: false,
        inputFieldValues: {
            required: ["Link"],
            optional: ["Logo"],
        },
    },
    {   id:2,
        text: "email",
        isAuthenticated: false,
        inputFieldValues: {
            required: ["Email", "Subject", "Message"],
            optional: ["Logo"],
        },
    },
]

const qrInputFieldValue = qrData.map(
    (qrItem) => {
        for (const keys of Object.keys(qrItem)) {
            console.log(keys)
           
        }
    }
)

// const qrInputFieldValue = qrData.map(
//     (qrItem) => {

//         for (const keys of Object.keys(qrItem)) {
//             console.log(keys)
//             if (qrItem[keys] === inputFieldValues) {
//                 const fieldValues = qrItem[keys]

//                 for (keys in fieldValues) {
//                     if (fieldValues[keys] === required) {
//                         const fieldValue = fieldValues[keys]
//                         console.log(fieldValue)

//                         fieldValue.map(
//                             (item) => {
//                                 return (
//                                     console.log(item)
//                                     // <input value={fieldValue} onChange={} onBlur={} required/>
//                                 )
//                             }
                            
//                         )
//                     }

//                     if (fieldValues[keys] === optional) {
//                         const fieldValue = fieldValues[keys]

//                         console.log(fieldValue)
//                         fieldValue.map(
//                             (item) => {
//                                 return (
//                                     console.log(item)
//                                     // <input value={fieldValue} onChange={} onBlur={} optional/>
//                                 )
//                             }
                            
//                         )
//                     }
//                 }
//             }
//         }
//         qrItem["inputFieldValues"]
//     }
// )

// console.log(qrInputFieldValue)