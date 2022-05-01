//VALIDATION
const Joi = require('@hapi/joi');

const loginValidation = data=>{
    const schema = {
        userEmail: Joi.string().min(6).required().email(),
        userPassword: Joi.string().min(6).required()
    };
    return schema.validate(data);
};

module.exports = loginValidation;