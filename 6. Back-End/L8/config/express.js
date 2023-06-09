const express = require('express')
const hbs = require('express-handlebars')
const defaultTitle = require('../middlewares/defaultTitle')

module.exports = (app) => { 

const handlebars = hbs.create({ extname: '.hbs'}); 
app.engine('.hbs', handlebars.engine) 
app.set('view engine', '.hbs') 


 app.use(express.urlencoded({ extended: true}))
 app.use('/static', express.static('static'))


app.use(defaultTitle('AirBnb Clone')) 


}


