const express = require('express')

const app = express(); // Creates a new instance of the application

app.get('/', (req, res) => { // triggered on GET method; () have 2 parameters - the triggering route and the handler function
    res.send('Hello there')
})

app.all('*', (req, res) => { 
    res.send('404 Not available')
})

app.listen(3000) // listen on port 3000
