import { Fragment, useState } from "react";

import "./App.css"

import Header from "./components/Header/Header";
import SectionContainer from "./components/SectionContainer/SectionContainer";

import QrButtonField from "./components/QrField/QrButton/QrButtonField";
import QrInputField from "./components/QrField/QrInput/QrInputField";
import QrOutputField from "./components/QrField/QrOutput/QrOutputField";

import Footer from "./components/Footer/Footer";


const App = () => {

    const [qrImage, setQrImage] = useState(null)
    const [isShowQrInputField, setIsShowQrInputfield] = useState(false)
    const [isQrCodeGenerated, setIsQrCodeGenerated] = useState(false)

    const showQrInputFieldHandler = () => {

        const inputFields = ""


        setIsShowQrInputfield(true)
    }

    const generateQrCodeHandler = async (qrInputValues) => {

        try {
            const response = await fetch("", {
                method: "POST",
                body: JSON.stringify(qrInputValues),
                headers: {
                    "Content-Type": "application/json"
                }
            })

            const data = await response.json()

            const qrImage = data.image

            setQrImage(qrImage)

            setIsQrCodeGenerated(true)

        } catch (error) {

        }
    }


    return (
        <Fragment>
            <Header />
            <SectionContainer />

            <QrButtonField onShowQrInputField={showQrInputFieldHandler}/>
            {isShowQrInputField && <QrInputField fields={inputFields} onGenerateQrCode={generateQrCodeHandler} />}
            {isQrCodeGenerated && <QrOutputField qrImage={qrImage}/>}

            <Footer />
        </Fragment>
    )
}

export default App;