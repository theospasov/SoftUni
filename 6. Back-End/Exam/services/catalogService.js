const Animal = require('../models/Animal')

async function getLastThree() {
    return Animal.find({}).sort('-created_at').limit(3).lean() 
}


async function getAll() {
    return Animal.find({}).lean() 
}

async function getById(id) {
    return Animal.findById(id).lean()
}

async function create(animal) {
    return await Animal.create(animal)
}

async function update(id, animal) {
    const existing = await Animal.findById(id)

    existing.name = animal.name
    existing.years = animal.years
    existing.kind = animal.kind
    existing.imageUrl = animal.imageUrl
    existing.need = animal.need
    existing.location = animal.location
    existing.description = animal.description


    await existing.save()
}

async function deleteById(id) {
    await Animal.findByIdAndRemove(id)
    
}

async function donate(animalId, userId) {
    const animal = await Animal.findById(animalId)

    if(animal.donations.includes(userId)) {
        try {
            isBooked = true
            throw new Error('Cannot donate twice')
        } catch (error) {
            res.render('details', {
                title: 'Animal Details - Error',
                animal,
                errors: parseError(err)
            })   
        }
 
     
    }
    animal.donations.push(userId)
    await animal.save()
}

module.exports = {
    getAll,
    getById,
    create,
    update,
    deleteById,
    donate,
    getLastThree
}