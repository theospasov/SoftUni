import { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import useForm from '../../hooks/useForm'

import './Register.css'

import AuthContext from '../../contexts/authContext'


export default function Register() {
    const {registerSubmitHandler, error} = useContext(AuthContext)
    const [ errors, setErrors] = useState({
        email: '',
        username: '',
        password: '',
        repass: ''
    })
    const {values, onChange, onSubmit} = useForm(registerSubmitHandler, {
        email: '',
        password: '',
        repass: '',
        username: ''
    })
    

    const emailValidator = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

   
        if (!emailRegex.test(values.email)) {
            setErrors(prevState => ({
                ...prevState,
                email: 'Enter a valid email'
        }))
        } else {
            if (errors.email) {
                setErrors(prevState => ({
                    ...prevState,
                    email: ''
                }))
            }

        }
    }

    const usernameValidator = () => {
        if (values.username.length <= 3) {
            setErrors(prevState => ({
                ...prevState,
                username: 'Username should be at least 4 characters'
        }))
        } else {
            if (errors.username) {
                setErrors(prevState => ({
                    ...prevState,
                    username: ''
                }))
            }

        }
    }

    const passwordValidator = () => {
        if (values.password.length <= 3) {
            setErrors(prevState => ({
                ...prevState,
                password: 'Password should be at least 4 characters'
        }))
        } else {
            if (errors.password) {
                setErrors(prevState => ({
                    ...prevState,
                    password: ''
                }))
            }

        }
    }
    const repassValidator = () => {
        if (values.repass != values.password) {
            setErrors(prevState => ({
                ...prevState,
                repass: 'Passwords don\'t match'
        }))
        } else {
            if (errors.repass) {
                setErrors(prevState => ({
                    ...prevState,
                    repass: ''
                }))
            }

        }
    }

    return (
        <div className="page-register">
            {error && (<p className='error-message'>{error.message}</p>)}
        <form className="login-form" onSubmit={onSubmit}>
            <h1>Register</h1>
            <label htmlFor="email">Email</label>
            <input 
                className="form-email"
                type="email"
                name='email'
                id='email'
                placeholder="example@web.com"
                onChange={onChange}
                values={values.email}
                onBlur={emailValidator}

            />
            { errors.email && (
                <p className='error'>{errors.email}</p>
            )
            }
            <label htmlFor="username">Username</label>
            <input 
                className="form-username"
                type="text"
                name='username'
                id='username'
                placeholder="user1"
                onChange={onChange}
                values={values.username}
                onBlur={usernameValidator}

            />
            { errors.username && (
                <p className='error'>{errors.username}</p>
            )
            }
            <label htmlFor="password">Password</label>
            <input 
                className="form-password"
                name='password'
                id='password'
                type="password"
                placeholder="no 12345 please"
                onChange={onChange}
                values={values['password']}
                onBlur={passwordValidator}
            />
            { errors.password && (
                <p className='error'>{errors.password}</p>
            )
            }
            <label htmlFor="repass">Repeat Password</label>
            <input 
                className="form-repass"
                name='repass'
                id='repass'
                type="password"
                placeholder="no 12345 please"
                onChange={onChange}
                values={values['repass']}
                onBlur={repassValidator}
            />
            { errors.repass && (
                <p className='error'>{errors.repass}</p>
            )
            }
            <input type="submit" disabled={Object.values(errors).some(x =>x)} value="Register" />
            <p>If you already have profile click <Link to="/login">here </Link></p>
        </form>
    </div>
    )
}