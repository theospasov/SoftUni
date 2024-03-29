const { Schema, model} = require('mongoose')

const userSchema = new Schema({
    username: {type: String, minlength: 3},
    hashedPassword: {type: String, require: true },
    roles: { type: String, enum: ['user', 'admin'], default: ['user']}
})

const User = model('User', userSchema)

module.exports = User