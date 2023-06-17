const express = require('express')
const expressConfig = require('./config/express')
const routingConfig = require('./config/routes')
const databaseConfig = require('./config/database')


async function start() { // when working with DB we need async. This is why we will put the DB, Express & Handlebars Setup function in the async function start()
    const app = express()

    expressConfig(app) // export from the Express configuration (/config/express.js)
    routingConfig(app) // export for the Routing configuration (/config/routes)
    await databaseConfig(app)


    app.listen(3000, () => console.log('Server is listening on port 3000'))
}


start()
 