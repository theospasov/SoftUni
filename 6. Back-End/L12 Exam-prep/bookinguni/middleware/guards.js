
// This page checks if the user is a guest or a registered user. Security Requirements
function hasUser() {
    return (req, res, next) => {
        if (req.user) {
            next()
        } else {
            // Version 1 - redirect 
            //res.redirect('/auth/login')

            // Version 2 - 404 page with error message
            res.render('default', {
                title: `No Permission`,
                errors: [`You must be loged-in`]
            })  
            
        }
    }
}

function isGuest() {
    return (req, res, next) => {
        if (req.user && req.originalUrl != '/auth/logout') { // the middleware prevents the users from accessing the auth page, including the logout, with req.originalUrl we make sure that it will skip the logout
            res.redirect('/default') // TODO check assignment for correct redirect

        } else {
            next()
        }
    }
}

module.exports = {
    hasUser,
    isGuest
}