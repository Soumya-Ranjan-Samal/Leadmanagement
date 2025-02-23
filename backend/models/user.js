const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    exp: {
        type: Number,
        default: 0
    },
    pastproject: {
        type: Number,
        default: 0
    },
    working: {
        type: Number,
        default: 0
    }
});

const User = mongoose.model('User',userSchema);

module.exports = User;