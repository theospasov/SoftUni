const { create, getById } = require('../services/hotelService')
const { parseError } = require('../util/parser')

const hotelController = require('express').Router()

hotelController.get('/:id/details', async (req, res) => {
    const hotel = await getById(req.params.id) // req.params.id will get the id from the url that got the get request 
    res.render('details', {
        title: 'Hotel Details',
        hotel
    })

})


hotelController.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create Hotel'
    })

})

hotelController.post('/create', async (req, res) => {
    const hotel = {
        name: req.body.name,
        city: req.body.city,
        imageUrl: req.body.imageUrl,
        rooms: Number (req.body.rooms),
        owner: req.user._id,
    }

    try {
        if (Object.values(hotel).some(v => !v)) {
            throw new Error('All fields are required')
        }
        await create(hotel)
        res.redirect('/')
    } catch (err) {
        res.render('create', {
            title: 'Create Hotel',
            body: hotel, // this is because we want to save the last entry so the user won't have to retype the info again
            errors: parseError(err)
        })
    }
})

hotelController.get('/:id/edit', async (req, res) => {
    const hotel = await getById(req.params.id) // req.params.id will get the id from the url that got the get request 

    res.render('edit', {
        title: 'Edit Hotel',
        hotel
    })

})

module.exports = hotelController