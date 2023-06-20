const searchController = require('express').Router()
const Animal = require('../models/Animal')

searchController.get('/', (req, res) => {
    
    res.render('search', {
        title: 'Search Page'
    })

})


module.exports = searchController