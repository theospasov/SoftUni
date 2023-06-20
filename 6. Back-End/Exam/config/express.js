const express = require('express')
const handlebars = require('express-handlebars')
const cookieParser = require('cookie-parser')
const session = require('../middleware/session')
const trimBody = require('../middleware/trimBody')


module.exports = (app) => { 

    // Handlebars setup 
    const creatingHBS = handlebars.create({ extname: '.hbs'})
    app.engine('.hbs', creatingHBS.engine) // app.engine() initializes hbs
    app.set('view engine', '.hbs') // If the file we're calling through view engine doesn't have .hbs extension -  add it 

    // Express Setup 
    app.use(express.urlencoded({ extended: true}))// build-in Middleware for managing Forms that automatically parse the data
    app.use('/static', express.static('static'))// load Static files for the 'static' folder

    // Authentication
    app.use(cookieParser())
    app.use(session()) // the middleware that reads the cookie and if it exist it verifies it 
    app.use(trimBody())
}