const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema({

  username: String,
  email: String,
  password: String,
  conformPass: String,
});

const Register = mongoose.model("Register", RegisterSchema);
module.exports = Register;