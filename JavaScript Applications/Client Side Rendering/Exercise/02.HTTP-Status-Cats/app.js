import {html, render} from './node_modules/lit-html/lit-html.js'
import {cats} from './catSeeder.js'

// console.log(cats[0]);

const root = document.querySelector('#allCats')

const catCodeTemplate = (cats) => html `
<ul>
    ${cats.map(cat =>  html `
    <li>
        <img
            src="./images/${cat.imageLocation}.jpg" 
            width="250" height="250" alt="Card image cap"
        />
        <div class="info">
            <button class="showBtn" @click=${toggleCode}>Show status code</button>
            <div class="status" style="display: none" id="100">
                <h4>Status Code: ${cat.statusCode}</h4>
                <p>${cat.statusMessage}</p>
            </div>
        </div>
    </li>` )} 
</ul>
`

render(catCodeTemplate(cats), root)

function toggleCode(e) {
    const btnStatus = e.target.parentElement.querySelector('.status')
    const btnShowHide = e.target.parentElement.querySelector('.showBtn')
    
    if(btnStatus.style.display == 'block') {
        btnShowHide.textContent = 'Show status code'
        btnStatus.style.display = 'none'
    } else {
        btnShowHide.textContent = 'Hide status code'
        btnStatus.style.display = 'block'
    }
}