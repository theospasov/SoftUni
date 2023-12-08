import { useState, createContext } from "react";
import { useNavigate } from 'react-router-dom'

import * as authService from '../services/authService.js'
import usePersistedState from "../hooks/usePersistedState.js";
import Path from "../paths.js";

const AuthContext = createContext()
AuthContext.displayName = 'AuthContext'

export const AuthProvider = ({children}) => {
    const [auth, setAuth] = usePersistedState('auth', {})
    const navigate = useNavigate()
    const [error, setError] = useState(null);


    const loginSubmitHandler = async (values) => {
        try {
            const result = await authService.login(values.email, values.password);
            setAuth(result);
            setError(null)
            localStorage.setItem('accessToken', result.accessToken);
            navigate(Path.Profile);
        } catch (error) {
            setError(error); 
        }
    }

    const registerSubmitHandler = async (values) => {
        try {
            const result = await authService.register(values.email, values.password, values.username);
            setAuth(result);
            setError(null)
            localStorage.setItem('accessToken', result.accessToken);
            navigate(Path.Profile);
        } catch (error) {
            setError(error); 
        }
    }

    const logoutHandler = async () => {
        try {
            setAuth({});
            setError(null)
            localStorage.removeItem('accessToken');
        } catch (error) {
            setError(error);
        }
    }

    const values = {
        loginSubmitHandler,
        registerSubmitHandler,
        logoutHandler,
        username:  auth.username ,
        email: auth.email,
        userId: auth._id,
        isAuthenticated: !!auth.accessToken,
        error,
    }
    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContext