// Unit 6 - Day 026 & 027
// Challenge "Zookeeper"
// Team "ALJI"

const router = require("express").Router();
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// ? http://localhost:4000/user/create
router.post("/create", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = new User({
      username: username,
      password: bcrypt.hashSync(password, 10),
    });

    const newUser = await user.save();

    let token = jwt.sign({ id: newUser._id }, "best_animal_is_doggo", {
      expiresIn: 60 * 60 *2, //Expires in 2 hour
    });

    res
      .status(200)
      .json({ user: newUser, message: "Creating a new Zoo!!!", token: token });
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
      const passwordMatch = await bcrypt.compare(
        req.body.password,
        user.password
      );

      let token = jwt.sign({ id: user._id }, "best_animal_is_doggo", {
        expiresIn: 60 * 60* 2, // Expires in 2 hours
        //algorithm: "H512",
      });

      res.status(200).json({
        message: passwordMatch ? "passwords matched" : "passwords do not match",
        token: passwordMatch ? token : "invalid token",
      });

      //The Following was added before we incorperated BCRYPT AND TOKEN on Day 027
      /*
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
     */
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
