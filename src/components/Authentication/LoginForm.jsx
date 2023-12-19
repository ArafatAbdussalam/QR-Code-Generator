import React, { useContext, useState } from "react";
import TextButton from "../UI/Button/TextButton";

import "./AuthForm.css"

const LoginForm = () => {

    const [emailValue, setEmailValue] = useState("")
    const [passwordValue, setPasswordValue] = useState("")

    const emailChangeHandler = (event) => {
        setEmailValue(event.target.value)

    }

    const passwordChangeHandler = (event) => {
        setPasswordValue(event.target.value)
    }


    const loginSubmitHandler = async (event) => {
        event.preventDefault()

        try {
            const url = ""

            const response = await fetch(url, {
                method: "POST",
                body: JSON.stringify({
                    email: emailValue,
                    password: passwordValue,
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
    
            const result = await response.json()
        } catch(error) {

        }

        setEmailValue("")
        setPasswordValue("")
    }

    return(
        <form className="login-form" onSubmit={loginSubmitHandler}>
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" onChange={emailChangeHandler} value={emailValue} required/>
            </div>

            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" onChange={passwordChangeHandler} value={passwordValue} required/>
            </div>

            <TextButton className="auth-form-button" type="submit">Login</TextButton>
        </form>
    )
}

export default LoginForm;