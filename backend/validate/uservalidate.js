const Joi = require("joi");

const userSignUpValidate = Joi.object({
    body: Joi.object({
        username: Joi.string().max(30).required(),
        email: Joi.string().email().required(),
        password: Joi.string().required()
    }).required(),
});

const userSignInValidate = Joi.object({
    body: Joi.object({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    }).required(),
});

module.exports={
    userSignInValidate,
    userSignUpValidate
};