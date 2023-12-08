import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/products'

export async function getAll() {
    const result = await request.get( baseUrl )

    return result
}

export async function getOne(productId) {
    const result = await request.get(`${baseUrl}/${productId}`)
    
    return result
}

export async function getAllUserCreated(userId) {
    try {
        const result = await request.get(`${baseUrl}?where=_ownerId%3D"${userId}"`)
        
        return result
    } catch (error) {
        console.log(error);
    }
}


export async function add(productData) {
    const result = await request.post(baseUrl, productData)
    
    return result;
}

export async function edit(productId, productData) {
    const result = await request.put(`${baseUrl}/${productId}`, productData)
    
    return result;
}

export async function remove(productId) {
    request.remove(`${baseUrl}/${productId}`)
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