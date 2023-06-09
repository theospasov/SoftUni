const express = require('express')
const expressConfig = require('./config/express')
const routingConfig = require('./config/routes')
const databaseConfig = require('./config/database')

async function start() { 
    const app = express()

    expressConfig(app) 
    routingConfig(app) 
    await databaseConfig(app)


    app.listen(3000)
}


start()

