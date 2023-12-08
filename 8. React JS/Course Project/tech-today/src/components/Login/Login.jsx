import { Link } from 'react-router-dom'

import './Login.css'

import  useForm  from '../../hooks/useForm'
import { useContext } from 'react'
import AuthContext from '../../contexts/authContext'

export default function Login() {
    const { loginSubmitHandler,error} = useContext(AuthContext)
    const {values, onChange, onSubmit } = useForm(loginSubmitHandler,{ 
        email: '',
        password: '',
    })


    return (
        <>
            {error && (<p className='error-message'>{error.message}</p>)}
            <div className="page-login">
                <form className="login-form" onSubmit={onSubmit}>
                    <h1>Login</h1>
                    <label htmlFor="email">Email</label>
                    <input 
                        className="form-email"
                        type="email"
                        name='email'
                        id='email'
                        placeholder="example@web.com"
                        onChange={onChange}
                        values={values.email}
                    />
                    <label htmlFor="password">Password</label>
                    <input 
                        className="form-password"
                        type="password"
                        name='password'
                        id='password'
                        placeholder="no 12345 please"
                        onChange={onChange}
                        values={values['password']}
                    />
                    <input type="submit" value="Login" />
                    <p>If you don't have profile click <Link to="/register">here </Link></p>
                </form>
            </div>
        </>
    )
}