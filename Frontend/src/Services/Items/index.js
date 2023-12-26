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