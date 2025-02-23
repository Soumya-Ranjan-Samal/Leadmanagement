const mongoose = require("mongoose");

const teamSchema = mongoose.Schema({
    name: String,
    description: String,
    teamlead: mongoose.Types.ObjectId,
    team: [{
        type: mongoose.Types.ObjectId,
        ref: "User"
    }],
    complexity: Number,
    status: {
        type: String,
        enum:["Not started","Ongoing","Complete"],
    },
    perc: {
        type: Number,
        min:2,
        max:100
    },
    link: String,
    feasibility: Number,
    Time: Number,
});

const Team = mongoose.model("Team",teamSchema);

module.exports={
    Team,
}