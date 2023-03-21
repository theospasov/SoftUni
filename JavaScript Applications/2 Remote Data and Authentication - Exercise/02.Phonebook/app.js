function attachEvents() {
    const loadBtn = document.getElementById('btnLoad')
    const createBtn = document.getElementById('btnCreate')
    const personInput = document.getElementById('person')
    const phoneInput = document.getElementById('phone')
    const phoneList = document.getElementById('phonebook')

    const baseURL = `http://localhost:3030/jsonstore/phonebook`

    loadBtn.addEventListener('click', loadContacts)
    createBtn.addEventListener('click', createContact)

    //LOAD BUTTON
    function loadContacts() {
        fetch(baseURL)
        .then(res => res.json())
        .then(res => {
            if(phoneList.textContent == '') {
                addElements()
            } else {
                phoneList.textContent = ''
                addElements()
            }

            function addElements() {
                Object.values(res).forEach(contact => {
                    let person = contact.person
                    let number = contact.phone

                    //Creating the new elements
                    let newLi = document.createElement('li')
                    let newBtn = document.createElement('button')
                    
                    newLi.textContent = `${person}: ${number}` 
                    newBtn.textContent = `Delete`
                    newBtn.setAttribute('id', contact._id)
                    newBtn.addEventListener('click', deleteContact)

                    newLi.append(newBtn)
                    phoneList.append(newLi)

                })
            }
        })
    }

    // DELETE BUTTON
    function deleteContact(ev) {

        removeDataFromServer()
        removeElementsFromDOM()

        function removeDataFromServer() {
            let idToDelete = ev.target.id
            fetch(`${baseURL}/${idToDelete}`, {
                method: 'DELETE'
            })
            .catch(err => console.log(err))
        }

        function removeElementsFromDOM() {
            ev.target.parentElement.remove()
        }

    }

    // CREATE BUTTON
    function createContact() {
        if(personInput.value != '' && phoneInput.value != ''){
        let data = {
            "person": `${personInput.value}`,
            "phone": `${phoneInput.value}`
        }

        fetch(baseURL, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .catch(err => console.log(err))
        personInput.value = ''
        phoneInput.value = ''

        loadContacts()
        }
    }
}

attachEvents();