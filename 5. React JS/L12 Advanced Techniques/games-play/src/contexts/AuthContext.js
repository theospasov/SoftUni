import { createContext, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';

import { authServiceFactory } from '../services/authService';
import { useLocalStorage } from '../hooks/useLocalStorage';


// context
export const AuthContext = createContext()

// component - this component is created so we may transfer the authentication from App to here and make it slimmer 
export function AuthProvider({children}) {
    const [auth, setAuth] = useLocalStorage('auth', {}) 
    const navigate = useNavigate();

    const authService = authServiceFactory(auth.accessToken)

        // Authentication
        const onLoginSubmit = async (data) => {
            try {
                const result = await authService.login(data)

                // we add the authentication data to the state 
                setAuth(result)
                //console.log(result);

                navigate('/catalog')
            } catch (error) {
                console.log(`There is a problem ` + error);
            }
        }

        const onRegisterSubmit = async (data) => {
            // we separate confirmPassword from register data, because we don't want to send it to the server
            const {confirmPassword, ...registerData} = data

            // we verify if the passwords match
            if (confirmPassword !== registerData.password) {
                return
            }

            try {
                const result = await authService.register(registerData)

                // we add the authentication data to the state 
                setAuth(result)

                navigate('/catalog')
            } catch (error) {
                console.log(`There is a problem ` + error);
            }
        }

        const onLogout = async () => {
            //TODO: authorized request
            //await authService.logout()
            setAuth({})
        }

        const contextValues = {
            onLoginSubmit,
            onRegisterSubmit,
            onLogout,
            userId: auth._id,
            token: auth.accessToken,
            userEmail: auth.email,
            isAuthenticated: !!auth.accessToken
        }




    return (
        <>
            <AuthContext.Provider value={contextValues}>
                {children} {/* AuthProvider will be used in App.js. The children are everything between AuthProvider - Header, main, Footer etc. All of the children will have access to the context  */}
            </AuthContext.Provider>
        </>
    )
}

// each time we want to use this context we must import it and import useContext. With useAuthContext we only need to import it
export function useAuthContext() {
    const context = useContext(AuthContext)
    return context
}