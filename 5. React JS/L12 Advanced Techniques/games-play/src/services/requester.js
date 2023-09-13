const requester = async (method, token, url, data) => {
    const options = {};


    
    if (method !== 'GET') {
        options.method = method;

        if (data) {
            options.headers = {
                'content-type': 'application/json',
            };

            options.body = JSON.stringify(data);
        }
    }

    if(token) {
        options.headers = {
            ...options.headers,
            'X-Authorization': token
        }
    }

    const response = await fetch(url, options);

    if (!response.ok) {
        const result = await response.json();
        throw result
    }

    try {
        const result = await response.json();


        return result;
    } catch (error) {
        return {};
    }
};
 

export const requestFactory = (token) => {
    if (!token) {
        const serializedAuth = localStorage.getItem('auth')

        if (serializedAuth) {
            const auth = JSON.parse(serializedAuth)
            token = auth.accessToken
        }
    }
    return {
        post : requester.bind(null, 'POST', token),
        get : requester.bind(null, 'GET', token),
        put : requester.bind(null, 'PUT', token),
        patch : requester.bind(null, 'PATCH', token),
        delete : requester.bind(null, 'DELETE', token)
    }
}

export const request = requestFactory(localStorage.getItem('auth'))