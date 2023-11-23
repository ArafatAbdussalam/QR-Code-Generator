import { Fragment } from "react";

import QRField from "./components/QR-field/QRField";
import QRFieldItem from "./components/QR-field/QRFieldItem";
import Header from "./components/Header/Header";
import Login from "./components/Authentication/Login/Login";

import "./App.css"

const App = () => {


    return (
        <Fragment>
            <Header />
            <Login />
            <QRField />
            <QRFieldItem />
        </Fragment>
    )
}

export default App;