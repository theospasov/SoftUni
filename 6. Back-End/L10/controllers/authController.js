const jwt = require('jsonwebtoken')
const { login } = require('../services/authService')
const authController = require('express').Router()


authController.get('/login', (req, res) => { // Creating a Token
   res.render('login', {
    title: 'Login'
   })
})

authController.post('/login', async (req, res) => { // Creating a Token
    const result = await login(req.body.username, req.body.password)
    const token = req.signJwt(result)
    res.cookie('jwt', token, {maxAge: 14400000}) // the token will expire after 4 hours (in milliseconds)
    res.redirect('/')
})

authController.get('/register', (req, res) => { 
    res.render('register', {
     title: 'Register'
    })
})

authController.post('/register', async (req, res) => { 
    // const result = await login(req.body.username, req.body.password)
    // const token = req.signJwt(result)
    // res.cookie('jwt', token, {maxAge: 14400000}) 
    res.redirect('/')
})


module.exports = authController



