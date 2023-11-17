// import {useState, useEffect, useReducer, useContext} from "react"

import Button from "../../UI/Button/Button";

const Login = () => {

    const loginSubmitHandler = () => {
        console.log("submit")
    }

    const emailValue = "email"
    const passwordValue = "password"

    return (
        <form onSubmit={loginSubmitHandler}>
            <div>
                <label htmlFor="email">E-mail</label>
                <input id="email" type="email" value={emailValue} />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" value={passwordValue} />
            </div>

            <Button type="submit">Log in</Button>
        </form>
    )
}

export default Login;