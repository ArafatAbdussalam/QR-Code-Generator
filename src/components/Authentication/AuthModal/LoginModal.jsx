import React from "react";
import { createPortal } from "react-dom";

import "./AuthModal.css"

const LoginModal = () => {

    return createPortal(
        <div className="auth-modal" aria-live="polite">
            <h3>Login Successful</h3>
        </div>,
        document.getElementById("authPage")
    )
}

export default LoginModal;