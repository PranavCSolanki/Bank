const mongoose = require("mongoose");

const VarificationSchema = new mongoose.Schema({
  adharCard: String,
  passport: String,
  pancard: String,
});

const LoanDetails = mongoose.model("Varification", VarificationSchema);
module.exports = LoanDetails;

