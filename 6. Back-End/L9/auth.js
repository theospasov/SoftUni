const express = require('express')
const session = require('express-session')
const { register, login } = require('./userService')

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

const registerTemplate = (error) = `
<h1>Register</h1>
${error ? <p>${error}</p> : '' }
<form action="/register" method="post">
    <label>Username <input type="text" name="username"></label>
    <label>Password <input type="password" name="password"></label>
    <label>Repeat Password <input type="repass" name="password"></label>
    <input type="submit" value="Sign up">
</form>
`

app.get('/register', (req, res) => {
    res.send(registerTemplate())
})

app.post('/register', async (req, res) => {
   
        try {
            if (req.body.username == '' || req.body.password == '') {
                throw new Error (`All fields required`)
            } else if (req.body.password != req.body.repass){
                throw new Error(`Passwords don't match`)
            } 

            await register(req.body.username, req.body.password)
            res.redirect('/')
            
        } catch (error) {
           res.send(registerTemplate(err.message)) 
        }
    
})

app.get('/login', (req, res) => {
    res.send(`
    <h1>Login</h1>
    <form action="/login" method="post">
        <label>Username <input type="text" name="username"></label>
        <label>Password <input type="password" name="password"></label>
        <input type="submit" value="Login">
    </form>
    `)
})


app.post('/login', async (req, res) => {
    console.log('Login attempt');

    if (await login(req.body.username, req.body.password) ) {
        req.session.user = req.body.username
        res.redirect('/')
    } else {
        res.status(401).send('Incorrect username or password')
    }
    

})


app.listen(3000)