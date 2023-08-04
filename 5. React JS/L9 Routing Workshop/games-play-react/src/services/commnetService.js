import * as requester from './requester'

const baseUrl = 'http://localhost:3030/jsonstore/comments'

export async function crate(data) {
    const result = await requester.post(baseUrl, data)
    const comments = Object.values(result)
    console.log(result)
    return result;
}