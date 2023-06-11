const app = require('express')()
const cookieParser = require('cookie-parser')
const session = require('express-session')

app.use(cookieParser())
// Creating a Session Cookie (id)
app.use(session({ // creates a session with a key connect.sid and the value is a unique id. Located in DevTools -> Application -> Cookies. If we open a new browser and go to the same get address we will get a new Id
    secret: 'my secret',
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false } // this will go inside the cookieParser. True works with https and false for http
}))

// // Cookies
// app.get('/', (req, res) => {

//     // Setting cookies 
//     res.cookie("message", "hello")
//     res.cookie("darkMode", "off")
//     res.end('Cookie set')

//     //Reading cookies
//     console.log(req.cookies); // | { message: 'hello', darkMode: 'off' }

// })

// // Sessions 
 app.get('/setSession', (req, res) => {
    console.log(req.session)
    res.send('Hello')
    res.end()
   ; // Session {         cookie: { path: '/', _expires: null, originalMaxAge: null, httpOnly: true, secure: false } }
//     res.send('Hello')
// //     req.session.message = "hello"
// //     res.end('Session set')
// //    })
// //    app.get('/readSession', (req, res) => {
// //     res.json(req.session)
 })

app.listen(3000)