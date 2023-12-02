import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/jsonstore/comments'

export const getAll = async(productId) => {
    const query = new URLSearchParams({
        where: `gameId="${productId}"`
    })
    const result = await request.get(`${baseUrl}?${query}`)
    //TODO Fix with migration collection 
    return Object.values(result)
}

export const add = async ( productId, username, text) => {
    const newComment = await request.post(baseUrl, {
        productId,
        username,
        text
    })

    return newComment
}