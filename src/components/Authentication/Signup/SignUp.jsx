import React, { useState} from "react"
import axios from "axios"
import Button from "../UI/Button/Button"

import useInput from "../../hooks/use-input"


const isNotEmpty = (value) => value.trim() !== ""
const isEmail = (value) => value.includes("@")

const Signup = (props) => {

    const {onSignup} = props;

    const {
        value: userNameValue,
        isValid: userNameIsValid,
        valueHasError: userNameHasError,
        valueChangeHandler: userNameChangeHandler,
        inputBlurHandler: userNameBlurHandler,
        reset: resetUserName
    } = useInput(isNotEmpty)

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

    const signupValue = {
        name: userNameValue,
        email: userEmailValue,
        password: userPasswordValue,
    }

    let formIsValid = false;

    if (userNameIsValid && userEmailIsValid && userPasswordIsValid) {
        formIsValid = true;
    }

    const signupSubmitHandler = (event) => {
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



        onSignup(signupValue)

        resetUserName()
        resetUserEmail()
        resetUserPassword()

    }


    return (
        <form onSubmit={signupSubmitHandler}>

            <div>
                <label htmlFor="userName">Name</label>
                <input id="userName" type="text" value={userNameValue} onChange={userNameChangeHandler} onBlur={userNameBlurHandler}/>

                {!userNameHasError}
            </div>

            <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" value={userEmailValue} onChange={userEmailChangeHandler} onBlur={userEmailBlurHandler} />
                
                {!userEmailHasError}
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" value={userPasswordValue} onChange={userPasswordChangeHandler} onBlur={userPasswordBlurHandler} />
            
                
                {!userPasswordHasError}
            </div>

        <Button disabled={!formIsValid} label="Sign up" type="submit"/>

        </form>
    )
};

export default Signup;