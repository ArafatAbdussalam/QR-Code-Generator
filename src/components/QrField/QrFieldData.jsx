const QrFieldData = [
    {   id:1,
        text: "link",
        isAuthenticated: false,
        inputFieldValues: {
            required: ["Link"],
            optional: ["Logo"]
        },
    },
    {   id:2,
        text: "email",
        isAuthenticated: false,
        inputFieldValues: {
            required: ["Email", "Subject", "Message"],
            optional: ["Logo"]
        },
    },
    {   id:3,
        text: "text",
        isAuthenticated: false,
        inputFieldValues: {
            required: ["Text"],
            optional: ["Logo"]
        },
    },
    {   id:4,
        text: "phone",
        isAuthenticated: false,
        inputFieldValues: {
            required: ["Phone"],
            optional: ["Logo"]
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
            optional: ["logo"]
        }
    },
    {   id:7,
        text: "app",
        isAuthenticated: true,
        inputFieldValues: {
            required: ["Play store or App Store"],
            optional: [],
        },
        logo: "",
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

export default QrFieldData;