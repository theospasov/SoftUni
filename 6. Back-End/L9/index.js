const server = require('http').createServer((req, res) => {
    if (req.url == '/') { // without this if else we will get each console.log twice, because of the favicon; this way the favicon will return 404 and won't send a duplicate response
        let visitedCounter = 0
        if (req.headers.cookie) { // we check if there are cookies 
            const cookies = req.headers.cookie
            .split(';') // we might have more that one cookie, so we need to parse them by separating them individually in an Array | [ 'visited=1', ' theme=dark' ]
            .map(c => c.trim()) // might have an empty space, so we trim the cookie texts | [ 'visited=1', 'theme=dark' ]
            .map(c => c.split('=')) // | [ [ 'visited', '1' ], [ 'theme', 'dark' ] ]

            const cookiesObject = Object.fromEntries(cookies) // |{ visited: '1', theme: 'dark' }

            if (cookiesObject.visited) {
                visitedCounter = Number(cookiesObject.visited)
                visitedCounter++ // | { theme: 'dark', visited: '0' } | { theme: 'dark', visited: '1' } | { theme: 'dark', visited: '2' }
            }

            console.log(cookiesObject);
        }
        //console.log(req.headers.cookie);


        // Sessions - creating an ID for each session
        const  sessions = {}
        const sessionId = req.headers.cookie.sessionId || (Math.random() * 999999).toString(16) // if cookies.sessionId  returns undefined this will crete a random Id 
        const session = sessions[sessionId] || {}

        sessions[sessionId] = session
  
        
        res.writeHead(200, [
            'Set-Cookie', `sessionId=${sessionId}; httpOnly`,
            'Set-Cookie', `theme=dark`,
        ])
        res.write(`<p>Hello, you have visited this page ${visitedCounter}</p>`)
        res.end()

    } else {
        res.writeHead(404)
        res.end()
    }

}).listen(3000)

//'Set-Cookie': `visited=${visitedCounter}; httpOnly`