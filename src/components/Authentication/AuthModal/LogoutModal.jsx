import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import "./AuthModal.css"

import AuthContext from "../../store/auth-context";

import TextButton from "../../UI/Button/TextButton";


const LogoutModal = () => {

    const authContext = useContext(AuthContext)

    const navigate = useNavigate()
    
    const previousPageHandler = () => {
        navigate(-1)
    }



    return(
        <div className="auth-modal">
            <h3>Do you want to logout?</h3>

            <div className="logout-modal-buttons">
                <TextButton className="logout-modal-button" onClick={previousPageHandler} >No</TextButton>
                <TextButton className="logout-modal-button" onClick={authContext.logout}>Yes</TextButton>
            </div>
        </div>

    )
}

export default LogoutModal;