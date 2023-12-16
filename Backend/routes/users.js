const express = require('express');
const router = express.Router();
const controller = require('../controllers/users');
//const validateCreate = require('../validators/usersValidation');
const {body, validationResult} = require('express-validator');

router.get('/', async(req,res) => {
    res.json(await controller.getUsers());
})

router.get('/:id', async(req,res) => {
    res.json(await controller.getUser(req.params.id));
})

router.post('/', [
    body('name', 'Ingrese un nombre')
        .exists()
        .notEmpty(),
    body('email', 'Ingrese un email')
        .exists()
        .isEmail()
], async(req,res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.json({ errors: errors.array()});
    }else{
        res.json(await controller.addUser(req.body));
    }
      
    
})

router.delete('/:id', async(req,res) => {
    res.json(await controller.deleteUser(req.params.id));
})

router.put('/:id', async(req,res) => {
    res.json(await controller.putUser(req.params.id, req.body));
})

router.post('/login', async(req,res) => {
    try{
        const user = await controller.findByCredential(req.body.email, req.body.password);
        const token = controller.generatedToken(user);
        res.send({user, token});
    } catch(error) {
        res.status(401).send(error.message);
    }
})

module.exports = router;