const express = require("express");
const {Lead} = require("../models/lead.js");
const wrapAsync = require("../utils/wrapAsync.js");
const leadValidate = require("../validate/leadvalidate.js");
const {Authorization} = require("../utils/authorization.js");

async function validate(req,res,next){
    try {
        const value = await leadValidate.validateAsync({body: req.body});
        next();
    }
    catch (err) {
        
        const msg = err.details;
        console.log(msg);
        res.status(400).send({error: msg});
     }
}

const Leadrouter = express.Router({mergeParams: true});

Leadrouter.get("/", Authorization,wrapAsync(async (req,res,next)=>{
    const data = await Lead.find({});
    if(!data){
        res.send("some thing went wrong");
    }
    res.send(data);
}));

Leadrouter.get('/followup', Authorization,wrapAsync(async (req,res,next)=>{
    const data = await Lead.find({status: "follow up"});
    if(!data){
        res.send({error: 'something went wrong!'});
    }
    res.send(data);
}));

Leadrouter.get('/important', Authorization,wrapAsync(async (req,res,next)=>{
    const data = await Lead.find({important: true});
    if(!data){
        res.send({error: 'something went wrong!'});
    }
    res.send(data);
}));

Leadrouter.get('/confirm', Authorization,wrapAsync(async (req,res,next)=>{
    const data = await Lead.find({status: "confirm"});
    if(!data){
        res.send({error: 'something went wrong!'});
    }
    res.send(data);
}));

Leadrouter.post("/new/add", Authorization,validate,wrapAsync(async (req,res,next)=>{
    let user = Lead(req.body);
    let result = await user.save();
    res.send({ok: "success"});
}));

Leadrouter.patch("/update/:id", Authorization,validate,wrapAsync(async (req,res)=>{
    if(!req.params.id){
        res.status(400).send({error: "No id found to be modiffied."});
    }
    let result = await Lead.findOneAndUpdate({_id: req.params.id},req.body);
    res.send(result);
}));

Leadrouter.delete("/delete/:id", Authorization,wrapAsync(async (req,res)=>{
    if(!req.params.id){
        res.status(400).send({error: "No id found to be deleted."});
    }
    let result = await Lead.findOneAndDelete({_id: req.params.id});
    res.send(result);
}));

Leadrouter.get("/onboard", Authorization,wrapAsync(async (req,res)=>{
    let result = await Lead.aggregate([{$group : {_id : ""}}])
    res.send(result);
}));

Leadrouter.get("/count", Authorization,wrapAsync(async (req,res)=>{
    try{
        const data=[{
            status: "Pending",
            count: 0
        },{
            status: "Follow up",
            count: 0
        },{
            status: "Interested",
            count: 0
        },{
            status: "Confirm",
            count: 0
        }];
    const leads = await Lead.find({})
    for(let i =0 ; i<leads.length;i++){
        if(leads[i].status=="pending")
            data[0].count++;
        else if(leads[i].status=="follow up")
            data[1].count++;
        else if(leads[i].status=="interested")
            data[2].count++;
        else if(leads[i].status=="confirm")
            data[3].count++;
    }
    res.send(data);
    }catch(error){
        res.send({error: "Something Went Wrong, try leter."});
    }
}));

// < multiple delete route >

// Leadrouter.delete("/deleteMany",wrapAsync(async (req,res)=>{
//      let result = await Lead.deleteMany({ _id: req.body.list});
//     console.log(req.body.list);
//     res.send("got it");
// }));

module.exports = {Leadrouter};