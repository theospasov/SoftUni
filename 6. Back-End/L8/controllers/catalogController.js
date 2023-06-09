const { getAll, getById } = require('../services/roomService')

const router = require('express').Router()

router.get('/', async (req, res) => {
    const rooms = await getAll() 
    res.render('catalog', {
        title: 'All rooms',
        rooms 
    })
})

router.get('/:id', async (req, res) => { 
    const roomId = req.params.id 
    const room = await getById(roomId)

    if(room) {
        res.render('details', {
            title: 'Room Details',
            room 
        })
    } else {
        res.render('roomNotFound',{
            title: 'Accommodation Details',
            roomId
        })
    }
})

module.exports = router