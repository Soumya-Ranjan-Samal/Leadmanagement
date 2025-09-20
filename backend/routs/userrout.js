const express = require('express');
const wrapAsync = require("../utils/wrapAsync.js")
const User = require("../models/user.js");
const {userSignInValidate,userSignUpValidate} = require("../validate/uservalidate.js")
const Userrouter = express.Router({mergeParams: true});
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');
const {AuthorizationAdmin} = require("../utils/authorization.js");

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

Userrouter.post("/signup", AuthorizationAdmin, /*signUpValidate,*/wrapAsync(async (req,res,next)=>{
    console.log("signup");
    let {username, email, password, exp, pastprojects}=req.body;
    console.log(req.body)
    const checkemailduplicate = await User.findOne({email: email});
    if(checkemailduplicate){
        return res.send({error: "email is already registered"});
    }
    exp = parseInt(exp);
    pastprojects=parseInt(pastprojects);
    const strongpassword = await bcrypt.hash(password,12);
    const user = User({
        username,
        email,
        exp,
        pastproject: pastprojects,
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
    console.log(checkuser);
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


Userrouter.get("/", AuthorizationAdmin,async (req,res,next)=>{
    const result = await User.find();
    if(result){
        res.send(result);
    }else{
        res.send({
            error: "Something went wrong",
        });
    }
});

Userrouter.get("/avail", AuthorizationAdmin,async (req,res,next)=>{
    const result = await User.find({working: 0});
    if(result){
        res.send(result);
    }else{
        res.send({
            error: "Something went wrong",
        });
    }
})


Userrouter.post("/update/:id", AuthorizationAdmin,async (req,res)=>{
    try{
        let data = req.body;
        let id = req.params.id;
        let working = data.working=="1"? 1 : 0;
        let result = await User.findOneAndUpdate({_id: id},{username: data.username, email: data.email, exp: data.exp, pastproject: data.pastproject, working: working});
        res.send({
            success: "user updated successfuly",
        });
    }catch(e){
        res.send({
            error: "some error occured",
        });
    } 
});

Userrouter.post("/delete/:id", AuthorizationAdmin,async (req,res)=>{
    let result = await User.deleteOne({_id: req.params.id});
    if(result){
        res.send({
            success: "User deleted",
        });
    }else{
        res.send({
            error: "Some error occured",
        });
    }
});

module.exports={Userrouter};