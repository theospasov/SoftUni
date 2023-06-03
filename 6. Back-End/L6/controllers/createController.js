const router = require('express').Router()

router.get('/', (req, res) => {
    res.render('create', { 
    title: 'Create New Rooms'})
})

router.post('/', async (req, res) => { 
    try { 
        res.redirect('/catalog')
    } catch (error) {
        
    }

})

module.exports = router