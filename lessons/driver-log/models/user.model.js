// Unit 6 - Day 026
// App

const mongoose = require("mongoose");

// firstname, lastname, *email, *password
const UserSchema = new mongoose.Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
  },
  email: {
    type: String,
    required: true, // This is by default set to "false"
  },
  password: {
    type: String,
    required: true, // This is by default set to "false"
  },
});

module.exports = mongoose.model("User", UserSchema);
