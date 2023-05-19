const http = require('http')

const homePage = `
    <h1>Hello world</h1>
    <p>Welcome to our site</p>
`

const aboutPage = `
    <h1>About Us</h1>
    <p>Contact us: 12323234</p>
`

const defaultPage = `
    <h1>404</h1>
    <p>The page you requested cannot be found</p>
`

const catalogPage = `
    <h1>Catalog</h1>
    <p>Items</p>
`

function html(body) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <body>
        <nav>
            <ul>
                <li><a href='/'>Home Page</a></li>
                <li><a href='/catalog'>Catalog</a></li>
                <li><a href='/about'>About Page</a></li>
                <li><a href='/404'>404</a></li>
            <ul>
        </nav>
        ${body}
    </body>
    </html>
    `
}

const routes = {
    '/' : homePage,
    '/about': aboutPage,
    '/catalog': catalogPage
}

const server = http.createServer((request, response) => {
    const url = new URL(request.url, `http://${request.headers.host}`)

    const page = routes[url.pathname]

    if (page != undefined) {
        response.write(html(page))
        response.end()
    } else {
        response.statusCode = 404;
        response.write(html(defaultPage))
        response.end()
    }


})

server.listen(3000)