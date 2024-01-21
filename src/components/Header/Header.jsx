import { Routes, Route } from "react-router-dom";

import NavBar from "./NavBar/NavBar";
import About from "./About/About";

import Layout from "../UI/Layout/Layout";
import LoginForm from "../Authentication/LoginForm";
import SignupForm from "../Authentication/SignupForm";
import LogoutModal from "../Authentication/AuthModal/LogoutModal";



const Header = () => {

    return(
        <>
          <NavBar />
          <Routes>
                <Route element={<Layout />}>
                    <Route path="login" exact  Component={LoginForm}/>
                    <Route path="signup" exact  Component={SignupForm}/>
                    <Route path="logout" exact Component={LogoutModal}/>
            </Route>
            </Routes>
          <About />  
        </>
    )
}

export default Header;