const mongoose = require("mongoose");

const DriverLogSchema = new mongoose.Schema({
  date: {
    type: Date,
    default: Date.now(),
    required: true,
  },
  mode: {
    type: String,
    required: true,
  },
  totalHours: {
    type: Number,
    required: true,
  },
  totalMiles: {
    type: Number,
  },
  licensePlate: {
    type: String,
  },
  owner_id: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  }, // This is our foreign key to link User and Log
});

module.exports = mongoose.model("DriverLog", DriverLogSchema);
