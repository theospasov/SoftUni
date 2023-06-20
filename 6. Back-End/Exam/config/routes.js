const homeController = require('../controllers/homeController')
const catalogController = require('../controllers/catalogController')
const authController = require('../controllers/authController')
const searchController = require('../controllers/searchController')
const defaultController = require('../controllers/defaultController')
const { hasUser, isGuest } = require('../middleware/guards')

module.exports = (app) => {
    app.use( '/', homeController)
    app.use('/catalog', hasUser(), catalogController)
    app.use('/auth', isGuest() , authController)
    app.use('/search', searchController)
    app.use('*', defaultController )

}