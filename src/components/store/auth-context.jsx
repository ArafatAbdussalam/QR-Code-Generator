import React, {useState, useEffect } from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    login: (email, password) => {},
    logout: () => {},
    signup: (email, password) => {}
    }
)

const loginHandler = (email, password) => {

}



const AuthContextProvider = (props) => {

    const {children} = props

    const contextValue = {
        isLoggedIn: isLoggedIn,
        login: loginHandler,
        logout: logoutHandler, 
    }


    return (
        <AuthContext.Provider>
            {children}
        </AuthContext.Provider>
    )
}