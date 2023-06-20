const defaultController = require('express').Router() 


defaultController.get('/', (req, res) => {

    res.render('default', {
        title: '404 Page'
    })
})

module.exports = defaultController
