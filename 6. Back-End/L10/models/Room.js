const { Schema, model, Types } = require('mongoose') // Schema is class, model is a method used to register the Schema and attach it to a Model. Types is used for relating on Model to another

const roomSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    city: { type: String, required: true },
    beds: { type: Number, required: true, min: 1 },
    price: { type: Number, required: true, min: 1 },
    imgUrl: { type: String },
    facilities: { type: [Types.ObjectId], default: [], ref: 'Facility'} //This is a relation property
})

const Room = model('Room', roomSchema)// we create a model/collection named 'Room' based on the roomSchema

module.exports = Room