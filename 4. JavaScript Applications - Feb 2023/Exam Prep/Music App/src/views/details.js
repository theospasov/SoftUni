import {html} from '../../node_modules/lit-html/lit-html.js'
import { deleteOffer, getAllOffers, getById } from '../data/offers.js'
import { getUserData } from '../util.js'


const detailsTemplate = (offer, onDelete) => html `
<section id="detailsPage">
    <div class="wrapper">
        <div class="albumCover">
            <img src="${offer.imgUrl}">
        </div>
        <div class="albumInfo">
            <div class="albumText">

                <h1>Name: ${offer.name}</h1>
                <h3>Artist: ${offer.artist}</h3>
                <h4>Genre: ${offer.genre}</h4>
                <h4>Price: ${offer.price}</h4>
                <h4>Date: ${offer.releaseDate}</h4>
                <p>Description: ${offer.description}</p>
            </div>
            ${offer.canEdit
            ? html `
            <div class="actionBtn">
                <a href="/details/edit/${offer._id}" class="edit">Edit</a>
                <a href="javascript:void(0)" class="remove" @click=${onDelete}>Delete</a>
            </div>
            `
            : null
            }
            <!-- Only for registered user and creator of the album-->
            
        </div>
    </div>
</section>
`

export async function detailsPage(ctx) {
    //we can get the ID from the params, since we added id parameter in page.js  /catalog/:id
    const id = ctx.params.id

    const offer = await getById(id)

    // For Edit / Delete functionality we need to check if the user's id is the same as the author's ID
    const userData = getUserData()

    if(userData && userData._id == offer._ownerId){
      offer.canEdit = true
    }

    ctx.render(detailsTemplate(offer, onDelete))

    async function onDelete(){
      const choice = confirm('Are you sure?')

      if(choice) {
        await deleteOffer(id)
        ctx.page.redirect('/catalog')
      }
    } 
}
