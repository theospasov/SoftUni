const authController = require('express').Router()
const { register, login } = require('../services/userService')
const { parseError } = require('../util/parser')
const validator = require('validator')


// Registration 
authController.get('/register', (req, res) => {
    res.render('register', {
        title: 'Register'
    })
})

authController.post('/register', async (req, res) => { 
    // Validating the Register Form Fields
    try {
        if (req.body.username == '' || req.body.password == '' || req.body.email == '' || req.body.repass == '') {
            throw new Error('All fields are required')
        }
        if (req.body.username.length < 2) {
            throw new Error('Username must be at least 2 characters long')
        }
        if (req.body.email.length < 10) {
            throw new Error('Email must be at least 10 characters long')
        }
        if ( req.body.password.length < 4) {
            throw new Error('Password must be at least 4 characters long')
        }
        if (req.body.password != req.body.repass) {
            throw new Error('Passwords don\'t match')
        }

        // If the Form Fields are valid we register the user
        const token = await register(req.body.email, req.body.username, req.body.password)

        // We set the token of the session
        res.cookie('token', token)

        res.redirect('/') 
        
    } catch (error) {
        // adding an error parser
         const errors = parseError(error)

        // TODO add error display to actual template from assignment
        // This is where we give info to the template
        res.render('register', {
            title: 'Register',
            errors,
            body: {
                email: req.body.email,
                username: req.body.username
            }
        })
        
    }

})

// Login
authController.get('/login', (req, res) => {
    // TODO add error display to actual template from assignment
    res.render('login', {
        title: 'Login Page'
    })

})

authController.post('/login', async (req, res) => {
    try {
        // Create an assign session cookie 
        const token = await login(req.body.username, req.body.password) // will return the token that we have to set in the cookie
        res.cookie('token', token)

        res.redirect('/') // TODO replace with redirect by assignment 

    } catch (error) {
        const errors = parseError(error)

        // TODO add error display to actual template from assignment
        res.render('login', {
            title: 'Login Page - Error',
            errors,
            body: {
                email: req.body.email
            }
        })
    }


})

// Logout
authController.get('/logout', (req, res) => {
    res.clearCookie('token')
    res.redirect('/')
    
})

module.exports = authController
