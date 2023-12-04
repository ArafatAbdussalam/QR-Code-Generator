import { Fragment, useState } from "react";

import "./App.css"

import Header from "./components/Header/Header";
import SectionContainer from "./components/SectionContainer/SectionContainer";

import QrButtonField from "./components/QrField/QrButton/QrButtonField";
import QrInputField from "./components/QrField/QrInput/QrInputField";
import QrOutputField from "./components/QrField/QrOutput/QrOutputField";

import Footer from "./components/Footer/Footer";


const App = () => {

    const [qrCode, setQrCode] = useState(null)
    const [isShowQrInputField, setIsShowQrInputfield] = useState(false)
    const [isQrCodeGenerated, setIsQrCodeGenerated] = useState(false)

    const showQrInputFieldHandler = () => {
        setIsShowQrInputfield(true)
    }

    const generateQrCodeHandler = (qrCode) => {
        setIsQrCodeGenerated(true)

        setQrCode(qrCode)
    }

    return (
        <Fragment>
            <Header />
            <SectionContainer />

            <QrButtonField onShowQrInputField={showQrInputFieldHandler}/>
            {isShowQrInputField && <QrInputField onGenerateQrCode={generateQrCodeHandler} />}
            {isQrCodeGenerated && <QrOutputField qrCode={qrCode}/>}

            <Footer />
        </Fragment>
    )
}

export default App;