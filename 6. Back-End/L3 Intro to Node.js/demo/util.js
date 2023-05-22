function html(body, title = 'Demo site') {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <title>${title}</title>
    </head>
    <body>
        <nav>
            <ul>
                <li><a href='/'>Home Page</a></li>
                <li><a href='/catalog'>Catalog</a></li>
                <li><a href='/create'>Create</a></li>
                <li><a href='/about'>About Page</a></li>
                <li><a href='/404'>404</a></li>
            <ul>
        </nav>
        ${body}
    </body>
    </html>
    `
}

const data = [
    {
        id: '001',
        name: 'Product 1',
        color: 'Red'
    }, 
    {
        id: '002',
        name: 'Product 2',
        color: 'Blue'
    }
]

module.exports= {
    html,
    data
}