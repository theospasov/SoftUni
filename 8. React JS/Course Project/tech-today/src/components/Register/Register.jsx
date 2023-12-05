import { useContext } from 'react'
import { Link } from 'react-router-dom'
import useForm from '../../hooks/useForm'

import AuthContext from '../../contexts/authContext'


export default function Register() {
    const {registerSubmitHandler} = useContext(AuthContext)
    const {values, onChange, onSubmit} = useForm(registerSubmitHandler, {
        email: '',
        password: '',
        repass: ''
    })


    return (
        <div className="page-register">
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

            />
            <label htmlFor="password">Password</label>
            <input 
                className="form-password"
                name='password'
                id='password'
                type="password"
                placeholder="no 12345 please"
                onChange={onChange}
                values={values['password']}
            />
            <label htmlFor="repass">Repeat Password</label>
            <input 
                className="form-repass"
                name='repass'
                id='repass'
                type="password"
                placeholder="no 12345 please"
                onChange={onChange}
                values={values['repass']}
            />
            <input type="submit" value="Login" />
            <p>If you already have profile click <Link to="/login">here </Link></p>
        </form>
    </div>
    )
}