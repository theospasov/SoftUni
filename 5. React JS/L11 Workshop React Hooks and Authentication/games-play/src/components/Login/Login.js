import { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

export const Login = () => {

    const { onLoginSubmit } = useContext(AuthContext)
    const {formValues, changeFormHandler, onSubmit} = useForm({
        email: '',
        password: ''
    }, onLoginSubmit)
 
    return (
        <section id="login-page" className="auth">
            <form id="login" onSubmit={onSubmit} method='POST'>

                <div className="container">
                    <div className="brand-logo"></div>
                    <h1>Login</h1>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="Sokka@gmail.com"
                        value={formValues.email}
                        onChange={changeFormHandler}
                    />

                    <label htmlFor="login-pass">Password:</label>
                    <input 
                        type="password" 
                        id="login-password" 
                        name="password" 
                        value={formValues.password}
                        onChange={changeFormHandler}
                    />
                    <input type="submit" className="btn submit" value="Login" />
                    <p className="field">
                        <span>If you don't have profile click <Link to='/register'>here</Link></span>
                    </p>
                </div>
            </form>
        </section>
    );
}