const http = require('http')

const server = http.createServer((request, response) => {
	console.log('Request received')
	console.log(request.url)

    if( request.url == '/') {
        response.writeHead(200, {
            'Content-type': 'text/plain'
        })
        response.write('Hello world')
        response.end()
    } else {
        response.statusCode = 404; // we don't have a favicon in our website, so we set it's status to 404 and the server will know that there isn't anything
        response.end()
    }

})

server.listen(3000) // the server will listen on port 3000
