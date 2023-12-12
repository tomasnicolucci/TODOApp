require('dotenv').config();
const { ObjectId } = require('mongodb');
const conn = require('../dbConnection/connection');
const DATABASE = 'TODOApp';
const ITEMS = 'items';

async function getTodoItems(){
    const connection = await conn.getConnection();
    const items = await connection
                        .db(DATABASE)
                        .collection(ITEMS)
                        .find()
                        .toArray();
    return items;
}

async function getItem(id){
    const connection = await conn.getConnection();
    const item = await connection
                        .db(DATABASE)
                        .collection(ITEMS)
                        .findOne({_id: new ObjectId(id)});
    return item;
}

async function addTodoItem(item){
    const connection = await conn.getConnection();
    const result = await connection
                        .db(DATABASE)
                        .collection(ITEMS)
                        .insertOne(item);
    return result;
}

async function deleteTodoItem(item){
    const connection = await conn.getConnection();
    const result = await connection
                        .db(DATABASE)
                        .collection(ITEMS)
                        .deleteOne(item);
    return result;
}

async function putTodoItem(id, item){
    const connection = await conn.getConnection();
    const result = await connection
                        .db(DATABASE)
                        .collection(ITEMS)
                        .updateOne({_id: new ObjectId(id)}, {$set: {title: item.title}})
    return result;
}

async function markCompleted(id, state){
    const connection = await conn.getConnection();
    const result = await connection
                        .db(DATABASE)
                        .collection(ITEMS)
                        .updateOne({_id: new ObjectId(id)}, {$set: {completed: state}})
    return result;
}

module.exports = {getTodoItems, getItem, addTodoItem, deleteTodoItem, putTodoItem, markCompleted};