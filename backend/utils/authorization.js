const jwt = require('jsonwebtoken');
const SECRET_KEY = "ILoveYou3000";

module.exports = function Authorization(req,res,next){
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