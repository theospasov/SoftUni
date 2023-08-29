import { useContext } from "react";
import { Link } from "react-router-dom";

import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

export const Register = () => {

    const { onRegisterSubmit } = useContext(AuthContext)
    const {formValues, changeFormHandler, onSubmit} = useForm({
        email: '',
        password: '',
        confirmPassword: ''
    }, onRegisterSubmit)
    return (
        <section id="register-page" className="content auth">
            <form id="register" method="POST" onSubmit={onSubmit}>
                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Register</h1>

                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="maria@email.com"
                        value={formValues.email}
                        onChange={changeFormHandler}
                    />

                    <label htmlFor="pass">Password:</label>
                    <input 
                        type="password" 
                        name="confirmPassword" 
                        id="register-password"
                        value={formValues.password}
                        onChange={changeFormHandler}
                    />

                    <label htmlFor="con-pass">Confirm Password:</label>
                    <input 
                        type="password" 
                        name="confirm-password" 
                        id="confirm-password"
                        value={formValues.confirmPassword}
                        onChange={changeFormHandler}
                    />

                    <input className="btn submit" type="submit" value="Register" />

                    <p className="field">
                        <span>If you already have profile click <Link to='/login'>here</Link></span>
                    </p>
                </div>
            </form>
        </section>

    );
};