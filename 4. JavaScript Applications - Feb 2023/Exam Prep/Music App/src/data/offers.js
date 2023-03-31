import { get, post, del, put } from "./api.js";

const endpoints = {
    catalog: '/data/offers?sortBy=_createdOn%20desc',
    byId : '/data/offers/'
}

export async function getAllOffers() {
    return get(`/data/albums?sortBy=_createdOn%20desc&distinct=name`)
}

export async function getById(id){
    return get(`/data/albums/${id}`)
}

export async function createOffer(data){
    return post('/data/albums', data)
}

export async function updateOffer(id, data){
    return put(`/data/albums/${id}`, data)
}

export async function deleteOffer(id){
    return del(`/data/albums/${id}`)
}