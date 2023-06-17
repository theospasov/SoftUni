const defaultController = require('express').Router() // 1. First we create the Router and attach all of the paths and controllers to it. In index.js we only attach the Router


defaultController.get('/', (req, res) => {

    res.render('default', {
        title: '404 Page'
    })
})

module.exports = defaultController
