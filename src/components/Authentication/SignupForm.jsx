import React, { useContext, useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./AuthForm.css"

import axios from "./api/auth-axios-api";
import AuthContext from "../store/auth-context";

import TextButton from "../UI/Button/TextButton/TextButton";
import SignupModal from "./AuthModal/SignupModal";



// const username_regex = /^[a-zA-Z][a-zA-Z0-9-_]{4,23}$/;
// const email_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@]).{3,}$/;

const email_regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%_]).{7,25}$/;
 
const signup_url = "/signup"

const SignupForm = () => {

    const authContext = useContext(AuthContext)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";

    const emailRef = useRef()


    const [emailValue, setEmailValue] = useState("")
    const [emailIsValid, setEmailIsValid] = useState(false)
    const [emailFocus, setEmailFocus] = useState(false)

    const [passwordValue, setPasswordValue] = useState("")
    const [passwordIsValid, setPasswordIsValid] = useState(false)
    const [passwordFocus, setPasswordFocus] = useState(false)

    const [matchPasswordValue, setMatchPasswordValue] = useState("")
    const [matchPasswordIsValid, setMatchPasswordIsValid] = useState(false)
    const [matchPasswordFocus, setMatchPasswordFocus] = useState(false)

    const [errorMessage, setErrorMessage] = useState(false)
    const [signupSuccess, setSignupSuccess] = useState(false)

    useEffect(
        () => {
            emailRef.current.focus()
        }, []
    )

    const emailChangeHandler = (event) => {
        setEmailValue(event.target.value)
    }

    const passwordChangeHandler = (event) => {
        setPasswordValue(event.target.value)
    }

    const matchPasswordChangeHandler = (event) => {
        setMatchPasswordValue(event.target.value)
    }

    const cancelPageHandler = () => {
        navigate(from, { replace: true })
    }


    useEffect(
        () => {
            const result = email_regex.test(emailValue)
            setEmailIsValid(result)
        }, [emailValue]
    )

    useEffect(
        () => {
            const result = password_regex.test(passwordValue)
            setPasswordIsValid(result)
            setMatchPasswordIsValid(passwordValue === matchPasswordValue)
        }, [passwordValue, matchPasswordValue]
    )

    useEffect(
        () => {
            setErrorMessage("")
        }, [emailValue, passwordValue, matchPasswordValue]
    )



    const signupSubmitHandler = async (event) => {
        event.preventDefault()

        const validEmail = email_regex.test(emailValue)
        const validPassword = password_regex.test(passwordValue)

        if (!validEmail || !validPassword) {
            setErrorMessage("Signup details not valid. Enter valid details")
            return
        }

        try {
            const response = await axios.post(signup_url,
                JSON.stringify({
                    email: emailValue, 
                    password: passwordValue
                }),
                {
                    headers: {"Content-Type": "application/json"},
                    withCredentials: true
                }
            )

            setSignupSuccess(true)

        } catch (error) {
            if (!error?.response) {
                setErrorMessage(" No Server Response")
            } 
            if (error.response?.status === 409) {
                setErrorMessage("Email already exists")
            }
            setErrorMessage("Signup failed")
            errorRef.current.focus()
        }



        setEmailValue("")
        setPasswordValue("")
    }

    return createPortal( 
        <>
            { signupSuccess && <SignupModal />}

            { !signupSuccess && (
                <form role="form" className="auth-form" onSubmit={signupSubmitHandler}>
                    <div className="form-control">
                        <label htmlFor="email">Email
                            <FontAwesomeIcon icon={faCheck} className={emailIsValid ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={emailIsValid || !emailValue ? "hide" : "invalid"} />
                        </label>
                        <input 
                            ref={emailRef} id="email" type="email" onChange={emailChangeHandler} value={emailValue} autoComplete="on" aria-describedby="email-info" 
                            aria-invalid = {emailIsValid ? "false" : "true"} onFocus={()=>setEmailFocus(true)} onBlur={()=>setEmailFocus(false)} required
                        />
                        <p id="email-info" className={emailFocus && email && !emailIsValid? "instruction" : "hide"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must include <span aria-label="at sign">@</span>
                        </p>
                    </div>

                    <div className="form-control">
                        <label htmlFor="password">
                            Password
                            <FontAwesomeIcon icon={faCheck} className={passwordIsValid ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={passwordIsValid || !passwordValue ? "hide" : "invalid"} />
                        </label>
                        <input 
                            id="password" type="password" onChange={passwordChangeHandler} value={passwordValue} aria-invalid={passwordIsValid ?"false":"true"} 
                            aria-describedby="password-info" onFocus={()=>setPasswordFocus(true)} onBlur={()=>setPasswordFocus(false)} required
                        />
                        <p id="password-info" className={passwordFocus && !passwordIsValid? "instruction" : "hide"}>
                        <FontAwesomeIcon icon={faInfoCircle} />
                            7 to 25 characters. Must include uppercase and lowercase letters, a number and a special character. 
                            Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span>
                            <span aria-label="hashtag">#</span><span aria-label="dollar sign">$</span><span aria-label="percent">%</span>
                        </p>
                    </div> 
                    <div className="form-control">
                        <label htmlFor="confirm-password">
                            Confirm Password
                            <FontAwesomeIcon icon={faCheck} className={matchPasswordIsValid && matchPasswordValue ? "valid" : "hide"} />
                            <FontAwesomeIcon icon={faTimes} className={matchPasswordIsValid|| !matchPasswordValue  ? "hide" : "invalid"} />
                        </label>
                        <input 
                            id="confirm-password" type="password" onChange={matchPasswordChangeHandler} value={matchPasswordValue} aria-invalid={matchPasswordIsValid ? "false" : "true"} 
                            aria-describedby="confirm-password-info" onFocus={()=>setMatchPasswordFocus(true)} onBlur={()=>setMatchPasswordFocus(false)} required
                        />
                        <p id="confirm-password-info" className={matchPasswordFocus && !matchPasswordIsValid ? "instruction" : "hide"}>
                            <FontAwesomeIcon icon={faInfoCircle} />
                            Must match previous password entered.
                        </p>
                    </div>

                    <TextButton disabled={!emailIsValid || !passwordIsValid || !matchPasswordIsValid ? true : false}
                        className="auth-form-button" type="submit" onClick={authContext.signup}>
                            Sign up
                    </TextButton>

                        <p className="redirect">Already created an account? <Link to="/login">Log in</Link></p>
                        <p aria-live="assertive">{errorMessage}</p>

                        <button className="cancel-button" onClick={cancelPageHandler}>Cancel</button>
                </form>
            )}

        </>,
        document.getElementById("authPage")
    )
}

export default SignupForm;