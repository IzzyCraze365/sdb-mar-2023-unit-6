// Unit 6 - Day 026 & 027 & 028
// Challenge "Zookeeper"
// Team "ALJI"

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true, // This is by default set to "false"
    unique: true,
  },
  password: {
    type: String,
    required: true, // This is by default set to "false"
  },
});

module.exports = mongoose.model("User", UserSchema);
