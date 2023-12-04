import React, { useContext, useRef, useState} from "react"
import "./Signup.css"

import AuthContext from "../../store/auth-context"
import Button from "../UI/Button/Button"


const Signup = (props) => {

    const {onSignup} = props;

    const context = useContext(AuthContext)

    const [formIsValid, setFormIsValid] = useState(false)

    const emailInputRef = useRef()
    const passwordInputRef = useRef()

    const userEmailValue = emailInputRef.current.value
    const userPasswordValue = passwordInputRef.current.value

    const signupValue = {
        email: userEmailValue,
        password: userPasswordValue,
    }

    if (userNameIsValid && userEmailIsValid && userPasswordIsValid) {
        setFormIsValid(true)
    }

    const signupSubmitHandler = async (event) => {
        event.preventDefault()

        if (!formIsValid) {
            return
        }
        
        try {
            await fetch("", {
                method: "POST",
                body: JSON.stringify(signupValue),
                header: {
                    "Content-Type": "application/json"
                }
            })
            
        } catch(error) {

        }
    }


    return (
        <form className="signup-form" onSubmit={signupSubmitHandler}>

            <div className="signup-form-control">
                <label htmlFor="userName">Name</label>
                <input id="userName" type="text" value={userNameValue} onChange={userNameChangeHandler} onBlur={userNameBlurHandler}/>

                {!userNameHasError}
            </div>

            <div className="signup-form-control">
                <label htmlFor="email">Email</label>
                <input id="email" type="email" value={userEmailValue} onChange={userEmailChangeHandler} onBlur={userEmailBlurHandler} />
                
                {!userEmailHasError}
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" value={userPasswordValue} onChange={userPasswordChangeHandler} onBlur={userPasswordBlurHandler} />
            
                
                {!userPasswordHasError}
            </div>

        <Button className="signup-form-button" disabled={!formIsValid} label="Sign up" type="submit"/>

        </form>
    )
};

export default Signup;