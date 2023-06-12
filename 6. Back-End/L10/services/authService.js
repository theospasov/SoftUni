const bcrypt = require('bcrypt')
const User = require('../models/User')

async function register(username, password) {
    // check if username is taken
    const existing = await User.find({})

    // hash password
    // create and save user
    // return user data
}

async function login(username, password) {
    return new Promise((res, rej) => {
        if (username.toLowerCase() == 'peter' && password == '1234') {
            res({
                _id: '131241ef314',
                username: 'Peter',
                roles: ['user']
            })

        } else {
            rej(new Error ('Incorrect username or password'))
        }
    })
}

module.exports = {
    login
}