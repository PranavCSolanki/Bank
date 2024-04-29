const mongoose = require("mongoose");

const connect = mongoose.connect("mongodb://localhost:27017/Bank");

if (connect) {
  console.log("connect");
} else {
  console.log("not connect");
}
