// Unit 6 - Day 026
// Challenge "Zookeeper"
// Team "ALJI"

const router = require("express").Router();
const User = require("../models/user.model");

// ? http://localhost:4000/user/create
router.post("/create", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({
      username: username,
      password: password,
    });

    const newUser = await user.save();

    res.status(200).json({ user: newUser, message: "Creating a new Zoo!!!" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ? http://localhost:4000/user/login
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: req.body.username });
    console.log("username", username); //! TEST
    console.log("user", user); //! TEST
    if (user) {
      let passwordMatch = false;
      console.log("Password Match 1 (false)", passwordMatch); //! TEST
      if (req.body.password === user.password) {
        passwordMatch = true;
        res.status(200).json({ message: "Login Successful!" });
        console.log("Password Match 2A (true)", passwordMatch); //! TEST
      } else {
        passwordMatch = false;
        console.log("Password Match 2B (false)", passwordMatch); //! TEST
        res.json({ message: "Incorrect Password" });
      }
      //  const passwordMatch = compare(req.body.password, user.password);
      console.log("Password Match 3", passwordMatch); //! TEST
    } else {
      res.json({
        message: `Username Not Found, you don't exist. You NEVER existed!!!`,
      });
    }
    //res.status(200).json({ message: "Login Successful" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router; //! NEVER FORGET ME!!!!!
