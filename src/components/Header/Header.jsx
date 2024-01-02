import React, { Fragment } from "react";
import { Routes, Route, Outlet } from "react-router-dom";

import HeaderLayout from "./HeaderLayout";
import LoginForm from "../Authentication/LoginForm";
import SignupForm from "../Authentication/SignupForm";
import LogoutModal from "../Authentication/AuthModal/LogoutModal";

const Header = () => {

    return(
        <>
            <Routes>
                <Route element={<HeaderLayout />}>
                    <Route path="login" exact  Component={LoginForm}/>
                    <Route path="signup" exact Component={SignupForm}/>
                    <Route path="logout" exact Component={LogoutModal}/>
                </Route>

            </Routes>
        </>
    )
}

export default Header;