const express = require('express');
const router = express.Router();
const controller = require('../controllers/users');

router.get('/', async(req,res) => {
    res.json(await controller.getUsers());
})

router.get('/:id', async(req,res) => {
    res.json(await controller.getUser(req.params.id));
})

router.post('/', async(req,res) => {
    res.json(await controller.addUser(req.body));
})

router.delete('/:id', async(req,res) => {
    res.json(await controller.deleteUser(req.params.id));
})

router.put('/:id', async(req,res) => {
    res.json(await controller.putUser(req.params.id, req.body));
})

module.exports = router;