// This middleware will add the title: to pages that don't have one set. express (request) -> defaultTitle -> Controller. The pattern is to export one function that creates another function

module.exports = (defaultTitle) => (req, res, next) => {
    res.locals.title = defaultTitle // res.locals - build-in method from which the template engine reads values - it's the default context. During render time, the engine will take response.locals and combine it with the object in the Controller(whatever controller is triggered)->router.get('path' () => {res.render('views', {Object})}) [L6 -> 59:20] . If the original controller has a title then it won't be changed, otherwise it will become equal to the defaultTitle
    next() // leads to the next middleware (if there is one)
}
