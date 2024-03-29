const QrFieldData = [
    {   id: "1",
        text: "link",
        isAuthenticated: false,
        inputFieldValues: [
                { id: "a1", label: "Link", type: "link", required: "required" },
                { id: "b1", label: "Logo", type: "file"},
            ],
    },
    {   id: "2",
        text: "email",
        isAuthenticated: false,
        inputFieldValues: [
                { id: "a2", label: "Email", type: "email", required: "required" }, 
                { id: "b2", label: "Subject", type: "text", required: "required" },
                { id: "c2", label: "Message", type: "text", required: "required" },
                { id: "d2", label: "Logo", type: "file"},
            ],
    },
    {   id: "3",
        text: "text",
        isAuthenticated: false,
        inputFieldValues: [
                { id: "a3", label: "Text", type: "text", required: "required"}, 
                { id: "b3", label: "Logo", type: "file" },
            ],
    },
    {   id: "4",
        text: "phone",
        isAuthenticated: false,
        inputFieldValues: [
                { id: "a4", label: "Phone", type: "number", required: "required" }, 
                { id: "b4", label: "Logo", type: "file" },
            ],
    },
    {   id: "5",
        text: "whatsapp",
        isAuthenticated: false,
        inputFieldValues:[
                { id: "a5", label: "WhatsApp", type: "number", required: "required" }, 
                { id: "b5", label: "Logo", type: "file" },
            ],
    },
    {   id: "6",
        text: "wifi",
        isAuthenticated: false,
        inputFieldValues: [
                { id: "a6", label: "Network Name", type: "text", required: "required" }, 
                { id: "b6", label: "Network Type", type: "text", required: "required" },
                { id: "c6", label: "Password", type: "password", required: "required" }, 
                { id: "d6", label: "Logo", type: "file" },
            ],
    },
    {   id: "7",
        text: "app",
        isAuthenticated: true,
        inputFieldValues: [
                { id: "a7", label: "Play Store or App Store", type: "link", required: "required" }, 
            ]
    },
    {   id: "8",
        text: "socials",
        isAuthenticated: true,
        inputFieldValues: [
                {id: "a8", label: "Socials", type: "text", required: "required" }, 
            ],
    },
];

export default QrFieldData;