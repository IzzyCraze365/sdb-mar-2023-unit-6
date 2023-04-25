// Unit 6 - Day 026 & 027
// Challenge "Zookeeper"
// Team "ALJI"

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true, // This is by default set to "false"
  },
  password: {
    type: String,
    required: true, // This is by default set to "false"
  },
});

module.exports = mongoose.model("User", UserSchema);
