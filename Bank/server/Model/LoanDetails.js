const mongoose = require("mongoose");

const LoanDetailsSchema = new mongoose.Schema({
  loan_amt_requested: Number,
  loan_purpose: String,
  loan_term: Number,
  collateral: String,
});

const LoanDetails = mongoose.model("LoanDetails", LoanDetailsSchema);
module.exports = LoanDetails;