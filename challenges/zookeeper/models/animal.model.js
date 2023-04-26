// Unit 6 - Day 027 & 028
// Challenge "Zookeeper"
// Team "ALJI"

const mongoose = require("mongoose");

const AnimalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true, // This is by default set to "false"
  },
  legNumber: {
    type: Number,
    required: true, // This is by default set to "false"
  },
  predator: {
    type: Boolean,
    required: true, // This is by default set to "false"
  },
  user_id: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  }, // This is our foreign key to link User and Log
});

module.exports = mongoose.model("Animal", AnimalSchema);
