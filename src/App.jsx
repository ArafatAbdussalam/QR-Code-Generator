import { Fragment } from "react";

import Header from "./components/Header/Header";
import QrField from "./components/QrField/QrField";
import SectionContainer from "./components/SectionContainer/SectionContainer";
import Footer from "./components/Footer/Footer";

import "./App.css"

const App = () => {


    return (
        <Fragment>
            <Header />
            <SectionContainer />
            <QrField />
            <Footer />
        </Fragment>
    )
}

export default App;