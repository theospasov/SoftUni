const homeController = require('express').Router() // 1. First we create the Router and attach all of the paths and controllers to it. In index.js we only attach the Router


homeController.get('/', (req, res) => {

    res.render('home', {
        title: 'Home Page'
    })
})

module.exports = homeController
