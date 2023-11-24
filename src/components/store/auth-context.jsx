import React, {useState, useEffect } from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogout: () => {},
    onLogin: (email, password) => {},
    onSignup: () => {},
})

export const AuthContextProvider = (props) => {

    const {children} = props;

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [isSignedup, setIsSignedup] = useState(false)

    useEffect( () => {
        if (isLoggedIn) {
            setIsLoggedIn(true)
        }
    })

    const loginHandler = () => {
        setIsLoggedIn(true)
    }

    const signupHandler = () => {
        setIsSignedup(true)
    }

    const logOutHandler = () => {
        setIsLoggedIn(false)
    }

    return (
        <AuthContext.Provider
        value={{
            isLoggedIn: isLoggedIn,
            onLogout: logOutHandler,
            onLogin: loginHandler,
            onSignup: signupHandler,
        }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext;