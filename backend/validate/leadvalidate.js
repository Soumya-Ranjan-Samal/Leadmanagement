const joi = require("joi");

const leadValidate = joi.object({
    body: joi.object({
        name: joi.string().max(30).required(),
        phoneNo: joi.string().pattern(/^[0-9]{10}$/).required(),
        status: joi.string().valid('pending','follow up','interested','conform'),
        address: joi.string().max(35).required(),
        businessType: joi.string().max(20).min(2).required(),
        clientType: joi.string().max(30),
        referredBy: joi.string().max(30),
        followUpDate: joi.date().min('now'),
        confirmDate: joi.date().min('now'),
        important: joi.boolean(),
    }).required(),
});

module.exports=leadValidate;