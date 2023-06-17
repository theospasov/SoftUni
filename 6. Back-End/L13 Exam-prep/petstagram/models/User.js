const { Schema, model} = require('mongoose')


// TODO add User properties and validation according to assignment

 const userSchema = new Schema({
    username: { type: String, required: true, unique: true},
    email: { type: String, required: true, unique: true},
    hashedPassword: {type: String, require: true }
})

userSchema.index({ username: 1}, { // allows us to make the username unique
    collation: {
        locale: 'en', // latin letters
        strength: 2 // this means case-insensitive
    }
})

userSchema.index({ email: 1}, { // allows us to make the email unique
    collation: {
        locale: 'en', 
        strength: 2 
    }
})

const User = model('User', userSchema)

module.exports = User

