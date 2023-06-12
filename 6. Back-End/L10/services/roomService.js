const Room = require('../models/Room')

function getAll() { // getting all the data about accommodation, so we can render the catalog
    return Room.find({}).lean() // lean() is used because Handlebars send an error about a parameter that has access to the local files.
}

function getById(id) {
    return Room.findById(id).lean()
}

async function create(roomData) { // we have to parse the Form data, 1 - because we need to add an ID (done in the function getId() ) and 2- because the user may have added extra fields (with html inspector)
    const room = {
        name: roomData.name,
        description: roomData.description,
        city: roomData.city,
        beds: Number(roomData.beds),
        price: Number(roomData.price),
        imgUrl: roomData.imgUrl
    }

    // Validation for wrong data from the Form
    // 1$  All fields are required Version
    const missing = Object.entries(room).filter(([k,v]) => !v)
    if (missing.length > 0) {
        throw new Error (missing.map(m => `${m[0]} is required`).join('\n'))
    }


    const result = await Room.create(room) // writing the new room in the DB
    return result // we return the room, because in createCotroller we want to redirect to the new page and it needs the new accommodation's ID
}



module.exports = {
    getAll,
    getById,
    create

}

// 1$  
// if(Object.values(room).some(v => !v)) { //  checking if any of the values in the object room is falsy
//     throw new Error('All fields are required!')
// }