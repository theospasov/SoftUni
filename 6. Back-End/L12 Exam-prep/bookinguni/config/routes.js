// This page will handle all of the routing; moved from index.js in DB Lab
const homeController = require('../controllers/homeController')
const authController = require('../controllers/authController')
const hotelController = require('../controllers/hotelController')
const profileController = require('../controllers/profileController')
const { hasUser, isGuest } = require('../middleware/guards')
const defaultController = require('../controllers/defaultController')

module.exports = (app) => {
    app.use( '/', homeController)
    app.use('/auth', isGuest() , authController)
    app.use('/hotel', hasUser(),  hotelController) // hasUser - if we are a user we won't be able to see them
    app.use('/profile', profileController)
    app.use('*', defaultController )

}