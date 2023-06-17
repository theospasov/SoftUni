const { create, getById, update, deleteById, bookRoom } = require('../services/hotelService')
const { parseError } = require('../util/parser')

const hotelController = require('express').Router()

hotelController.get('/:id/details', async (req, res) => {
    const hotel = await getById(req.params.id) // req.params.id will get the id from the url that got the get request 
    
    // check if user is authorized. If true we will pass that info so the details template may visualize different buttons
    if (hotel.owner == req.user._id) {
        hotel.thisIsOwner = true
    } else if (hotel.bookings.map(b => b.toString()).includes(req.user._id.toString())) {
        hotel.isBooked = true
    }

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

    if (hotel.owner != req.user._id) {
        return res.redirect('/auth/login')
    }

    res.render('edit', {
        title: 'Edit Hotel',
        hotel
    })

})

hotelController.post('/:id/edit', async (req, res) => {

    // Load the hotel
    const hotel = await getById(req.params.id) // req.params.id will get the id from the url that got the get request 
    // Check if the user is authorized 
    if (hotel.owner != req.user._id) {
        return res.redirect('/auth/login')
    }

    // edit the hotel in the DB, our hotel now has the new data
    const editedHotel = {
        name: req.body.name,
        city: req.body.city,
        imageUrl: req.body.imageUrl,
        rooms: Number (req.body.rooms),
    }

    try {
        if (Object.values(editedHotel).some(v => !v)) {
            throw new Error('All fields are required')
        }

        await update(req.params.id, editedHotel)
        res.redirect(`/hotel/${req.params.id}/details`)

    } catch (err) {
        res.render('edit', {
            title: 'Edit Hotel',
            hotel: Object.assign(editedHotel, { _id: req.params.id }), // this is because we want to save the last entry so the user won't have to retype the info again
            errors: parseError(err)
        })
    } 


})

hotelController.get('/:id/delete', async (req, res) => {
    const hotel = await getById(req.params.id) // req.params.id will get the id from the url that got the get request 

    if (hotel.owner != req.user._id) {
        return res.redirect('/auth/login')
    }

    await deleteById(req.params.id)
    res.redirect('/')

})

hotelController.get('/:id/book', async (req, res) => {
    const hotel = await getById(req.params.id) // req.params.id will get the id from the url that got the get request 

    try {
        // check if the user is owner we redirect them to details and show and error
        if (hotel.owner == req.user._id) {
            hotel.thisIsOwner = true
            throw new Error('Cannot book your own hotel')
        }

        await bookRoom(req.params.id, req.user._id )
        res.redirect(`/hotel/${req.params.id}/details`)
        
    } catch (err) {
        res.render('details', {
            title: 'Hotel Details',
            hotel,
            errors: parseError(err)
        })        
    }


    r4
})

module.exports = hotelController