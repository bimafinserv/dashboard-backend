const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  mobile: Number,
  password: String,
  usertype: String,
});

module.exports = mongoose.model("users", userSchema);
