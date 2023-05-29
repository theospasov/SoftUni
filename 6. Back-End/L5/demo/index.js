const express = require('express')
const catalogController = require('./catalogController')

const app = express(); // Creates a new instance of the application

app.use(catalogController)

app.post('/create',  // Path
    (req, res, next) => { // Middleware
        console.log('Handling POST request');
        next() // if we don't have next(), we won't continue to the handler
    },
    (req, res) => { // Handler
        res.redirect('/catalog')
    }
)

app.all('*', (req, res) => { 
    res.send('404 Not available')
})

app.listen(3000) // listen on port 3000
// Advanced example - including info from the toggles bellow