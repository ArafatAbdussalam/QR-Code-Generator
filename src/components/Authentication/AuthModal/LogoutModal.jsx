import React, { useContext } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";

import "./AuthModal.css"

import AuthContext from "../../store/auth-context";

import TextButton from "../../UI/Button/TextButton/TextButton";


const LogoutModal = () => {

    const authContext = useContext(AuthContext)

    const clickHandler = () => {}

    const navigate = useNavigate()
    
    const previousPageHandler = () => {
        navigate(-1)
    }



    return createPortal(
        <div className="auth-modal" aria-live="polite">
            <h3 className="auth-modal--main--heading">Do you want to logout?</h3>

            <div className="auth-modal--buttons">
                <TextButton className="auth-modal--button" onClick={clickHandler} tabIndex="10">Yes</TextButton>
                <TextButton className="auth-modal--button" onClick={previousPageHandler} tabIndex = "11">No</TextButton>
            </div>
        </div>,
        document.getElementById("authPage")
    )
}

export default LogoutModal;