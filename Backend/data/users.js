require('dotenv').config();
const { ObjectId } = require('mongodb');
const conn = require('../dbConnection/connection');
const DATABASE = 'TODOApp';
const USERS = 'users';

async function getUsers(){
    const connection = await conn.getConnection();
    const users = await connection
                        .db(DATABASE)
                        .collection(USERS)
                        .find()
                        .toArray();
    return users;
}

async function getUser(id){
    const connection = await conn.getConnection();
    const user = await connection
                        .db(DATABASE)
                        .collection(USERS)
                        .findOne({_id: new ObjectId(id)});
    return user;                   
}

async function addUser(user){
    const connection = await conn.getConnection();
    const result = await connection
                        .db(DATABASE)
                        .collection(USERS)
                        .intsertOne(user);
    return result;                    
}

async function deleteUser(user){
    const connection = await conn.getConnection();
    const result = await connection
                        .db(DATABASE)
                        .collection(USERS)
                        .deleteOne(user);
    return result;
}

async function putUser(id, user){
    const connection = await conn.getConnection();
    const result = await connection
                        .db(DATABASE)
                        .collection(USERS)
                        .updateOne({_id: new ObjectId(id)}, {$set: {}});
    return result;                    
}

module.exports = {getUsers, getUser, addUser, deleteUser, putUser};