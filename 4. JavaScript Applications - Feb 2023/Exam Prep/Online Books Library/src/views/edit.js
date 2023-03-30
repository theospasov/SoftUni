import {html} from '../../node_modules/lit-html/lit-html.js'
import { getById, updateOffer } from '../data/offers.js'
import { createSubmitHandler } from '../util.js'


const editTemplate = (offer, onEdit) => html`
<section id="edit-page" class="edit">
    <form id="edit-form" action="#" method="" @submit=${onEdit}>
        <fieldset>
            <legend>Edit my Book</legend>
            <p class="field">
                <label for="title">Title</label>
                <span class="input">
                    <input type="text" name="title" id="title" .value=${offer.title}>
                </span>
            </p>
            <p class="field">
                <label for="description">Description</label>
                <span class="input">
                    <textarea name="description"
                        id="description">${offer.description}</textarea>
                </span>
            </p>
            <p class="field">
                <label for="image">Image</label>
                <span class="input">
                    <input type="text" name="imageUrl" id="image" .value=${offer.imageUrl}>
                </span>
            </p>
            <p class="field">
                <label for="type">Type</label>
                <span class="input">
                    <select id="type" name="type" .value=${offer.type}>
                        <option value="Fiction" selected>Fiction</option>
                        <option value="Romance">Romance</option>
                        <option value="Mistery">Mistery</option>
                        <option value="Classic">Clasic</option>
                        <option value="Other">Other</option>
                    </select>
                </span>
            </p>
            <input class="button submit" type="submit" value="Save">
        </fieldset>
    </form>
</section>
`

export async function editPage(ctx){

    const id = ctx.params.id

    const offer = await getById(id)
    ctx.render(editTemplate(offer, createSubmitHandler(onEdit)))

    async function onEdit({
        title,
        description,
        imageUrl,
        type
      }){

        // Check if any of the fields are empty. If so, throw and error
        if([title, imageUrl, description, type].some(field => field == '')){
            return alert('All fields are required')
        }

        await updateOffer(id ,{
            title,
            description,
            imageUrl,
            type
          })

        ctx.page.redirect(`/${id}`)
        
    }
}