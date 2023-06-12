const homeController = require('../controllers/homeController')
const defaultController = require('../controllers/defaultController')
const catalogController = require('../controllers/catalogController')
const createController = require('../controllers/createController')
const facilityController = require('../controllers/facilityController')
const authController = require('../controllers/authController')

module.exports = (app) => {
    // Routing from controllers
app.use( '/', homeController) 
app.use('/catalog', catalogController)
app.use('/create', createController)
app.use('/facility/create', facilityController)
app.use('/auth', authController)
app.all( '*', defaultController) // 404 page - must be at the end


}