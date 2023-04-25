const router = require("express").Router();
const DriverLog = require("../models/driverlog.model");
// http://localhost:4000/log/create

router.post("/create", async (req, res) => {
  try {
    const { mode, totalHours, totalMiles, licensePlate } = req.body;

    const driverLog = new DriverLog({
      mode: mode,
      totalHours: totalHours,
      totalMiles: totalMiles,
      licensePlate: licensePlate,
    });

    const newDriverLog = await driverLog.save();

    res.json({ message: "log was saved", log: newDriverLog });
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
