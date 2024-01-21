import React, { useState, useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import useAuth from "../hooks/useAuth";

import "./AuthForm.css"

import TextButton from "../UI/Button/TextButton/TextButton";



const login_url = ""


const LoginForm = () => {

    const { setAuth } = useAuth()

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    const emailRef = useRef()
    const errorRef = useRef()

    const [emailValue, setEmailValue] = useState("")
    const [passwordValue, setPasswordValue] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    
    const cancelPageHandler = () => {
        navigate(from, { replace: true })
    }


    const emailChangeHandler = (event) => {
        setEmailValue(event.target.value)
    }

    const passwordChangeHandler = (event) => {
        setPasswordValue(event.target.value)
    }

    useEffect(
        () => {
            emailRef.current.focus()
        }, []
    )

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
            const accessToken = response?.data?.accessToken
            const roles = response?.data?.roles
      
            setAuth({
                email: emailValue,
                password: passwordValue,
                token: accessToken,
                roles: roles
            })
            setEmailValue("")
            setPasswordValue("")
            navigate(from, { replace: true })

        } catch (error) {
            if (!error?.response) {
                setErrorMessage(" No Server Response")
            } 
            if (error.response?.status === 400) {
                setErrorMessage("Email or password not found")
            }
            if (error?.response === 401) {
                setErrorMessage("Unauthorized")
            }
            setErrorMessage("Login Failed")
            errorRef.current.focus()
        }
    }


    return createPortal(
        <>
            <form role="form" className="auth-form" onSubmit={loginSubmitHandler}>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input ref={emailRef} id="email" type="email" onChange={emailChangeHandler} value={emailValue} required/>
                </div>

                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" onChange={passwordChangeHandler} value={passwordValue} required/>
                </div>

                <TextButton className="auth-form-button" type="submit">Login</TextButton>

                <p className="redirect">You do not have an account? <Link to="/signup" role="link">Sign up</Link></p> 

                <p ref={errorRef} className={errorMessage ? "error-message" : "hide"} aria-live="assertive">{errorMessage}</p>

                <button className="cancel-button" onClick={cancelPageHandler}>Cancel</button>
            </form>   
            
        </>,
        document.getElementById("authPage")
    )
}

export default LoginForm;