export async function requester(method, url, data) {
    const options = {}

    if (method !== 'GET') {
        options.method = method

        if (data) {
            options.headers = {
                'content-type': 'application/json',
            }
            options.body = JSON.stringify(data)
        }
    }

    const response = await fetch(url, options)

    // this try-catch is added, because if we don't have data the server will return an error code instead of an empty object;
    try {
        const result = await response.json()
        return result
    } catch (error) {
        return {}
    }

}

export const get = requester.bind(null, 'GET')
export const post = requester.bind(null, 'POST')
export const put = requester.bind(null, 'PUT')
export const patch = requester.bind(null, 'PATCH')
export const del = requester.bind(null, 'DELETE')