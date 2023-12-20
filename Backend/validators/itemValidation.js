const { body } = require('express-validator');
const validateResult = require('../helpers/validateHelper');

const validateCreate = [
    body('title', 'Ingrese un nombre válido')
        .exists()
        .notEmpty(),
    (req, res, next) => {
        validateResult(req,res,next);
    }
]

module.exports = {validateCreate};