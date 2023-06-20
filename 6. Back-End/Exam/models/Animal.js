const { Schema, model, Types } = require('mongoose')

const urlPattern = /^https?:\/\/.+$/i

const animalSchema = new Schema({
    name: { type: String, required: [true, 'Name is required'], minLength: [2, 'Name must be at least 2 characters long']},
    years: { type: Number, required: [true, 'Years are required'], min: [1, 'Years must be between 1 and 100'], max: [100, 'Years must be between 1 and 100']},
    kind: { type: String, required: [true, 'Kind is required'], minLength: [3, 'Kind must be at least 3 characters long']},
    imageUrl: { type: String, required: true, validate: {
        validator: (value) => urlPattern.test(value),
        message: 'Image URL is not valid'
    }},
    need: { type: String, required: [true, 'Need is required'], minLength: [3, 'Need must be between 3 and 20 characters long'], maxLength: [20, 'Need must be between 3 and 20 characters long']},
    location: { type: String, required: [true, 'location is required'], minLength: [5, 'location must be between 5 and 15 characters long'], maxLength: [15, 'Need must be between 5 and 15 characters long']},
    description: { type: String, required: [true, 'description is required'], minLength: [5, 'location must be between 5 and 50 characters long'], maxLength: [50, 'Need must be between 5 and 50 characters long']},

    donations: {type: [Types.ObjectId], ref: 'User', default: []}, // to fix
    owner: { type: Types.ObjectId, ref: 'User', required: true},
    created_at: { type: Date, default: Date.now }
    
})


const Animal = model('Animal', animalSchema)

module.exports = Animal