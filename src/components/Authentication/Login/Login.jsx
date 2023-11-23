import React, { useState} from "react"
import axios from "axios"
import Button from "../UI/Button/Button"

import useInput from "../../hooks/use-input"


const isNotEmpty = (value) => value.trim() !== ""
const isEmail = (value) => value.includes("@")

const Login = (props) => {

    const {onLogin} = props;

    const {
        value: userEmailValue,
        isValid: userEmailIsValid,
        valueHasError: userEmailHasError,
        valueChangeHandler: userEmailChangeHandler,
        inputBlurHandler: userEmailBlurHandler,
        reset: resetUserEmail
    } = useInput(isEmail)

    const {
        value: userPasswordValue,
        isValid: userPasswordIsValid,
        valueHasError: userPasswordHasError,
        valueChangeHandler: userPasswordChangeHandler,
        inputBlurHandler: userPasswordBlurHandler,
        reset: resetUserPassword
    } = useInput(isNotEmpty)

    const loginValue = {
        email: userEmailValue,
        password: userPasswordValue,
    }

    let formIsValid = false;

    if (userNameIsValid && userEmailIsValid && userPasswordIsValid) {
        formIsValid = true;
    }

    const loginSubmitHandler = (event) => {
        event.preventDefault()

        if (!formIsValid) {
            return
        }


        // axios method

        axios.post("/login", {
            method: "POST",
            body: JSON.stringify(value),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response) => {})
        .catch((error)  => {})

        // fetch method

        // const response = fetch("/login", {
        //     method: "POST",
        //     body: JSON.stringify(value),
        //     headers: {
        //         "Content-Type": "application/json"
        //     }
        // })
        // response.json()
        

        onLogin(loginValue)

        resetUserEmail()
        resetUserPassword()

    }


    return (
        <form onSubmit={loginSubmitHandler}>

            <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" value={userEmailValue} onChange={userEmailChangeHandler} onBlur={userEmailBlurHandler} />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" value={userPasswordValue} onChange={userPasswordChangeHandler} onBlur={userPasswordBlurHandler} />
            </div>

        <Button disabled={!formIsValid} label="Log in" type="submit"/>

        </form>
    )
};

export default Login;