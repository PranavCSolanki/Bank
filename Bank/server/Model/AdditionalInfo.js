const mongoose = require("mongoose");

const AdditionalSchema = new mongoose.Schema({
    additionalInfo: String,
  previousLoanHistory: String,
  outstandingDebts: String
});

const AdditionalModel = mongoose.model("AdditionalInfo", AdditionalSchema);
module.exports = AdditionalModel;