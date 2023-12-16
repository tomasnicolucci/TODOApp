const { check } = require('express-validator');
const validateResult = require('../helpers/validateHelper');

const validateCreate = [
    check('name')
        .exists()
        .notEmpty(),
    check('email')
        .exists()
        .isEmail(),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = {validateCreate};