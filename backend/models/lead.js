const mongoose = require("mongoose");

async function connect(){
    await mongoose.connect("mongodb://localhost:27017/vanurtechMERN");
}

connect().then(()=>{
    console.log("Database connected...");
}).catch((err)=>{
    console.log(err);
});


const leadSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phoneno: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    businesstype: {
        type: String,
        required: true
    },
    offerbudget: {
        type: Number,
        default: -1
    },
    clienttype:{
        type: String,
        default: "unKnown"
    },
    referredby: {
        type: String,
        default: "none"
    },
    followupdate: {
        type: Date,
    },
    confirmdate: {
        type: Date,
    },
    important: {
        type: Boolean,
        enum: [true, false]
    },
    Desscription: {
        type: String,
    }
});

const Lead = mongoose.model("Lead",leadSchema);

module.exports =  {Lead};