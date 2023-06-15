// TODO replace with real controller by assignment
// TODO* different

const { getAll } = require('../services/hotelService')

// Controller for the home and about pages

const homeController = require('express').Router() // 1. First we create the Router and attach all of the paths and controllers to it. In index.js we only attach the Router


homeController.get('/', async (req, res) => {
    const hotels = await getAll() // from here we get all the hotels from the DB, to populate the home page
    res.render('home', {
        title: 'Home Page',
        user: req.user,
        hotels
    })
})

module.exports = homeController
