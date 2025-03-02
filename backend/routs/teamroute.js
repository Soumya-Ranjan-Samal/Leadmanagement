const {Team} = require("../models/team.js");
const User = require("../models/user.js");
const express =require("express");
const Projectroute = express.Router({mergeParams: true});
const {AuthorizationAdmin} = require("../utils/authorization.js");

Projectroute.post("/analyze_AI",AuthorizationAdmin,async (req,res,next)=>{
    form = req.body;
    let count = await form.selectedUsers.length;
    let exp=0;
    let pastpro=0;
    for(let i=0;i<count;i++){
        temp = await User.findOne({_id: form.selectedUsers[i]})
        exp+=temp.exp;
        pastpro+=temp.pastproject;
    } 

    exp = exp/count;
    pastpro = pastpro/count;
    let gift = {
        teamsize: count,
        complexity: parseInt(form.complexity),
        experience: exp,
        pastprojectcount: pastpro,
    }


    let result = await fetch("http://127.0.0.1:5000/predict",{
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(gift)
    });
    
    let data = await result.json();
    res.send({
        success: "Got the data",
        data,
    });
});

Projectroute.post("/add",AuthorizationAdmin,async (req,res,next)=>{
    try{
        const project = req.body;
        // AI analysis
        let team = Team({
            name: project.name,
            description: project.description,
            teamlead: project.selectedUsers[0],
            team: project.selectedUsers.slice(1,project.selectedUsers.lenght),
            complexity: parseInt(project.complexity),
            status: project.status,
            perc: project.perc,
            link: project.link,
            feasibility: 1,
            Time: 28,
        });
        const result = team.save();
        for(let i=0;i<team.team.length;i++){
            await User.updateOne({_id: team.team[i]},{working: 1});
        }
        await User.updateOne({_id: team.teamlead},{working: 1});
        res.send({
            success: "new team created",
        });
    }catch(e){
        res.send({error: "server side error"});
    }
});

Projectroute.post("/update/:id",AuthorizationAdmin,async (req,res)=>{
    try{
        let {status} = req.body;
        let id = req.params.id
        let result = await Team.findOneAndUpdate({_id: id},{status: status});
        console.log(result);
        if(status == "Complete"){
            for(let i = 0; i< result.team.lenght; i++){
                await User.updateOne({_id: result.team[i]},{working: 0});
            }
            await User.updateOne({_id: result.teamlead},{working: 0});
        }
        res.send({
            success: "Status Updated",
        });
    }catch(e){
        console.log(e)
        res.send({
            error: "Some error occured!",
        });
    }
});

Projectroute.get("/teams", AuthorizationAdmin,async (req,res)=>{
    let data = await Team.find({status: {$ne: "Complete"}}).populate("team").populate("teamlead")
    let leaders = []
    for(let i=0;i<data.length;i++){
        leaders.push(await User.findOne({_id: data[i].teamlead}));
    }
    res.send({data,leaders});
});


module.exports={
    Projectroute,
}