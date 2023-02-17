const mongoose = require("mongoose");

const getquoteSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  formemail: String,
  forphone: Number,
  forservice: String,
});

module.exports = mongoose.model("quotes", getquoteSchema);
