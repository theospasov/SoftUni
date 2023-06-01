const express = require('express')
const hbr = require('express-handlebars')
const homeController = require('./controllers/homeController')
const catalogController = require('./controllers/catalogController')
const createController = require('./controllers/createController')
const deleteController = require('./controllers/deleteController')


const app = express(); 

const handlebars = hbr.create({ extname: '.hbs'}); 
app.engine('.hbs', handlebars.engine) 
app.set('view engine', '.hbs')

app.use(express.urlencoded({extended: false}))
app.use('/static' ,express.static('static')) // we added this part when we wanted to integrate the css

app.use(homeController)
app.use('/catalog', catalogController)
app.use('/create', createController)
app.use('/delete', deleteController)

app.listen(3000)
