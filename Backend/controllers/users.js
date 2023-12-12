const data = require('../data/users');

async function getUsers(){
    return data.getUsers();
}

async function getUser(id){
    return data.getUser(id);
}

async function addUser(user){
    return data.addUser(user);
}

async function deleteUser(id){
    let user = await getUser(id);
    if(user != undefined){
        return data.deleteUser(user);
    }else{
        console.log("Usuario no encontrado");
    }
}

async function putUser(id, user){
    return data.putUser(id, user);
}

module.exports = {getUsers, getUser, addUser, deleteUser, putUser};