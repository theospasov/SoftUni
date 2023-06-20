const { getAll, create, getById, update, deleteById, donate } = require('../services/catalogService')
const { parseError } = require('../util/parser')

const catalogController = require('express').Router() // 1. First we create the Router and attach all of the paths and controllers to it. In index.js we only attach the Router

// Catalog get all
catalogController.get('/all', async (req, res) => {
    let animals = await getAll() 
    
    // Guest can see details button
    animals = animals.map((animal) => {
        return { ...animal, canSeeDetails: true };
    });




    res.render('catalog', {
        title: 'Dashboard',
        user: req.user,
        animals,
    })

})

// Details
catalogController.get('/:id/details', async (req, res) => {
    const animal = await getById(req.params.id) // req.params.id will get the id from the url that got the get request 

    // Check - User or Guest
    if (req.cookies && req.cookies['token']) { // User
        
        // if guest can NOT see details uncomment
        animal.canSeeButtons = true

         // Check - User-Owner or User-Non-Owner
        if (animal.owner == req.user._id) {
            animal.thisIsOwner = true
        } else if (animal.donations.map(b => b.toString()).includes(req.user._id.toString())) {
            animal.isBooked = true
        }

        res.render('details', {
            title: 'Animal Details',
            animal
        })

    } else { // Guest
        animal.canSeeButtons = false
        res.render('details', {
            title: 'Animal Details',
            animal
        })
      }
    
})

// Create
catalogController.get('/create', (req, res) => {
    res.render('create', {
        title: 'Create Animal'
    })

})

catalogController.post('/create', async (req, res) => {
    const animal = {
        name: req.body.name,
        years: Number (req.body.years),
        kind: req.body.kind,
        imageUrl: req.body.imageUrl,
        need: req.body.need,
        location:req.body.location,
        description:req.body.description,
        owner: req.user._id,
    }


    try {
        if (isNaN(animal.years)) {
            throw new Error('Invalid number')
        }
        if (Object.values(animal).some(v => !v)) {
            throw new Error('All fields are required')
        }
        await create(animal)
        res.redirect('/catalog/all')
    } catch (err) {
        res.render('create', {
            title: 'Create Animal - Error',
            body: animal, // this is because we want to save the last entry so the user won't have to retype the info again
            errors: parseError(err)
        })
    }
})

// Edit
catalogController.get('/:id/edit', async (req, res) => {
    const animal = await getById(req.params.id) // req.params.id will get the id from the url that got the get request 

    if (animal.owner != req.user._id) {
        return  res.render('default', {
            title: '404 Page'
        })
    }

    res.render('edit', {
        title: 'Edit Animal',
        animal
    })

})


catalogController.post('/:id/edit', async (req, res) => {

   
    const animal = await getById(req.params.id) // req.params.id will get the id from the url that got the get request 
    // Check if the user is authorized 
    if (animal.owner != req.user._id) {
        return  res.render('default', {
            title: '404 Page'
        })
    }


 
    const editedAnimal = {
        name: req.body.name,
        years: Number (req.body.years),
        kind: req.body.kind,
        imageUrl: req.body.imageUrl,
        need: req.body.need,
        location: req.body.location,
        description: req.body.description,
    
    }

    try {
        if (Object.values(editedAnimal).some(v => !v)) {
            throw new Error('All fields are required')
        }

        await update(req.params.id, editedAnimal)
        res.redirect(`/catalog/${req.params.id}/details`)

    } catch (err) {
        res.render('edit', {
            title: 'Edit Animal',
            animal: Object.assign(editedAnimal, { _id: req.params.id }), // this is because we want to save the last entry so the user won't have to retype the info again
            errors: parseError(err)
        })
    } 


})

// Delete
catalogController.get('/:id/delete', async (req, res) => {
    const animal = await getById(req.params.id) // req.params.id will get the id from the url that got the get request 

    if (animal.owner != req.user._id) {
        return  res.render('default', {
            title: '404 Page'
        })
    }

    await deleteById(req.params.id)
    res.redirect('/catalog/all')

})

// Book / Buy / Donate
catalogController.get('/:id/donate', async (req, res) => {
    const animal = await getById(req.params.id) // req.params.id will get the id from the url that got the get request 

    try {
        // check if the user is owner we redirect them to details and show and error
        if (animal.owner == req.user._id) {
            animal.thisIsOwner = true
            return  res.render('default', {
                title: '404 Page'
            })
        }

        await donate(req.params.id, req.user._id )
        res.redirect(`/catalog/${req.params.id}/details`)
        
    } catch (err) {
        res.render('details', {
            title: 'Animal Details',
            animal,
            errors: parseError(err)
        })        
    }


})

module.exports = catalogController
