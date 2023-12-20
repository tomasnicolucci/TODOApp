const express = require('express');
const router = express.Router();
const controller = require('../controllers/todoItem');
const {validateCreate} = require('../validators/itemValidation');

router.get('/', async(req,res) => {
    res.json(await controller.getTodoItems());
})

router.get('/:id', async(req,res) => {
    res.json(await controller.getItem(req.params.id));
})

router.post('/', validateCreate, async(req,res) => {
    try{
        res.json(await controller.addTodoItem(req.body));
    } catch(error){
        res.status(500).json({message: 'Route error'});
    }
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