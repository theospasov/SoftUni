import { Link} from 'react-router-dom'

export default function Login() {
    return (
        <>
            <div className="page-login">
                <form className="login-form" method="POST" action="#">
                    <h1>User login</h1>
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
                    <p>If you don't have profile click <Link to="/register">here </Link></p>
                </form>
            </div>
        </>
    )
}