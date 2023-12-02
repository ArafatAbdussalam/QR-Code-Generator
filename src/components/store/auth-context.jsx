import React, {useState } from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    login: (email, password) => {},
    logout: () => {},
    signup: (email, password) => {}
    }
)

const loginHandler = async (email, password) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    try {
        const response = await fetch("", {

        })

        const loginValue = response.json()

        setIsLoggedIn(true)
    } catch (error) {

    }

}

const logoutHandler = async () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    setIsLoggedIn(false)
}

const signupHandler = async (email, password) => {
    try {
        const response = await fetch("", {

        })

        const signupValue = response.json()
    } catch (error) {

    }
}



export const AuthContextProvider = (props) => {

    const {children} = props

    const contextValue = {
        isLoggedIn: isLoggedIn,
        login: loginHandler,
        logout: logoutHandler, 
        signup: signupHandler,
    }


    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext