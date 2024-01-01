import { createContext, useState } from "react";

export const SampleAuthContext = createContext({})

export const SampleAuthContextProvider = ({props}) => {
    const { children } = props
    const [auth, setAuth] = useState()

    return (
        <SampleAuthContext.Provider value= {{auth, setAuth}}>
            {children}
        </SampleAuthContext.Provider>
    )
}


export default SampleAuthContext;