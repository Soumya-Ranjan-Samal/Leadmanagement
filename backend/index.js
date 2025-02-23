const express = require("express");
const path = require("path");
const {Leadrouter} = require("./routs/leadrout.js");
const {Userrouter} = require("./routs/userrout.js");
const {Projectroute} = require("./routs/teamroute.js");
const {Adminroute, adminroute} = require("./routs/adminroute.js");
const cors = require("cors");
const SECRET_KEY = "ILoveYou3000";
const jwt = require("jsonwebtoken");


const app = express();
const port = 8080;

app.set("view engine","ejs");
app.set("/views",path.join(__dirname,"/views"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.get("/islogin",(req,res)=>{
    const data = req.headers.authorization;
    if(!data){
        console.log("1")
        res.send({error: "doLogin"});
    }
    const token = data.split(" ")[1];
    try{
        const result = jwt.verify(token,SECRET_KEY);
        res.send({success: "login"})
    }
    catch(err){
        res.send({error: "doLogin"});
    }
})

app.use("/leads",Leadrouter);
app.use("/user",Userrouter);
app.use("/project",Projectroute);
app.use("/admin",adminroute);

app.use("/",(req,res)=>{
    res.send("root");
});

app.listen(port,()=>{
    console.log("server started listening...");
});