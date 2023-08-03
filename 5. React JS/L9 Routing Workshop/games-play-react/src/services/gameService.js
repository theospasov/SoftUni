import * as requester from "./requester"

const baseUrl = 'http://localhost:3030/jsonstore/games'

export async function getAll() {
    const result = await requester.get(baseUrl)
    const games = Object.values(result)
    
    return games 
}

export async function create(gameData) {
    const result = await requester.post(baseUrl, gameData)
    //console.log(result)
    return result
}

export async function getOne(gameId) {
    const result = await requester.get(`${baseUrl}/${gameId}`)
    // console.log(result);
    return result
}