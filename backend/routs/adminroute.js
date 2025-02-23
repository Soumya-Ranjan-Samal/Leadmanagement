const {Admin} = require("../models/admin.js");
const express = require("express");
const adminroute = express.Router({mergeParams: true});
const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken');

SECRET_KEY = "ILoveYou3000";

adminroute.post("/signin",async (req,res)=>{
    console.log(req.body);
    const {email, password, adminpin}=req.body;
    const checkadmin = await Admin.findOne({email: email});
    console.log(checkadmin);
    if(!checkadmin){
        res.send({error: "No user found!"});
    }
    const matchPassword = await bcrypt.compare(password, checkadmin.password);
    const matchpin = await bcrypt.compare(adminpin, checkadmin.adminpin);
    if(!matchPassword){
        return res.send({error: 'Invalid password'});
    }
    if(!matchpin){
        return res.send({error: 'Invalid pin'})
    }
    const token = jwt.sign({
        id: checkadmin._id,
    },SECRET_KEY,{expiresIn:"7h"});
    console.log("user logged in");
    res.send({token,success:"login successfull as Admin"});
});


async function addadmin(email,password,adminpin){
    let strong_admin_pin = await bcrypt.hash(adminpin,7);
    let strong_password = await bcrypt.hash(password,12);
    let admin = Admin({
        email,
        password: strong_password,
        adminpin: strong_admin_pin,
    });
    let result = await admin.save();
    console.log(result);
}

// addadmin("Mark@gmail.com","1234","chan")

module.exports={
    adminroute,
}