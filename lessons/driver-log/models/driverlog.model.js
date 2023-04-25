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
});

module.exports = mongoose.model("DriverLog", DriverLogSchema);
