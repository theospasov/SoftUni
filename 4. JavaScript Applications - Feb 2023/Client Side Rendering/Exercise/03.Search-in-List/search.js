import {html, render} from './node_modules/lit-html/lit-html.js'
import {towns} from './towns.js'

// Render Towns
const townsListTemplate = (towns) => html `
<ul>
   ${towns.map(x => html`<li>${x}</li>`)}
</ul>
`
render(townsListTemplate(towns), document.querySelector('#towns'))


// Search button functionality
document.querySelector('button').addEventListener('click', search)

function search() {
   let counter = 0
   const searchInput = document.querySelector('#searchText')
   const townElements = document.querySelector('#towns ul').children
   
   for (const townEl of townElements) {
     
      if(townEl.textContent.includes(searchInput.value) ) {
         townEl.className = 'active'
         counter++
      }
   }
   document.querySelector('#result').textContent = `${counter} matches found`
}
