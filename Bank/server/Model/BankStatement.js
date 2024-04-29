const mongoose = require("mongoose");

const BankStatementSchema = new mongoose.Schema({
  name: String,
  account_type: String,
  account_number: String,
  ifsc_code: String,
  address: String,
  pancard: String
});

const LoanDetails = mongoose.model("BankStatement", BankStatementSchema);
module.exports = LoanDetails;

