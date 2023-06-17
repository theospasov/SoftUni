const { Schema, model, Types } = require('mongoose')

const urlPattern = /^https?:\/\/.+$/i

const photoSchema = new Schema({
    name: { type: String, required: true, minLength: [2, 'Photo name must be at least 2 characters long']},
    imageUrl: { type: String, required: true, validate: {
        validator: (value) => urlPattern.test(value),
        message: 'Image URL is not valid'
    }},
    age: { type: Number, required: true, min: [1, 'Age must be between 1 and 100'], max: [100, 'Age must be between 1 and 100']},
    description: { type: String, required: true, minLength: [1, 'Description must be between 1 and 50 characters'], maxLength: [50, 'Description must be between 1 and 50 characters']},
    location: { type: String, required: true, minlength: [3, 'Location name must be at least 3 characters long'], maxLength: [50, 'LOcation must be between 1 and 50 characters'] },

    
    commentList: {type: [Types.ObjectId], ref: 'User', default: []}, 
    owner: { type: Types.ObjectId, ref: 'User'}
    
})


const Photo = model('Photo', photoSchema)

module.exports = Photo