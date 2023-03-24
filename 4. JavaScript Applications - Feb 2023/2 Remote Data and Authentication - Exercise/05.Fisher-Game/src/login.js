document.getElementById('user').style.display = 'none'

const loginForm = document.querySelector('form#login')

loginForm.addEventListener('submit', logIn)

function logIn(e) {
    e.preventDefault()

    const formData = new FormData(e.currentTarget)
    
    const email = formData.get('email')
    const password = formData.get('password')

    try {
        if(email == '' || password == '') {
            throw new Error('Fill the empty fields')
        }

        fetch(`http://localhost:3030/users/login`, {
            method: 'POST',
            headers: { 'content-type': 'application/json'},
            body: JSON.stringify({
                email,
                password
            })
        })
        .then(res => {
            if (res.status != '200') {
                throw new Error('invalid credentials')
            }
            return res.json()
        })
        .then(res => {

            console.log(res);

            localStorage.setItem('email', res.email)
            localStorage.setItem('password', res.password)
            localStorage.setItem('id', res._id)
            localStorage.setItem('accessToken', res.accessToken)
        })
        .catch(err => console.log(err))
    } catch (error) {
        loginForm.reset()
        alert(error.message)
    }


}



// .then(res => { res.json()
//     if(!res.ok) {
//         throw new Error('not ok')
//     }
// })

//2:08