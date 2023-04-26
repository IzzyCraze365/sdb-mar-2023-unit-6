// Unit 6 - Day 026 & 027
// Challenge "Zookeeper"
// Team "ALJI"

const router = require("express").Router();
const validateSession = require("../middleware/validate-session");
const Animal = require("../models/animal.model");

// http://localhost:4000/animal/create
router.post("/create",validateSession, async (req, res) => {
  try {
    const { name, legNumber, predator } = req.body;

    const animal = new Animal({
      name: name,
      legNumber: legNumber,
      predator: predator,
      user_id: req.user._id,
    });

    const newAnimal = await animal.save();

    res
      .status(200)
      .json({ message: "Animal was added to the Zoo!", animal: newAnimal });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// http://localhost:4000/animal/view-all
router.get("/view-all", validateSession, async (req, res) => {
  try {
    let animals = await Animal.find().populate(
      "user_id",
      "name"
    );

    res.json({ message: "Look at all the Animals", animal: animals });
  } catch (error) {
    res.json({ message: error.message });
  }
});

// http://localhost:4000/animal/delete/:id
router.delete("/delete/:id", validateSession, async (req, res) => {
  try {
    const id = req.params.id;
    console.log("Animal ID", id);

    const animalsFound = await Animal.find({
      _id: req.params.id,
      user_id: req.user._id,
  });
    if (animalsFound.length === 0){
      throw Error ("Not authorized to touch Animals");
    }
    console.log(req.user._id); //! TEST
    const removedAnimal = await Animal.deleteOne({ _id: id, user_id: req.user._id
    });
    console.log("Removed Animal". removedAnimal); //! TEST
     res.status(200).json({
      message:
        removedAnimal.deletedCount > 0
          ? "Removed 1 Animal from the Zoo :-("
          : "No Animals were removed form the Zoo",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// http://localhost:4000/animal/update/:id
router.patch("/update/:id", validateSession, async (req, res) => {
  try {
    const { name, legNumber, predator } = req.body;
    const filter = { _id: req.params.id, user_id: req.user._id };
    const animalToUpdate = {
      name: name,
      legNumber: legNumber,
      predator: predator,
    };

    const returnUpdatedAnimal = { new: true }; //default set to false
    const animal = await Animal.findOneAndUpdate(
      filter,
      animalToUpdate,
      returnUpdatedAnimal
    );
    if (!animal) {
      throw Error("Not authorized to touch Animal");
    }
    res.status(200).json({ message: "Animal has been Updated", animal: animal });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// http://localhost:4000/log/view-zookeeper
router.get("/view-zookeeper", validateSession, async (req, res) => {
  try {
    let animals = await Animal.find({ user_id: req.user._id }).populate(
      "user_id",
      "name"
    );

    res.json({ message: "Check out this one guys's zoo", animal: animals });
  } catch (error) {
    res.json({ message: error.message });
  }
});

module.exports = router; //! NEVER FORGET ME!!!!!
