// This page will handle all of the routing; moved from index.js in DB Lab
const homeController = require('../controllers/homeController')
const catalogController = require('../controllers/catalogController')
const authController = require('../controllers/authController')
const profileController = require('../controllers/profileController')
const defaultController = require('../controllers/defaultController')
const { hasUser, isGuest } = require('../middleware/guards')

module.exports = (app) => {
    app.use( '/', homeController)
    app.use('/catalog', hasUser(), catalogController)
    app.use('/auth', isGuest() , authController)
    app.use('/profile', profileController)
    app.use('*', defaultController )

}