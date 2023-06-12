const { createFacilities, getAllFacilities } = require('../services/facilityService');
const { getById } = require('../services/roomService');

const facilityController = require('express').Router()

facilityController.get('/', (req, res) => { 
    res.render('createFacility', {
        title: 'Create New Facility'
    })
})

facilityController.post('/', async (req, res) => { 
    console.log(req.body);

    try {
        await createFacilities(req.body.label, req.body.iconUrl)
        res.redirect('/catalog')
    } catch (err) {
        res.render('createFacility', {
            title: 'Create New Facility',
            error: err
        })
    }


})

facilityController.get('/:roomId/decorateRoom', async (req, res) => { 
    const roomId = req.params.roomId
    const room = await getById(roomId)
    const facilities = await getAllFacilities()


    res.render('decorate', {
        title: 'Add Facility',
        room,
        facilities
    })
})

facilityController.post('/:roomId/decorateRoom', async (req, res) => {
    console.log(req.body);
    res.redirect(`/facility/create/${req.params.roomId}/decorateRoom`)
})

module.exports = facilityController