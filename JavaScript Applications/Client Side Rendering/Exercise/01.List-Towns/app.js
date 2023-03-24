import{render, html} from './node_modules/lit-html/lit-html.js'

const inputField = document.getElementById('towns')
const loadButton = document.getElementById('btnLoadTowns')
const root = document.getElementById('root')

loadButton.addEventListener('click', loadTowns)

function loadTowns(e) {
    e.preventDefault()
    const inputFieldValue = inputField.value.split(', ')
    render(townTemplate(inputFieldValue), root)
}


let townTemplate = (inputFieldValue) => html `
    <ul>
        ${inputFieldValue.map(x => html`<li>${x}</li>`)}
    </ul>
`



