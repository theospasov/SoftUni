const bcrypt = require('bcrypt')
const users = []

/* 
{
    username: (string),
    hashedPassword: (string)
}
*/

async function register(username, password) {
    if (users.find(u => u.username.toLowerCase() == username.toLowerCase())) {
        throw new Error ('username is taken')
    }

    const user = {
        username,
        password: await bcrypt.hash(password, 10)
    }
    users.push(user)
}

async function login(username, password) {

}

module.exports = {
    users,
    register,
    login
}


