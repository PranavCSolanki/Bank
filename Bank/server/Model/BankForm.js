const mongoose = require("mongoose");

const BankSchema = new mongoose.Schema({
    name: String,
    Account_type: String,
    Account_number: Number,
    IFSC_code: String,
    address: String,
    pan: String
});

const BankModel = mongoose.model("bankform", BankSchema);
module.exports = BankModel;