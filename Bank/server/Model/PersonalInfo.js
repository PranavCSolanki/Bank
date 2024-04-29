const mongoose = require("mongoose");

const PersonalInfoSchema = new mongoose.Schema({
  name: { type: String},
  Contact: { type: String},
  DOB: { type: Date},
  gender: { type: String},
  email: { type: String},
  address: { type: String},
});

const PersonalInfoModel = mongoose.model("PersonalInfo", PersonalInfoSchema);
module.exports = PersonalInfoModel;
