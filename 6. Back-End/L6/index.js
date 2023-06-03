const express = require('express')
const hbs = require('express-handlebars')
const homeController = require('./controllers/homeController')
const defaultController = require('./controllers/defaultController')
const catalogController = require('./controllers/catalogController')
const createController = require('./controllers/createController')
const defaultTitle = require('./middlewares/defaultTitle')

const app = express()

// Handlebars setup
const handlebars = hbs.create({ extname: '.hbs'}); 
app.engine('.hbs', handlebars.engine) 
app.set('view engine', '.hbs') 

// Express Setup 
 app.use(express.urlencoded({ extended: true}))
 app.use('/static', express.static('static'))

// Default title for pages without a title, through middleware
app.use(defaultTitle('AirBnb Clone')) 


// Routing from controllers
app.use( '/', homeController) 
app.use('/catalog', catalogController)
app.use('/create', createController)
app.all( '*', defaultController) // 404 page - must be at the end


app.listen(3000)