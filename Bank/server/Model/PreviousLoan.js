const mongoose = require("mongoose");

const PreviosLoanSchema = new mongoose.Schema({
    name: String,
    username: String,
    loan_type: String,
    loan_amt: Number,
    intrest_rate: Number,
    loan_from: Date,
    loan_to: Date,
});

const PreviosLoan = mongoose.model("PreviousLoan", PreviosLoanSchema);
module.exports = PreviosLoan;