import React, { Fragment, useContext, useState, useRef, useEffect } from "react";

import axios from "axios";

import "./AuthForm.css"


import TextButton from "../UI/Button/TextButton";
import LoginModal from "./AuthModal/LoginModal";

const login_url = ""

const LoginForm = () => {

    // const { setAuth } = useAuth()
    // const navigate = useNavigate()
    // const location = useLocation()
    // const from = location.state?.from?.pathname || "/";

    // const authContext = useContext(AuthContext)
    // const authContext = useAuth()

    const emailRef = useRef()
    const errorRef = useRef()

    const [emailValue, setEmailValue] = useState("")
    const [passwordValue, setPasswordValue] = useState("")

    const [loginSuccess, setLoginSuccess] = useState(false)

    const errorMessage = ""

    const emailChangeHandler = (event) => {
        setEmailValue(event.target.value)
    }

    const passwordChangeHandler = (event) => {
        setPasswordValue(event.target.value)
    }

    // useEffect(
    //     () => {
    //         emailRef.current.focus()
    //     }, []
    // )

    useEffect(
        () => {
            setErrorMessage("")
        }, [emailValue, passwordValue]
    )

    const loginSubmitHandler = async (event) => {
        event.preventDefault()

        try {
            const response = await axios.post(login_url,
                JSON.stringify({
                    email: emailValue,
                    password: passwordValue
                }),
                {
                    headers: {"Content-Type": "application/json"},
                    withCredentials: true
                }
            )
            console.log(JSON.stringify(response?.data))
            const accessToken = response?.data.accessToken
            const roles = response?.data.roles
            authContext.isLoggedIn(email, password, roles, accessToken)

      
            setEmailValue("")
            setPasswordValue("")
            setLoginSuccess(true)
            navigate(from, { replace: true })

        } catch (error) {
            if (!error?.response) {
                setErrorMessage(" No Server Response")
            } 
            if (error.response?.status === 400) {
                setErrorMessage("Email or password not found")
            }
            if (err?.response === 401) {
                setErrorMessage("unauthorized")
            }
            setErrorMessage("Login failed")
            errorRef.current.focus()
        }
    }

    // const loginErrorHandler = () => {
    //     // is user account details are not not valid

    //     setLoginError(true)
    // }

    return(
        <Fragment>
           {
            loginSuccess && <LoginModal />
           }
                <section>
                    <form className="auth-form" onSubmit={loginSubmitHandler}>
                        <div className="form-control">
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" onChange={emailChangeHandler} value={emailValue} required/>
                        </div>

                        <div className="form-control">
                            <label htmlFor="password">Password</label>
                            <input id="password" type="password" onChange={passwordChangeHandler} value={passwordValue} required/>
                        </div>

                        <TextButton className="auth-form-button" type="submit">Login</TextButton>

                        <p ref={errorRef} className={errorMessage ? "errorMessage" : "offscreen"} aria-live="assertive">{errorMessage}</p>
                    </form>

                    <p className="auth-error-text">You do not have an account? <a>Create new account</a></p> 
                </section>
            
        </Fragment>
    )
}

export default LoginForm;