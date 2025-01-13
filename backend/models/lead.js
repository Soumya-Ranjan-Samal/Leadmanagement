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
    phoneNo: {
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
    businessType: {
        type: String,
        required: true
    },
    offerBudget: {
        type: Number,
    },
    clientType:{
        type: String,
        default: "unKnown"
    },
    referredBy: {
        type: String,
        default: "none"
    },
    followUpDate: {
        type: Date,
    },
    confirmDate: {
        type: Date,
    },
    important: {
        type: Boolean,
        enum: [true, false]
    }
});

// const clients = [
//     { name: "Aarav Gupta", address: "123 Mumbai Street, Mumbai, Maharashtra", phoneNo: "9876543210", status: "follow up", businessType: "retail", clientType: "premium", important: true, offerBudget: 50000, referredBy: "Rajesh Nair", followUpDate: "2025-01-20", confirmDate: null},
//     { name: "Priya Singh", address: "456 Delhi Road, Delhi, Delhi", phoneNo: "8765432109", status: "pending", businessType: "manufacturing", clientType: "standard", important: false, offerBudget: 30000, referredBy: "Neha Verma", followUpDate: null, confirmDate: null },
//     { name: "Rohan Das", address: "789 Kolkata Avenue, Kolkata, West Bengal", phoneNo: "7654321098", status: "interested", businessType: "service", clientType: "premium", important: false, offerBudget: 45000, referredBy: "Vikram Patel", followUpDate: "2025-01-15", confirmDate: null  },
//     { name: "Simran Kaur", address: "101 Bangalore Boulevard, Bangalore, Karnataka", phoneNo: "6543210987", status: "interested", businessType: "technology", clientType: "premium", important: false, offerBudget: 55000, referredBy: "Sneha Rao", followUpDate: "2025-01-18", confirmDate: null  },
//     { name: "Vikram Patel", address: "202 Chennai Lane, Chennai, Tamil Nadu", phoneNo: "5432109876", status: "pending", businessType: "retail", clientType: "standard", important: false, offerBudget: 25000, referredBy: "Aditya Mehta", followUpDate: null, confirmDate: null  },
//     { name: "Aditya Mehta", address: "303 Ahmedabad Street, Ahmedabad, Gujarat", phoneNo: "4321098765", status: "pending", businessType: "retail", clientType: "standard", important: true, offerBudget: 40000, referredBy: "Priya Singh", followUpDate: null, confirmDate: null },
//     { name: "Neha Verma", address: "404 Jaipur Road, Jaipur, Rajasthan", phoneNo: "3210987654", status: "interested", businessType: "manufacturing", clientType: "premium", important: true, offerBudget: 50000, referredBy: "Rohan Das", followUpDate: "2025-01-12", confirmDate: null  },
//     { name: "Karan Sharma", address: "505 Lucknow Lane, Lucknow, Uttar Pradesh", phoneNo: "2109876543", status: "follow up", businessType: "service", clientType: "standard", important: false, offerBudget: 35000, referredBy: "Ananya Roy", followUpDate: "2025-01-22", confirmDate: null },
//     { name: "Ananya Roy", address: "606 Chandigarh Boulevard, Chandigarh, Punjab", phoneNo: "1098765432", status: "conform", businessType: "technology", clientType: "premium", important: true, offerBudget: 60000, referredBy: "Isha Kapoor", followUpDate: null, confirmDate: "2025-01-05"  },
//     { name: "Isha Kapoor", address: "707 Bhopal Avenue, Bhopal, Madhya Pradesh", phoneNo: "0198765421", status: "interested", businessType: "retail", clientType: "premium", important: false, offerBudget: 50000, referredBy: "Rajesh Nair", followUpDate: "2025-01-17", confirmDate: null  },
//     { name: "Rajesh Nair", address: "808 Trivandrum Street, Trivandrum, Kerala", phoneNo: "0987654321", status: "pending", businessType: "manufacturing", clientType: "standard", important: false, offerBudget: 30000, referredBy: "Sneha Rao", followUpDate: null, confirmDate: null  },
//     { name: "Sneha Rao", address: "909 Goa Road, Panaji, Goa", phoneNo: "9876501234", status: "follow up", businessType: "service", clientType: "premium", important: false, offerBudget: 45000, referredBy: "Rohan Das", followUpDate: "2025-01-21", confirmDate: null  },
//     { name: "Aditya Mehta", address: "303 Ahmedabad Street, Ahmedabad, Gujarat", phoneNo: "4321098765", status: "pending", businessType: "retail", clientType: "standard", important: false, offerBudget: 35000, referredBy: "Simran Kaur", followUpDate: null, confirmDate: null },
//     { name: "Neha Verma", address: "404 Jaipur Road, Jaipur, Rajasthan", phoneNo: "3210987654", status: "interested", businessType: "manufacturing", clientType: "premium", important: false, offerBudget: 50000, referredBy: "Vikram Patel", followUpDate: "2025-01-13", confirmDate: null  },
//     { name: "Karan Sharma", address: "505 Lucknow Lane, Lucknow, Uttar Pradesh", phoneNo: "2109876543", status: "follow up", businessType: "service", clientType: "standard", important: true, offerBudget: 40000, referredBy: "Ananya Roy", followUpDate: "2025-01-19", confirmDate: null },
//     { name: "Ananya Roy", address: "606 Chandigarh Boulevard, Chandigarh, Punjab", phoneNo: "1098765432", status: "conform", businessType: "technology", clientType: "premium", important: false, offerBudget: 55000, referredBy: "Isha Kapoor", followUpDate: null, confirmDate: "2025-01-04"  },
//     { name: "Isha Kapoor", address: "707 Bhopal Avenue, Bhopal, Madhya Pradesh", phoneNo: "0198765421", status: "interested", businessType: "retail", clientType: "premium", important: false, offerBudget: 50000, referredBy: "Rajesh Nair", followUpDate: "2025-01-16", confirmDate: null  },
//     { name: "Rajesh Nair", address: "808 Trivandrum Street, Trivandrum, Kerala", phoneNo: "0987654321", status: "pending", businessType: "manufacturing", clientType: "standard", important: false, offerBudget: 30000, referredBy: "Sneha Rao", followUpDate: null, confirmDate: null },
//     { name: "Sneha Rao", address: "909 Goa Road, Panaji, Goa", phoneNo: "9876501234", status: "interested", businessType: "service", clientType: "premium", important: false, offerBudget: 45000, referredBy: "Rohan Das", followUpDate: "2025-01-14", confirmDate: null  }
// ];

const Lead = mongoose.model("Lead",leadSchema);

// async function addData(){
//     await Lead.insertMany(clients);
// }

// addData().then(()=>{
//     console.log("data added");
// }).catch((err)=>{
//     console.log(err);
// })

module.exports =  {Lead};