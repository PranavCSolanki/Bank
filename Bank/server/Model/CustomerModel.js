const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  customer_occupation: String,
  customer_status: String,
  monthly_income: Number,
  address: String,
});

const CustomerModel = mongoose.model("customer", CustomerSchema);
module.exports = CustomerModel;