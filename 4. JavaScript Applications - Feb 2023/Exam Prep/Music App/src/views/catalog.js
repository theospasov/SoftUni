import {html} from '../../node_modules/lit-html/lit-html.js'
import { getAllOffers } from '../data/offers.js'


const catalogTemplate = (music, userData) => html `
<section id="catalogPage">
    <h1>All Albums</h1>
    ${music.length > 0
    ? music.map(song => offerCard(song, userData)) 
    : html `    
    <!--No albums in catalog-->
    <p>No Albums in Catalog!</p>`
    }
</section>
`

export async function catalogPage(ctx) {
    const music = await getAllOffers()
    const userData = localStorage.getItem('userData')
    ctx.render(catalogTemplate(music,userData))
}



const offerCard = (song, userData) => html `
<div class="card-box">
    <img src="${song.imgUrl}">
    <div>
        <div class="text-center">
            <p class="name">Name: ${song.name}</p>
            <p class="artist">Artist: ${song.artist}</p>
            <p class="genre">Genre: ${song.genre}</p>
            <p class="price">Price: ${song.price}</p>
            <p class="date">Release Date: ${song.releaseDate}</p>
        </div>
        ${userData
        ? html `
        <div class="btn-group">
        <a href="/data/albums/${song._id}" id="details">Details</a>
        </div>
        `
        : null
        }

    </div>
</div>
`