const jwt = require('jsonwebtoken');
const SECRET_KEY = "ILoveYou3000";
const {Admin} = require("../models/admin.js")

function Authorization(req,res,next){
    const data = req.headers.authorization;
    if(!data){
        res.send({error: "doLogin"});
    }
    const token = data.split(" ")[1];
    try{
        const result = jwt.verify(token,SECRET_KEY);
        next();
    }
    catch(err){
        res.send({error: "doLogin"});
    }
}

const AuthorizationAdmin = async (req,res,next)=>{
    try{
        const data = req.headers.authorization;
        if(!data){
            res.send({error: "doLogin"});
        }
        const token = data.split(" ")[1];
        const result = jwt.verify(token,SECRET_KEY);
        const checkAdmin = await Admin.findOne({_id : result.id});
        if(!checkAdmin){
            return res.send({error: "Do login as Admin"})
        }
        next()
    }catch(e){
        res.send({error: "Do login as Admin"})
    }
}

module.exports={
    Authorization,
    AuthorizationAdmin
}