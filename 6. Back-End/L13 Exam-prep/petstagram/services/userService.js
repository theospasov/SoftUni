// Service that creates and logs Users
const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// Reg. -  Registration
async function register(email, username, password) {
    // Reg.1 check if the email already exists, this is called when we register from the authController 
    const existingEmail = await User.findOne({ email }).collation({ locale: 'en', strength: 2})
    if (existingEmail) {
        throw new Error('Email already exist')
    }

    const existingUsername = await User.findOne({ username }).collation({ locale: 'en', strength: 2})
    if (existingUsername) {
        throw new Error('Username already exist')
    }


    // Reg.2 if the username doesn't exit we continue by HASHING THE PASSWORD
    const hashedPassword = await bcrypt.hash(password, 10)

    // Reg.3 create the user, after this we need to create the session and return it (as a cookie) and the Controller will make the client save it are redirect to the home page -> createSession()
    const user = await User.create({
        email,
        username,
        hashedPassword
    })

    // Reg.4  // TODO check if I need to login the user (create a user session) after registration or not. Here we're CREATING A SESSION
    const token = createSession(user)
    return token

}

// Login
async function login(username, password) {
    // Validation
    // TODO - if we log in with username, change where it says email and error message
    const user = await User.findOne({ username }).collation({ locale: 'en', strength: 2})
    if (!user) {
        console.log(`throw - username`);
        throw new Error('Incorrect email or password')
    }

    const passwordMatch = await bcrypt.compare(password, user.hashedPassword)

    if (passwordMatch == false) {
        console.log(`throw - password`);
        throw new Error('Incorrect email or password')
    }

    // Creating the session token and return it
    return createSession(user)

}

// Authentication
// JWT
const jwtSecret = 'secretCode15464654'

function verifyToken(token) {
    return jwt.verify(token, jwtSecret)
}

// Reg.5 
function createSession({ _id, email, username}) {
    const payload = {
        _id,
        email,
        username
    }

    // We create the token and return it
    return token = jwt.sign(payload, jwtSecret)
    
}




module.exports = {
    register,
    login,
    verifyToken
}