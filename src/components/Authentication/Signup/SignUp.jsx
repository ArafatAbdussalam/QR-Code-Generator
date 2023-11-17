import "Button.css"

const SignUp = () => {

    const signUpSubmitHandler = (event) => {
        event.preventDefault()
    }

    return (
        <form onSubmit={signUpSubmitHandler}>
            <div>
                <label htmlFor="email">Email</label>
                <input id="email" type="email" value={emailValue} />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input id="password" type="password" value={passwordValue} />
            </div>

        <Button label="sign up" type="submit"/>

        </form>
    )
};

export default SignUp;