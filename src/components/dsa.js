const QrFieldData = [
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
    {   id:3,
        text: "text",
        isAuthenticated: false,
        inputFieldValues: {
            required: ["Text"],
            optional: ["Logo"],
        },
    },
    {   id:4,
        text: "phone",
        isAuthenticated: false,
        inputFieldValues: {
            required: ["Phone"],
            optional: ["Logo"],
        }
    },
    {   id:5,
        text: "whatsapp",
        isAuthenticated: false,
        inputFieldValues: {
            required: ["Whatsapp"],
            optional: ["Logo"],
        },
    },
    {   id:6,
        text: "wifi",
        isAuthenticated: false,
        inputFieldValues: {
            required: ["Network Name", "Network Type", "Encryption", "Password"],
            optional: ["logo"],
        }
    },
    {   id:7,
        text: "app",
        isAuthenticated: true,
        inputFieldValues: {
            required: ["Play store or App Store"],
            optional: [],
        },
    },
    {   id:8,
        isAuthenticated: true,
        text: "socials",
        inputFieldValues: {
            required: ["Socials"],
            optional: [],
        },
    },
];

const sample = QrFieldData.map(
    (item) => {

        const inputValues = item.inputFieldValues

        // const mode = Object.hasKeys(item.inputFieldValues)

        for (const keys of Object.keys(inputValues)) {
            if (valueOf(keys) === required) {
                console.log("required")
            }

            if (keys === optional) {
                console.log("optional")
            }
        }

        console.log("--------------")

        for (const values of Object.values(inputValues)) {
            values.map(
                (label) => {
                    if (label.length === 0) return 

                    if (label.length >= 1) {
                        const inputLabel = label + " new label"
                        console.log(inputLabel)

                         // for each inputLabel, if the key is required, do this..if the key is optional, set the mode to this
                    }  
                   
                }
            )
        }

        console.log("----------")     
    }
)

