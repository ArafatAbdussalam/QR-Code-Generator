import React, { useState } from "react";

const AuthContext = React.createContext({
    token: "",
    signup: () => {},
    login: () => {},
    isLoggedIn: false,
    logout: (token) => {},
})


export const AuthContextProvider = (props) => {

    const {children} = props

    const [token, setToken] = useState(null)
    const [userIsLoggedIn, setUserIsLoggedIn] = useState(false)


    const loginHandler = async () => {
        const token = localStorage.getItem("token")

        try {
            if (token) {
                
                const url = ""

                const response = await fetch(url, {
                    body: JSON.stringify({token}),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })

                const result = response.json()
            }
        } catch(error) {

        }
    }

    const signupHandler = async () => {
        try {

            if(true) {
                const url = ""

                const response = await fetch(url, {
                    body: JSON.stringify({token}),
                    headers: {
                        "Content-Type": "application/json"
                    }
                })

                const result = response.json()
            }

        } catch(error) {

        }
    }

    const logoutHandler = () => {
        localStorage.removeItem("token")
        setUserIsLoggedIn(false)


    }

    const authContextValues = {
        token: token,
        signup: signupHandler,
        login: loginHandler,
        isLoggedIn: userIsLoggedIn,
        logout: logoutHandler,
    }


    return(
        <AuthContext.Provider value={authContextValues}>
            {children}
        </AuthContext.Provider>
    )

}

export default AuthContext;