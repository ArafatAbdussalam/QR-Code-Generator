import { Routes, Route} from "react-router-dom";

import "./App.css"

import AuthLayout from "./components/Authentication/AuthLayout/AuthLayout";
// import Header from "./components/Header/Header";
import QrFields from "./components/QrField/QrField/QrFields";
import Footer from "./components/Footer/Footer";

import NavBar from "./components/Header/NavBar/NavBar";
import About from "./components/Header/About/About";
import LoginForm from "./components/Authentication/LoginForm";
import SignupForm from "./components/Authentication/SignupForm";
import LogoutModal from "./components/Authentication/AuthModal/LogoutModal";


const App = () => {

    return (
        <>
            <NavBar />
            <Routes>
                <Route element={<AuthLayout />}>
                    <Route path="login" exact  Component={LoginForm}/>
                    <Route path="signup" exact Component={SignupForm}/>
                    <Route path="logout" exact Component={LogoutModal}/>
                </Route>
            </Routes>
            <About />
            <QrFields />
            <Footer />
        </>
    )
}

export default App;