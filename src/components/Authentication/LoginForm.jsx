import React, { useContext, useState } from "react";

import "./AuthForm.css"

import AuthContext from "../store/auth-context";

import TextButton from "../UI/Button/TextButton";



const LoginForm = () => {

    const authContext = useContext(AuthContext)

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

    // const loginErrorHandler = () => {
    //     // is user account details are not not valid

    //     setLoginError(true)
    // }

    return(
        <form className="auth-form" onSubmit={loginSubmitHandler}>
            <div className="form-control">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" onChange={emailChangeHandler} value={emailValue} required/>
            </div>

            <div className="form-control">
                <label htmlFor="password">Password</label>
                <input id="password" type="password" onChange={passwordChangeHandler} value={passwordValue} required/>
            </div>

            <TextButton className="auth-form-button" type="submit" onClick={authContext.login}>Login</TextButton>

            <p className="auth-error-text">Account details not valid. <a>Create new account</a></p>

            {/* { loginError &&      
                 <p className="auth-error-text">Account details not valid. <a>Create new account</a></p>       
            } */}

        </form>
    )
}

export default LoginForm;