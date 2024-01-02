import React, { Fragment, useContext, useState, useEffect, useRef } from "react";

import "./AuthForm.css"

import axios from "./api/auth-axios-api";
import AuthContext from "../store/auth-context";

import TextButton from "../UI/Button/TextButton";
import SignupModal from "./AuthModal/SignupModal";



// const username_regex = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const email_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@]).{3,28}$/;
const password_regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{7,23}$/;

const signup_url = "/signup"

const SignupForm = () => {

    const authContext = useContext(AuthContext)
6
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

    useEffect(
        () => {
            const result = email_regex.test(emailValue)
            console.log(result)
            console.log(emailValue)
            setEmailIsValid(result)
        }, []
    )

    useEffect(
        () => {
            const result = password_regex.test(passwordValue)
            console.log(result)
            console.log(email)
            setPasswordIsValid(result)
        }, []
    )

    useEffect(
        () => {
            setErrorMessage("")
        }, [emailValue, passwordValue, matchPasswordValue]
    )

    useEffect(
        () => {
            const result = password_regex.test(passwordValue)
            console.log(result)
            console.log(passwordValue)
            setPasswordIsValid(result)
            const match = passwordValue === matchPasswordValue
            setMatchPasswordIsValid(match)
        }, [passwordValue, matchPasswordValue]
    )



    const signupSubmitHandler = async (event) => {
        event.preventDefault()

        const validEmail = email_regex.test(email)
        const validPassword = password_regex.test(password)

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
            console.log(response.data)
            console.log(response.accessToken)
            console.log(JSON.stringify(response))
            setSignupSuccess(true)

        } catch (error) {
            if (!error?.response) {
                setErrorMessage(" No Server Response")
            } 
            if (error.response?.status === 409) {
                setErrorMessage("username taken")
            }
            setErrorMessage("Registration failed")
            errorRef.current.focus()
        }



        setEmailValue("")
        setPasswordValue("")
    }

    return( 
        <Fragment>
            { signupSuccess && <SignupModal />}

            <section>
                <form className="auth-form" onSubmit={signupSubmitHandler}>
                    <div className="form-control">
                        <label htmlFor="email">Email
                            <span className={emailIsValid ? "valid" : "hide"}>Valid</span>
                            <span className={emailIsValid || !emailValue ? "hide" : "invalid"}>Invalid</span>
                        </label>
                        <input 
                            ref={emailRef}
                            id="email" 
                            type="email" 
                            onChange={emailChangeHandler} 
                            value={emailValue} 
                            required
                            aria-describedby="emailNote"
                            aria-invalid = {emailIsValid ? "false" : "true"}
                            onFocus={()=>setEmailFocus(true)}
                            onBlur={()=>setEmailFocus(false)}
                        />
                        <p id="emailNote" 
                            className={emailFocus && !emailIsValid? "instructions" : "offscreen"}
                            >
                            3 to 23 characters. Must include <span aria-label="at sign">@</span>
                        </p>
                    </div>

                    <div className="form-control">
                        <label htmlFor="password">Password</label>
                        <input 
                            id="password" 
                            type="password" 
                            onChange={passwordChangeHandler} 
                            value={passwordValue} 
                            required
                            aria-invalid={passwordIsValid ?"false":"true"}
                            aria-describedby="passwordNote"
                            onFocus={()=>setPasswordFocus(true)}
                            onBlur={()=>setPasswordFocus(false)}
                        />
                        <p id="passwordNote" className={passwordFocus && !passwordIsValid? "instructions" : "offscreen"}>
                            <span>info</span>
                            8 to 24 characters.<br />
                            Must include uppercase and lowercase letters, a number and a special character.<br/>
                            Allowed special characters: <span aria-label="exclamation mark">!</span>
                            <span aria-label="at symbol">@</span><span aria-label="hashtag">#</span><span aria-label="dollar sign">$</span><span aria-label="percent">%</span>
                        </p>
                    </div> 
                    <div className="form-control">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input 
                            id="confirm-password" 
                            type="password" 
                            onChange={matchPasswordChangeHandler} 
                            value={matchPasswordValue} 
                            required
                            aria-invalid={matchPasswordIsValid ?"false":"true"}
                            aria-describedby="confirm-password-note"
                            onFocus={()=>setMatchPasswordFocus(true)}
                            onBlur={()=>setMatchPasswordFocus(false)}
                        />
                        <p id="confirm-password-note" 
                            className={matchPasswordFocus && !matchPasswordIsValid ? "instructions" : "offscreen"}>
                            <span>info</span>
                            Must match previous password entered.
                        </p>
                    </div>

                    <TextButton 
                        disabled={!emailIsValid || !passwordIsValid || !matchPasswordIsValid ? "true" : "false"}
                        className="auth-form-button" type="submit" onClick={authContext.signup}>Signup</TextButton>

                        <p className="redirect">Already created an account? <br/><a href="#">Signin</a></p>
                        <p aria-live="assertive">{errorMessage}</p>
                </form>

                
            </section>

        </Fragment>
    )
}

export default SignupForm;