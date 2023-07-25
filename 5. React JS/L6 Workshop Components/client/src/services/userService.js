const baseUrl = 'http://localhost:3005/api/users';

export const getAll = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();

    return result.users;
};

export const getOne = async (userId) => {
    const response = await fetch(`${baseUrl}/${userId}`);
    const result = await response.json();

    return result.user;
};

export const create = async (userData) => {

    const { country, city, street, streetNumber, ...data} = userData
    // will get everything from userdata, will remove country, city, address, addressNumber and the rest will be added to a new Object called data
    data.address = {country, city, street, streetNumber}
    

    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    })

    const result = await response.json()
    return result.user
}

export const deleteUser = async (userId) => {
    const req = await fetch(`${baseUrl}/${userId}`, {
        method: 'DELETE'
    })
    const res = await req.json()
   // console.log(res);
    return res
}
/* 
Delete an existing user by sending a DELETE request to /users/{userId}. The service will respond with an object, containing userId of the deleted user.
*/