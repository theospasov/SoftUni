import {html} from '../../node_modules/lit-html/lit-html.js'
import {getAllMyBooks} from '../data/offers.js'


const homeTemplate = (myBooks) => html `
<section id="my-books-page" class="my-books">
    <h1>My Books</h1>
    ${myBooks.length > 0
    ? html `
        <!-- Display ul: with list-items for every user's books (if any) -->
        <ul class="my-books-list">
        ${myBooks.map(myBookCard)}
        </ul>`
    : html `    
    <!-- Display paragraph: If the user doesn't have his own books  -->
    <p class="no-books">No books in database!</p>`
    }
</section>
`

export async function homePage(ctx) {
    const userData =  localStorage.getItem('userData')
    const userObject = JSON.parse(userData)
    const userId = userObject._id
    const myBooks = await getAllMyBooks(userId)
    
    ctx.render(homeTemplate(myBooks))
}

const myBookCard = (myBooks) => html `
<li class="otherBooks">
    <h3>${myBooks.title}</h3>
    <p>Type: ${myBooks.type}</p>
    <p class="img"><img src=${myBooks.imageUrl}></p>
    <a class="button" href="/${myBooks._id}">Details</a>
</li>
`