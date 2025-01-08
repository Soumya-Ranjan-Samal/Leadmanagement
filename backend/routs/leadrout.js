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

Leadrouter.get("/new",(req,res,next)=>{
    res.render("index.ejs");
});

// router.post("/save",wrapAsync(async (req,res,next)=>{
// }));

module.exports = {Leadrouter};