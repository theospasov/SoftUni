const homeController = require('express').Router() // 1. First we create the Router and attach all of the paths and controllers to it. In index.js we only attach the Router
const { getLastThree} = require('../services/catalogService')


homeController.get('/', async (req, res) => {

    let animals = await getLastThree()

    res.render('home', {
        title: 'Home Page',
        animals
    })
})

module.exports = homeController
