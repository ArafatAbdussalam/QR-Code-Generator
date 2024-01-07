import React from "react";
import { Link } from "react-router-dom";

import "./AuthModal.css"

const SignupModal = () => {

    return (
        <div className="auth-modal">
            <h3>Signup Successful</h3>
            <p><Link to="/login">Log in</Link></p>
        </div>
    )
}

export default SignupModal;