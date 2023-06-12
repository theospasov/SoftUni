const jwt = require('jsonwebtoken')

// Validating the JWT Token
module.exports = (jwtSecret) => (req, res, next) => {
    const token = req.cookies.jwt // looking for the jwt cookie 
    if (token) { 
        try {
            const data = jwt.verify(token, jwtSecret) // if there is a token we verify it
            // NIU console.log(data); // { username: 'peter', roles: [ 'user' ], iat: 1686582196 }
            // NIU res.json(data) // we return the data so the user may see them
            req.user = data // we attach the token to the user
        } catch (error) {
            res.clearCookie('jwt') // this will delete the token
            return res.redirect('/login') // if the user has an invalid token next() won't be reached because we return the function and the app will simply redirect to the login page
        }

    } 
    req.signJwt = (data) => jwt.sign(data, jwtSecret, {
        expiresIn: '999h'
    })
    next() // if the user has a valid token they will reach the next() COntroller
}