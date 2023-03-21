let dataForm = document.querySelector('form#register')

let baseURL = `http://localhost:3030/users/register`

dataForm.addEventListener('submit', (e) => {
    e.preventDefault()

    let formData = new FormData(e.currentTarget)

    let email = formData.get('email')
    let password = formData.get('password')
    let rePassword = formData.get('rePass')

    try{
    // Check if the data is correct
    if(email == '') {
        throw new Error('Add email')
    }
    if(password == '' || rePassword == '') {
        throw new Error('Add Password')
    }
    if(password != rePassword) {
        throw new Error('Passwords must match')
    }
    
    fetch(baseURL, {
        method: 'POST',
        headers: { 'content-type': 'application/json'},
        body: JSON.stringify({
            email,
            password,
            rePassword
        })
    })
    .then(res => res.json())
    .then(res => {
        localStorage.setItem('email', res.email)
        localStorage.setItem('password', res.password)
        localStorage.setItem('accessToken', res.accessToken)
        localStorage.setItem('id', res._id)

        window.location = './index.html'
    })
    .catch(err => console.log(err))

    } catch(error) {
        document.querySelector('form').reset()
        alert(error.message)
    }

})