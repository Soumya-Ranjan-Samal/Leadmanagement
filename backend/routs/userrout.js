const express = require('express');
const wrapAsync = require("../utils/wrapAsync.js")
const User = require("../models/user.js");
const {userSignInValidate,userSignUpValidate} = require("../validate/uservalidate.js")
const Userrouter = express.Router({mergeParams: true});
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

const SECRET_KEY = "ILoveYou3000";


async function signInValidate(req,res,next){
    try {
        const value = await userSignInValidate.validateAsync({body: req.body});
        next();
    }
    catch (err) {
        const msg = err.details;
        console.log(msg);
        res.status(400).send({error: msg});
     }
}

async function signUpValidate(req,res,next){
    try {
        const value = await userSignUpValidate.validateAsync({body: req.body});
        next();
    }
    catch (err) {
        const msg = err.details;
        console.log(msg);
        res.status(400).send({error: msg});
     }
}

Userrouter.post("/signup", signUpValidate,wrapAsync(async (req,res,next)=>{
    console.log("signup");
    const {username, email, password}=req.body;
    const checkemailduplicate = await User.findOne({email: email});
    if(checkemailduplicate){
        return res.send({error: "email is already registered"});
    }
    const strongpassword = await bcrypt.hash(password,12);
    const user = User({
        username,
        email,
        password: strongpassword
    });
    const result = await user.save();
    if(!result){
        res.status(500).send({error: 'Sign up failed'})
    }
    console.log("user sign up successful");
    res.status(200).send({success: "Sign up successfull"});
}));


Userrouter.post("/signin", signInValidate,wrapAsync(async (req,res,next)=>{
    console.log(req.body);
    const {email, password}=req.body;
    const checkuser = await User.findOne({email: email});
    if(!checkuser){
        res.send({error: "No user found!"});
    }
    const matchPassword = await bcrypt.compare(password, checkuser.password);
    if(!matchPassword){
        res.send({error: 'Invalid password'});
    }
    const token = jwt.sign({
        id: checkuser._id,
    },SECRET_KEY,{expiresIn:"7h"});
    console.log("user logged in");
    res.send({token,success:"login successfull"});
}));

module.exports={Userrouter};