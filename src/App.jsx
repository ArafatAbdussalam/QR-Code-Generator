import { Fragment } from "react";

import QRField from "./components/QR-field/QRField";
import Header from "./components/Header/Header";
import Login from "./components/Authentication/Login/Login";

import "./App.css"

const App = () => {


    return (
        <Fragment>
            <Header />
            <QRField />
            <Login />
        </Fragment>
    )
}

export default App;