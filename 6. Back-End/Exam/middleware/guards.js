function hasUser() {
    return (req, res, next) => {
        // Guest can see catalog and detail
        if (req.user  || req.originalUrl == '/catalog/all'|| req.originalUrl.startsWith('/catalog/') && req.originalUrl.endsWith('/details')) { // If guest can NOT see the details, remove last if condition
            
            next()
        } else {
            // Version 1 - redirect 
            //res.redirect('/auth/login')

            // Version 2 - 404 page with error message
            res.render('default', {
                title: `No Permission`,
                errors: [`You can't access this page`]
            })  
            
        }
    }
}

function isGuest() {
    return (req, res, next) => {
        if (req.user && req.originalUrl != '/auth/logout') { // the middleware prevents the users from accessing the auth page, including the logout, with req.originalUrl we make sure that it will skip the logout
            res.redirect('/default') 

        } else {
            next()
        }
    }
}

module.exports = {
    hasUser,
    isGuest
}