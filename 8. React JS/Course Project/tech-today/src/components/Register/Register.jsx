import { Link } from 'react-router-dom'


export const Register = () => {
    return (
        <div className="page-register">
        <form className="login-form" method="POST" action="#">
            <h1>Register</h1>
            <label htmlFor="email">Email</label>
            <input 
                type="email"
                className="form-email"
                placeholder="example@web.com"

            />
            <label htmlFor="password">Password</label>
            <input 
                type="password"
                className="form-password"
                placeholder="no 12345 please"
            />
            <input type="submit" value="Login" />
            <p>If you already have profile click <Link to="/login">here </Link></p>
        </form>
    </div>
    )
}