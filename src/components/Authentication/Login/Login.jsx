import React, { useState } from "react"
import "./Login.css"


import Button from "../UI/Button/Button"
import useInput from "../../hooks/use-input"


const isNotEmpty = (value) => value.trim() !== ""
const isEmail = (value) => value.includes("@")

const Login = (props) => {

    const {onLogin} = props;

    const [error, setError] = useState("")

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

    let formIsValid = false;

    if (userNameIsValid && userEmailIsValid && userPasswordIsValid) {
        formIsValid = true;
    }

    const loginSubmitHandler = async (event) => {
        event.preventDefault()

        if (!formIsValid) {
            return
        }

        try {

            const response = await fetch("", {
                method: "POST",
                body: JSON.stringify({loginValue}),
                headers: {
                    "Content-Type": "application/json",
                }
            })

            if (!response.ok) {
                throw new Error("Request failed!")
            }

            const data = await response.json()

            const id = ""

            const loginValue = {
                email: userEmailValue,
                password: userPasswordValue,
            }
        
            const {email: userEmail, password: userPassword} = loginValue
        

            onLogin(loginValue)
        } catch (error) {
            setError(error.message || "Something went wrong")
        }

        await resetUserEmail()
        await resetUserPassword()
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