import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/jsonstore/products'

export async function getAll() {
    const result = await request.get( baseUrl )

    return Object.values(result)
}

export async function getOne(productId) {
    const result = await request.get(`${baseUrl}/${productId}`)
    
    return result
}

export async function add(productData) {
    const result = await request.post(baseUrl, productData)
    
    return result;
}



// Version without request
// export async function add(productData) {

    // const response = await fetch(`${baseUrl}`, {
    //     method: 'POST',
    //     headers: {
    //         'content-type': 'application/json'
    //     },
    //     body: JSON.stringify(productData)
    // })

    // const result = await response.json()
    // return result;
// }