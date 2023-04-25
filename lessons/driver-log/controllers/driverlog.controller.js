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


// http://localhost:4000/log/view-all
router.get("/view-all", async (req, res) => {
  try {
    let logs = await DriverLog.find({ mode: "day" });

    res.json({ message: "works from view all", log: logs });
  } catch (error) {
    res.json({ message: error.message });
  }
});

// http://localhost:4000/log/view-all/mode=
//You can add conditions to add specifics to functionality
/* 
router.get("/view-all", async (req, res) => {
  const dvivingMode = req.query.mode;
  try {
    let logs = await DriverLog.find({mode: dvivingMode});

    res.json({ message: "works from view all", log: logs });
  } catch (error) {
    res.json({ message: error.message });
  }
});
 */

// http://localhost:4000/log/delete/:id
router.delete("/delete/:id", async (req, res) => {
  try {
    //const id = req.params.id; //! <=== "THAT LINE"
    //console.log(id); //! TEST
    //const removedLog = await DriverLog.deleteOne(_id: id); //! Alternative Typing if you include "THAT LINE"
    const removedLog = await DriverLog.deleteOne({ _id: req.params.id });
    //res.json({ message: "works from delete" }); // Replaced by the more specific message below.
    res.json({
      message:
        removedLog.deletedCount > 0
          ? "Deleted 1 document"
          : "No Documents were deleted",
    });
  } catch (error) {
    res.json({ message: error.message });
  }
});

// http://localhost:4000/log/update/:id
router.patch("/update/:id", async (req, res) => {
  try {
    const { mode, totalHours, totalMiles, licensePlate } = req.body;

    const filter = { _id: req.params.id };
    const logToUpdate = {
      mode: mode,
      totalHours: totalHours,
      totalMiles: totalMiles,
      licensePlate: licensePlate,
    };
    const returnOptions = {new: true}; //default set to false

    const log = await DriverLog.findOneAndUpdate(filter, logToUpdate, returnOptions);

    res.status(200).json({ message: "works for update log", log: log });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//  http://localhost:4000/log/:id
router.get("/:id", async (req, res) => {
  try {
    const log = await DriverLog.findById(req.params.id);

    res.json({ message: "works from get by id", log: log });
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router;
