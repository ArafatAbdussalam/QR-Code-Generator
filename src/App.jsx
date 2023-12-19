import { Fragment, useState } from "react";

import "./App.css"

import { AuthContextProvider } from "./components/store/auth-context";

import Header from "./components/Header/Header";
import SectionContainer from "./components/SectionContainer/SectionContainer";

import QrFieldData from "./components/QrField/QrData/QrFieldData";
import QrField from "./components/QrField/QrField";

import Footer from "./components/Footer/Footer";



const App = () => {

    const [qrImage, setQrImage] = useState(null)
    const [isQrCodeGenerated, setIsQrCodeGenerated] = useState(false)

    const generateQrCodeHandler = async (qrInputValues) => {

        try {
            const response = await fetch("", {
                method: "POST",
                body: JSON.stringify(qrInputValues),
                headers: {
                    "Content-Type": "form/multipart"
                }
            })

            const data = await response.json()

            const qrImage = data.image

            setQrImage(qrImage)

            setIsQrCodeGenerated(true)

        } catch (error) {

        }
    }

    const qrFieldItems = QrFieldData

    const qrField = qrFieldItems.map(
            (qrField, index) => {
                return(
                    <QrField key={index} qrFieldItems={qrField} onGenerateQrCode={generateQrCodeHandler} />
                )
            }
    )
    


    return (
        <Fragment>

            <AuthContextProvider>
                <Header />
                <SectionContainer />

                {qrField}
                
                {isQrCodeGenerated && <QrOutputField qrImage={qrImage}/>} 

                <Footer />
            </AuthContextProvider>
            
        </Fragment>
    )
}

export default App;