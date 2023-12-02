import React, { useState, useRef, useContext } from "react"
import "./Login.css"

import AuthContext from "../../store/auth-context";
import Button from "../UI/Button/Button"


const Login = (props) => {

    const {onLogin} = props;

    const context = useContext(AuthContext)

    const [formIsValid, setFormIsValid] = useState(false)

    const emailInputRef = useRef()
    const passwordInputRef = useRef()

    const userEmailValue = emailInputRef.current.value()
    const userPasswordValue = passwordInputRef.current.value()


    if (userEmailIsValid && userPasswordIsValid) {
        setFormIsValid(true)
    }

    const loginValue = {
        email: userEmailValue,
        password: userPasswordValue,
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
                <input id="email" type="email" value={emailInputRef} />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" value={passwordInputRef} />
            </div>

            <Button disabled={!formIsValid} label="Log in" type="submit" />

        </form>
    )
};

export default Login;