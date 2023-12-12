const express = require('express');
const router = express.Router();
const controller = require('../controllers/todoItem');

router.get('/', async(req,res) => {
    res.json(await controller.getTodoItems());
})

router.get('/:id', async(req,res) => {
    res.json(await controller.getItem(req.params.id));
})

router.post('/', async(req,res) => {
    const result = await controller.addTodoItem(req.body);
    res.json(result);
})

router.delete('/:id', async(req,res) => {
    res.json(await controller.deleteTodoItem(req.params.id));
})

router.put('/:id', async(req,res) => {
    res.json(await controller.putTodoItem(req.params.id, req.body));
})

router.post('/:id', async(req,res) => {
    res.json(await controller.markCompleted(req.params.id));
})

module.exports = router;