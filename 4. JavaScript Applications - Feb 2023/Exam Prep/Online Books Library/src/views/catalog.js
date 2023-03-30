import {html} from '../../node_modules/lit-html/lit-html.js'
import { getAllOffers } from '../data/offers.js'


const catalogTemplate = (offers) => html `
<!-- Dashboard Page ( for Guests and Users ) -->
<section id="dashboard-page" class="dashboard">
      <h1>Dashboard</h1>
      ${offers.length > 0
      ? html `
      <ul class="other-books-list">
      ${offers.map(offerCard)}
      </ul>`
      : html`
      <p class="no-books">No books in database!</p>
      `
      }
      </section>
  `


export async function catalogPage(ctx) {
    const offers = await getAllOffers()
    ctx.render(catalogTemplate(offers))
}

const offerCard = (offer) => html `
<li class="otherBooks">
    <h3>${offer.title}</h3>
    <p>Type: ${offer.type}</p>
    <p class="img"><img src=${offer.imageUrl}></p>
    <a class="button" href="/${offer._id}">Details</a>
</li>
`