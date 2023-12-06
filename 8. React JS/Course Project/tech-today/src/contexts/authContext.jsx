import { useState, createContext } from "react";
import { useNavigate } from 'react-router-dom'

import * as authService from '../services/authService.js'
import usePersistedState from "../hooks/usePersistedState.js";
import Path from "../paths.js";

const AuthContext = createContext()
AuthContext.displayName = 'AuthContext'

export const AuthProvider = ({
    children,
    value
}) => {
    const [auth, setAuth] = usePersistedState('auth', {})
    const navigate = useNavigate()

   

    const loginSubmitHandler = async (values) => {
        const result = await authService.login(values.email, values.password)

        setAuth(result)
        localStorage.setItem('accessToken', result.accessToken)
        navigate(Path.Home)
    }

    const registerSubmitHandler = async (values) => {
        const result = await authService.register(values.email, values.password)

        setAuth(result)
        localStorage.setItem('accessToken', result.accessToken)
        navigate(Path.Home)
    }

    const logoutHandler = async () => {
        setAuth({})
        localStorage.removeItem('accessToken')
    }

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username:  auth.email ,
        email: auth.email,
        userId: auth._id,
        isAuthenticated: !!auth.accessToken
    }
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext