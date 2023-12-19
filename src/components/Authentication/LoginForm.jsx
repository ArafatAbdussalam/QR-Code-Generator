import React from "react";
import Button from "../UI/Button/Button";


const LoginForm = () => {

    const [emailValue, setEmailValue] = useState("")
    const [passwordValue, setPasswordValue] = useState("")

    const loginSubmitHandler = async (event) => {
        event.preventDefault()

        try {
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
        } catch(error) {

        }

        setEmailValue("")
        setPasswordValue("")
    }

    return(
        <form onSubmit={loginSubmitHandler}>
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" onChange={emailChangeHandler} value={emailValue} required/>
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" onChange={passwordChangeHandler} value={passwordValue} required/>
            </div>

            <Button type="submit">Login</Button>
        </form>
    )
}

export default LoginForm