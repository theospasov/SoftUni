const express = require('express')
const hbr = require('express-handlebars')

const app = express(); 

const handlebars = hbr.create({ extname: '.hbs'}); 
app.engine('.hbs', handlebars.engine) 
app.set('view engine', '.hbs')

app.get('/', (req, res) => {

    res.render('home', {
        username: 'Peter',
        title: 'Handlebars Demo',
        message: 'Home page Template',
        welcome: 'Welcome to our homepage',
        product: {
            name: 'Product 1',
            price: '10.99'
        },
        contacts: [
            {
                name: 'Pesho',
                email: 'pesho@abv.bg'
            },
            {
                name: 'Msriq',
                email: 'mariq@abv.bg'
            }
        ]
    })
})

app.listen(3000)
