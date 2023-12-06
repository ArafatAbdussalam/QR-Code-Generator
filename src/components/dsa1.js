const QrFieldData = [
    {   id: "1",
        text: "link",
        isAuthenticated: false,
        inputFieldValues: [
                { id: "a1", label: "Link", type: "link", required: "true" },
                { id: "b1", label: "Logo", type: "link", required: "false" },
            ],
    },
    {   id: "2",
        text: "email",
        isAuthenticated: false,
        inputFieldValues: [
                { id: "a2", label: "Email", type: "link", required: "true" }, 
                { id: "b2", label: "Subject", type: "link", required: "true" },
                { id: "c2", label: "Message", type: "link", required: "true" },
                { id: "d2", label: "Logo", type: "link", required: "false" },
            ],
    },
    {   id: "3",
        text: "text",
        isAuthenticated: false,
        inputFieldValues: [
                { id: "a3", label: "Text", type: "link", required: "true"}, 
                { id: "b3", label: "Logo", type: "link", required: "false" },
            ],
    },
    {   id: "4",
        text: "phone",
        isAuthenticated: false,
        inputFieldValues: [
                { id: "a4", label: "Phone", type: "link", required: "true" }, 
                { id: "b4", label: "Logo", type: "link", required: "false" },
            ],
    },
    {   id: "5",
        text: "whatsapp",
        isAuthenticated: false,
        inputFieldValues:[
                { id: "a5", label: "whatsApp", type: "link", required: "true" }, 
                { id: "b5", label: "Logo", type: "link", required: "false" },
            ],
    },
    {   id: "6",
        text: "wifi",
        isAuthenticated: false,
        inputFieldValues: [
                { id: "a6", label: "Network Name", type: "link", required: "true" }, 
                { id: "b6", label: "Network Type", type: "link", required: "true" },
                { id: "c6", label: "Encryption", type: "link", required: "true" },
                { id: "d6", label: "Password", type: "link", required: "true" }, 
                { id: "e6", label: "Logo", type: "link", required: "false" },
            ],
    },
    {   id: "7",
        text: "app",
        isAuthenticated: true,
        inputFieldValues: [
                { id: "a7", label: "Play store or App Store", type: "link", required: "true" }, 
            ]
    },
    {   id: "8",
        isAuthenticated: true,
        text: "socials",
        inputFieldValues: [
                {id: "a8", label: "Socials", type: "text", required: "true" }, 
            ],
    },
];       


// const qrInputData = QrFieldData

// qrInputData.map(
//      (qrField) => {
//          const fieldItems = qrField.inputFieldValues

//          fieldItems.map(
//              (item) => {
//                  console.log(item)
//              }
//          )
//      }
// )


// const qr = QrFieldData
// let allLabels = []

// qr.map(
//     (item) => {

//         if (item.id === 1) {

//         const inputField = item.inputFieldValues

//         inputField.map(
//             (item) => {
                
//                 const inputKey = item.id 

//                 const inputLabel = item.label
//                 const inputType = item.type
//                 const requiredMode = item.required ? "true" : true ? "false": 

//                 console.log("----input label-----")
//                 console.log(inputLabel)

//                 console.log("----input type-----")
//                 console.log(inputType)

//                 console.log("----required mode-----")

//                 console.log(requiredMode)

//                 console.log("-----the end------")

//                 console.log(inputKey)

//                 allLabels.push(inputLabel)

//             }    
//         )
//     }
//     }
// )

// console.log("---out of field")
// console.log(allLabels)