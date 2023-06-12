

const express = require('express')
const hbs = require('express-handlebars')
const defaultTitle = require('../middlewares/defaultTitle')
const cookieParser = require('cookie-parser')

const auth = require('../middlewares/auth')
const jwtSecret = 'secretCode'

module.exports = (app) => { 
const handlebars = hbs.create({ extname: '.hbs'}); 
app.engine('.hbs', handlebars.engine) 
app.set('view engine', '.hbs') 

// Express Setup 
 app.use(express.urlencoded({ extended: true}))
 app.use('/static', express.static('static'))


app.use(defaultTitle('AirBnb Clone'))

app.use(cookieParser())
app.use(auth(jwtSecret))

}


