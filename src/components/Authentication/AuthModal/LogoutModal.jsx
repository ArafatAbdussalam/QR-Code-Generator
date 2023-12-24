import React, { useContext } from "react";

import "./AuthModal.css"

import AuthContext from "../../store/auth-context";

import TextButton from "../../UI/Button/TextButton";


const LogoutModal = () => {

    const authContext = useContext(AuthContext)


    return(
        <div className="auth-modal">
            <h3>Do you want to logout?</h3>

            <div className="logout-modal-buttons">
                <TextButton className="logout-modal-button">No</TextButton>
                <TextButton className="logout-modal-button" onclick={authContext.logout}>Yes</TextButton>
            </div>
        </div>

    )
}

export default LogoutModal;