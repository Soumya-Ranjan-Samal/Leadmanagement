const joi = require("joi");

const leadValidate = joi.object({
    body: joi.object({
        name: joi.string().max(30).required(),
        phoneNo: joi.string().pattern(/^[0-9]{10}$/).required(),
        offerBudget: joi.number()?.min(0),
        status: joi.string().valid('pending','follow up','interested','confirm'),
        address: joi.string().max(35).required(),
        businessType: joi.string().max(20).min(2).required(),
        clientType: joi.string().max(30),
        referredBy: joi.string().max(30),
        important: joi.boolean(),
    }).required().unknown(true),
});

module.exports=leadValidate;