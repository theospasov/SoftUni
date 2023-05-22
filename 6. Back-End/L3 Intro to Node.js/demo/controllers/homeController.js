const { html } = require("../util")

function homePage(reg, res) {
    res.write(html(
        `
        <h1>Hello world</h1>
        <p>Welcome to our site</p>
    `
    ))
    res.end()
}

function aboutPage(reg, res) {
    res.write(html(
        `
        <h1>About Us</h1>
        <p>Contact us: 12323234</p>
    `
    ))
    res.end()
}

function defaultPage(reg, res) {
    res.statusCode = 404
    res.write(html(
        `
        <h1>404</h1>
        <p>The page you requested cannot be found</p>
    `
    ))
    res.end()
}

module.exports = {
    homePage,
    aboutPage,
    defaultPage
}