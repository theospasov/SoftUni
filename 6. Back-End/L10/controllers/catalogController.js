// This is the Controller for the catalog and details pages

const { getAll, getById } = require('../services/roomService')

const router = require('express').Router()

router.get('/', async (req, res) => {

    const user = req.user
    console.log(user);

    const rooms = await getAll() // *1.0 - gets all of the accumulations.
    res.render('catalog', {
        title: 'All rooms',
        rooms // *1.1  After we get all of the rooms we need to add them to the context of catalog.hbs, so the HBS template may use them
    })
})

router.get('/:id', async (req, res) => { 
    const roomId = req.params.id 
    const room = await getById(roomId)

    if(room) {
        res.render('details', {
            title: 'Room Details',
            room // room is a context property, not context
        })
    } else {
        res.render('roomNotFound',{
            title: 'Accommodation Details',
            roomId
        })
    }
})

module.exports = router