import {render, html} from './node_modules/lit-html/lit-html.js'
import {contacts} from './contacts.js'


const contactTemplate = (user) => html `
  <div class="contact card">
            <div>
                <i class="far fa-user-circle gravatar"></i>
            </div>
            <div class="info">
                <h2>Name: ${user.name}</h2>
                <button class="detailsBtn">Details</button>
                <div class="details" id="${user.id}">
                    <p>Phone number: ${user.phoneNumber}</p>
                    <p>Email: ${user.email}</p>
                </div>
            </div>
        </div>
`
const root = document.querySelector('#contacts')


render(contacts.map(x => contactTemplate(x)),root) // render all contacts

root.addEventListener('click', (e) => {
    if(e.target.classList.contains('detailsBtn')) {

        //Check if we clicked on the details button
        const info = e.target.parentElement.getElementsByClassName('details')[0]
        //console.log(info); // <div class="details" id="2">...</div>

        //Toggle hidden details on and off
        if(info.style.display == 'block') {
            info.style.display = 'none'
        } else {
            info.style.display = 'block'
        }
    }
})

