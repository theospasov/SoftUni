const express = require('express')
const session = require('express-session')

const app = express()
app.use(express.urlencoded({ extended: true}))

app.use(session({
    cookie: { secure: false},
    resave: false,
    saveUninitialized: true,
    secret: 'dqedqwdw'
}))

app.get('/', (req, res) => {
    console.log(`>>> User: ` + (req.session.user || 'guest'));
    if (req.session.user) { // checking if we have a reg user and greeting accordingly
        res.send(`<p>Hello, ${req.session.user}</p>`)
    } else {
        res.send('<p>Hello, guest</p><p>Please login: <a href="/login">Login</a></p>')
    }
    
})

const htmlForm = `
<form action="/login" method="post">
    <label>Username <input type="text" name="username"></label>
    <label>Password <input type="password" name="password"></label>
    <input type="submit" value="Login">
</form>
`

app.get('/login', (req, res) => {
    res.send(htmlForm)
})

const users = {
    'peter': '1234',
    'john': 'qwerty'
}

app.post('/login', (req, res) => {
    console.log('Login attempt');
    if (users[req.body.username] != undefined && users[req.body.username] == req.body.password ) {
        req.session.user = req.body.username
        res.redirect('/')
    } else {
        res.status(401).send('Incorrect username or password')
    }
    

})

app.listen(3000)