const request = async (method, token, url, data) => {
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
    return {
        post : request.bind(null, 'POST', token),
        get : request.bind(null, 'GET', token),
        put : request.bind(null, 'PUT', token),
        patch : request.bind(null, 'PATCH', token),
        delete : request.bind(null, 'DELETE', token)
    }
}