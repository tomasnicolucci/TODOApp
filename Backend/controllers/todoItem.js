const data = require('../data/todoItem');

async function getTodoItems(){
    return data.getTodoItems();
}

async function getItem(id){
    return data.getItem(id);
}

async function addTodoItem(item){
    return data.addTodoItem(item);
}

async function deleteTodoItem(id){
    let item = await getItem(id);
    if(item != undefined){
        return data.deleteTodoItem(item);
    }else{
        console.log("Item no encontrado");
    }
}

async function putTodoItem(id, item){
    return data.putTodoItem(id, item);
}

async function markCompleted(id){
    const item = await getItem(id);
    let state = item.completed;
    if(!state){
        state = true;
    }else{
        state = false;
    }
    return data.markCompleted(id, state)
}

module.exports = {getTodoItems, getItem, addTodoItem, deleteTodoItem, putTodoItem, markCompleted};