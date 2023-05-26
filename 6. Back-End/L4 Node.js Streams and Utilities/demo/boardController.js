const fs = require('fs')

function homePage(req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/html'
    })
    fs.createReadStream('./static/index.html').pipe(res)
    res.write('home page')
    res.end()
}

function sendFile(req, res) {
    if (req.url == '/style.css') {
        res.writeHead(200, {
            'Content-Type': 'text/css'
        })
        fs.createReadStream('./static/style.css').pipe(res)
    } else {
       const filename = '.' + req.url
       fs.createReadStream(filename).pipe(res)
    }
    
}

module.exports = {
    homePage,
    sendFile
};