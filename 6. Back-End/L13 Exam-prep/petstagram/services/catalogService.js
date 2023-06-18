// TODO - change the Model
const Photo = require('../models/Photo')

async function getAll() {
    return Photo.find({}).lean() // empty Object - find all the Hotel-s
}

async function getById(id) {
    return Photo.findById(id).lean()
}

async function create(photo) {
    return await Photo.create(photo)
}

async function update(id, photo) {
    const existing = await Photo.findById(id)

    existing.name = photo.name
    existing.imageUrl = photo.imageUrl
    existing.age = photo.age
    existing.description = photo.description
    existing.location = photo.location
 


    await existing.save()
}

async function deleteById(id) {
    await Photo.findByIdAndRemove(id)
    
}

async function bookRoom(hotelId, userId) {
    const hotel = await Photo.findById(hotelId)

    if(hotel.bookings.includes(userId)) {
        try {
            isBooked = true
            throw new Error('Cannot book twice')
        } catch (error) {
            res.render('details', {
                title: 'Hotel Details',
                hotel,
                errors: parseError(err)
            })   
        }
 
     
    }
    hotel.bookings.push(userId)
    await hotel.save()
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteById,
    bookRoom
}