const jwt = require('jsonwebtoken')
const validator = require('validator')
const { body, validationResult} = require('express-validator')
const { login, register } = require('../services/authService')
const authController = require('express').Router()


authController.get('/login', (req, res) => {
   res.render('login', {
    title: 'Login'
   })
})

authController.post('/login', async (req, res) => { 
    const result = await login(req.body.username, req.body.password)
    attachToken(req, res, result)
    res.redirect('/')
})

authController.get('/register', (req, res) => { 
    res.render('register', {
     title: 'Register'
    })
})

authController.post('/register', 
    body('username')
        .notEmpty().withMessage('Username is required')
        .isAlphanumeric().withMessage('Username must contain only letters and numbers'),
    body('password')
        .notEmpty().withMessage('Password is required')
        .isLength({ min: 6}).withMessage('Password must be at least 6 characters long'),
    body('repass')
        .custom(async (value, { req }) => {
            if (value.trim() == req.body.password.trim()) {
                throw new Error('Passwords don\'t match')
            }
        }),
    async (req, res) => { 
    try {
        const { errors } = validationResult(req) 
        if (errors.length > 0) { 
            throw new Error('Something happened')
        }

    } catch (error) {
        
    }
    const result = await register(req.body.username, req.body.password)
    attachToken(req, res, result)
    res.redirect('/')
})

function attachToken( req, res, data) {
    const token = req.signJwt(data)
    res.cookie('jwt', token, {maxAge: 14400000})
}


module.exports = authController

