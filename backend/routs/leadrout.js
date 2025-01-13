const express = require("express");
const {Lead} = require("../models/lead.js");
const wrapAsync = require("../utils/wrapAsync.js");

const Leadrouter = express.Router({mergeParams: true});

Leadrouter.get("/",wrapAsync(async (req,res,next)=>{
    const data = await Lead.find({});
    if(!data){
        res.send("some thing went wrong");
    }
    res.send(data);
}));

Leadrouter.post("/new/add",wrapAsync(async (req,res,next)=>{
    let user = Lead(req.body);
    let result = await user.save();
    res.send(result);
}));

Leadrouter.patch("/update/:id",wrapAsync(async (req,res)=>{
    let result = await Lead.findOneAndUpdate({_id: req.params.id},req.body);
    res.send(result);
}));

Leadrouter.delete("/delete/:id",wrapAsync(async (req,res)=>{
    let result = await Lead.findOneAndDelete({_id: req.params.id});
    res.send(result);
}));

Leadrouter.delete("/deleteMany",wrapAsync(async (req,res)=>{
    // let result = await Lead.deleteMany({ _id: req.body.list});
    console.log(req.body.list);
    res.send("got it");
}));

module.exports = {Leadrouter};