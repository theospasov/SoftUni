const server = require('http').createServer((req, res) => {
    if (req.url == '/') { //
        let visitedCounter = 0
        if (req.headers.cookie) { 
            const cookies = req.headers.cookie
            .split(';') 
            .map(c => c.trim()) 
            .map(c => c.split('=')) 

            const cookiesObject = Object.fromEntries(cookies)

            if (cookiesObject.visited) {
                visitedCounter = Number(cookiesObject.visited)
                visitedCounter++ 
            }

            console.log(cookiesObject);
        }
        //console.log(req.headers.cookie);

        // Sessions
        const sessions = {}
        if(cookies.sessionId) {
            sessions = sessions[cookie.sessionId] || {}
        } else {
            sessionId = Math.random()
        }


        res.writeHead(200, {
            'Set-Cookie': `visited=${visitedCounter}; httpOnly`
        })
        res.write(`<p>Hello, you have visited this page ${visitedCounter}</p>`)
        res.end()

    } else {
        res.writeHead(404)
        res.end()
    }

}).listen(3000)