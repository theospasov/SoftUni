const http = require('http')
const { homePage, aboutPage, defaultPage } = require('./controllers/homeController')
const { catalogPage, createPage } = require('./controllers/catalogController')
const router = require('./router')

router.register('/', homePage)
router.register('/catalog', catalogPage)
router.register('/create', createPage)
router.register('/about', aboutPage)
router.register('default', defaultPage)


const server = http.createServer(router.match)

server.listen(3000) 
