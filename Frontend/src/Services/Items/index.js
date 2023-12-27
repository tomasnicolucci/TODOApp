export const getItems = () => {
    return fetch('http://localhost:3002/items')
    .then(response => {
        return response.json();
    })
    .then(data => {
        return data;
    })
    .catch(error => {
        console.log(error);
    });
};

export const postItem = (req) => {
    return fetch('http://localhost:3002/items', req)
    .then(response => {
        return response.json();
    })
    .catch(error =>  {
        console.log(error);
    })
}

export const deleteItem = (id, req) => {
    return fetch('http://localhost:3002/items/' + id, req)
    .then(response => {
        return response.json();
    })
    .catch(error =>  {
        console.log(error);
    })
}

export const putItem = (id, req) => {
    return fetch('http://localhost:3002/items/' + id, req)
    .then(response => {
        return response.json();
    })
    .catch(error =>  {
        console.log(error);
    })
}