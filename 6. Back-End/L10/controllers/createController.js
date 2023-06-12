const { create } = require('../services/roomService')

const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('create', { 
    title: 'Create New Rooms'})
})

router.post('/', async (req, res) => {
    try { 
        const result = await create(req.body) 
        res.redirect('/catalog/' + result._id)
    } catch (error) {
        res.render('create', {
            title: 'Request error',
            error: error.message.split('\n') 
        })
    }

})

module.exports = router