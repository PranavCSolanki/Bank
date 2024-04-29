const mongoose = require("mongoose");

const VarificationSchema = new mongoose.Schema({
    identity: String, 
    file: String, 
    verificationMethod: String,
    verificationInfo: String,
    otp: Number
});


const Varification = mongoose.model("Varification", VarificationSchema);
module.exports = Varification;