const express = require("express");
const path = require("path");
const {Leadrouter} = require("./routs/leadrout.js");
const cors = require("cors");

const app = express();
const port = 8080;

app.set("view engine","ejs");
app.set("/views",path.join(__dirname,"/views"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.use("/leads",Leadrouter);

app.use("/",(req,res)=>{
    res.send("root");
});

app.listen(port,()=>{
    console.log("server started listening...");
});