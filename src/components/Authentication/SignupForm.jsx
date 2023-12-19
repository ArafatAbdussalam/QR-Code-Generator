import React, { useState } from "react";

import AuthContext from "../store/auth-context";

import Button from "../UI/Button/Button";


const SignupForm = () => {

    const [emailValue, setEmailValue] = useState("")
    const [passwordValue, setPasswordValue] = useState("")


    const emailChangeHandler = (event) => {
        setEmailValue(event.target.value)
    }

    const passwordChangeHandler = (event) => {
        setPasswordValue(event.target.value)
    }

    const signupSubmitHandler = async (event) => {
        event.preventDefault()

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


        setEmailValue("")
        setPasswordValue("")
    }

    return(
        <form onSubmit={signupSubmitHandler}>
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" onChange={emailChangeHandler} value={emailValue} required/>
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" onChange={passwordChangeHandler} value={passwordValue} required/>
            </div>

            <Button type="submit">Signup</Button>
        </form>
    )
}

export default SignupForm;