const { Schema, model } = require('mongoose') 
const personSchema = new Schema({
    name: String,
    age: Number,
    height: { type: Number, required: true} })

personSchema.methods.getInfo = function() { 
    return `I am ${this.name}, ${this.age} years old`
}

personSchema.virtual('nameAndAge').get(function() {
    return `${this.name} ${this.age}`
})

const Person = model('Person', personSchema)

module.exports = Person 