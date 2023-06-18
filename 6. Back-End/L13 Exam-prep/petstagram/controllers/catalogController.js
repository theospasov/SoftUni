const { getAll, create, getById, update, deleteById, bookRoom } = require('../services/catalogService')
const { parseError } = require('../util/parser')

// Controller for the home and about pages

const catalogController = require('express').Router() // 1. First we create the Router and attach all of the paths and controllers to it. In index.js we only attach the Router

// DOne
catalogController.get('/all', async (req, res) => {
    let photos = await getAll() // from here we get all the hotels from the DB, to populate the home page
    
    // Guest can see details button
    photos = photos.map((photos) => {
        return { ...photos, canSeeDetails: true };
    });

    // // Guest can NOT see details button
    // if (req.user) {
    //     hotels = hotels.map((hotel) => {
    //         return { ...hotel, canSeeDetails: true };
    //     });
    // }


    res.render('catalog', {
        title: 'Catalog Page',
        user: req.user,
        photos,
    })

})

catalogController.get('/:id/details', async (req, res) => {
    const photo = await getById(req.params.id) // req.params.id will get the id from the url that got the get request 

    // Check - User or Guest
    if (req.cookies && req.cookies['token']) { // User
        
        // if guest can NOT see details uncomment
        photo.canSeeButtons = true

         // Check - User-Owner or User-Non-Owner
        if (photo.owner == req.user._id) {
            photo.thisIsOwner = true
        } else if (photo.bookings.map(b => b.toString()).includes(req.user._id.toString())) {
            photo.isBooked = true
        }

        res.render('details', {
            title: 'Hotel Details',
            photo
        })

    } else { // Guest
        photo.canSeeButtons = false
        res.render('details', {
            title: 'Hotel Details',
            photo
        })
      }
    
})


catalogController.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create Hotel'
    })

})

catalogController.post('/create', async (req, res) => {
    const photo = {
        name: req.body.name,
        imageUrl: req.body.imageUrl,
        age: Number (req.body.age),
        description: req.body.description,
        location: req.body.location,
        owner: req.user._id,
    }

    try {
        if (Object.values(photo).some(v => !v)) {
            throw new Error('All fields are required')
        }
        await create(photo)
        res.redirect('/')
    } catch (err) {
        res.render('create', {
            title: 'Create Hotel',
            body: photo, // this is because we want to save the last entry so the user won't have to retype the info again
            errors: parseError(err)
        })
    }
})

catalogController.get('/:id/edit', async (req, res) => {
    const photo = await getById(req.params.id) // req.params.id will get the id from the url that got the get request 

    if (photo.owner != req.user._id) {
        return res.redirect('/auth/login')
    }

    res.render('edit', {
        title: 'Edit Hotel',
        photo
    })


})

catalogController.post('/:id/edit', async (req, res) => {

    // Load the hotel
    const photo = await getById(req.params.id) // req.params.id will get the id from the url that got the get request 
    // Check if the user is authorized 
    if (photo.owner != req.user._id) {
        return res.redirect('/auth/login')
    }

    // edit the hotel in the DB, our hotel now has the new data
    const editedPhoto = {
        name: req.body.name,
        location: req.body.location,
        imageUrl: req.body.imageUrl,
        age: Number (req.body.age),
        description: req.body.description
    }

    try {
        if (Object.values(editedPhoto).some(v => !v)) {
            throw new Error('All fields are required')
        }

        await update(req.params.id, editedPhoto)
        res.redirect(`/catalog/${req.params.id}/details`)

    } catch (err) {
        res.render('edit', {
            title: 'Edit Hotel',
            photo: Object.assign(editedPhoto, { _id: req.params.id }), // this is because we want to save the last entry so the user won't have to retype the info again
            errors: parseError(err)
        })
    } 


})

catalogController.get('/:id/delete', async (req, res) => {
    const photo = await getById(req.params.id) // req.params.id will get the id from the url that got the get request 

    if (photo.owner != req.user._id) {
        return res.redirect('/auth/login')
    }

    await deleteById(req.params.id)
    res.redirect('/')

})

catalogController.get('/:id/book', async (req, res) => {
    const photo = await getById(req.params.id) // req.params.id will get the id from the url that got the get request 

    try {
        // check if the user is owner we redirect them to details and show and error
        if (photo.owner == req.user._id) {
            photo.thisIsOwner = true
            throw new Error('Cannot book your own hotel')
        }

        await bookRoom(req.params.id, req.user._id )
        res.redirect(`/catalog/${req.params.id}/details`)
        
    } catch (err) {
        res.render('details', {
            title: 'Hotel Details',
            photo,
            errors: parseError(err)
        })        
    }


})

module.exports = catalogController
