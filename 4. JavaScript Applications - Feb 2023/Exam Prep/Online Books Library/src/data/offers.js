import { get, post, del, put } from "./api.js";

const endpoints = {
    dashboard: '/data/books?sortBy=_createdOn%20desc',
    byId : '/data/books',
    byId2 : '/data/books/',
    myBooks: '/data/books?where=_ownerId%3D%22'
}

export async function getAllMyBooks(id){
    return get(endpoints.myBooks + id + `%22&sortBy=_createdOn%20desc`)
}

export async function getAllOffers() {
    return get(endpoints.dashboard)
}

export async function getById(id){
    return get(endpoints.byId2 + id)
}

export async function createOffer(data){
    return post(endpoints.byId, data)
}

export async function updateOffer(id, data){
    return put(endpoints.byId2 + id, data)
}

export async function deleteOffer(id){
    return del(endpoints.byId2 + id)
}