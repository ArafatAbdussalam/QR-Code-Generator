import { createContext, useState } from "react";

const AuthContext = createContext({})

export const AuthContextProvider = ({props}) => {

    const { children } = props

    const [auth, setAuth] = useState()

    const authValues = {
        auth,
        setAuth
    }

    return (
        <AuthContext.Provider value= {authValues}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContext;