const { verifyToken } = require("../services/userService")

// This is a middleware that reads the session cookie, THIS IS HOW ALL OTHER OPERATIONS CAN SEE IF THE USER IS LOGGEDIN. If there is no token we go next; if there is a token we verify it with varifyToken, if it's correct we add it to req.user and next() if it is wrong we delete it 
module.exports = () => (req, res, next) => {
    const token = req.cookies['token']
    if (token) {
        try {
            const userData = verifyToken(token)
            req.user = userData
            res.locals.username = userData.username // adding the username in the global context, so we may add it to the navigation in the layout and see the username when logged in and also see specific buttons (like registration when not logged in )
        } catch (error) {
            res.clearCookie('token')
            res.redirect('/auth/login')
            return
        }

    }

    next()
}