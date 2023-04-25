const router = require("express").Router();
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// ? http://localhost:4000/user/signup
router.post("/signup", async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    // 1. Create your new Model Object and supply it with the data you got from the req.body
    const user = new User({
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: bcrypt.hashSync(password, 10),
    });
    // 2. Save the data to the DB
    const newUser = await user.save();

    let token = jwt.sign({ id: newUser._id }, "i_am_secret", {
      expiresIn: 60 * 60 * 48,
    });

    res.json({ user: newUser, message: "new user created", token: token });
  } catch (error) {
    res.json({ message: error.message });
  }
});

// ? http://localhost:4000/user/login

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    // ! Reach to the DB and find the user
    // Find me a user where the email matches with what the user typed in the req.body
    const user = await User.findOne({ email: req.body.email });
    // ! if we get a user back we need to compare passwords
    // console.log(user);
    if (user) {
      const passwordMatch = await bcrypt.compare(
        req.body.password,
        user.password
      );

      let token = jwt.sign({ id: user._id }, "i_am_secret", {
        expiresIn: 60 * 60 * 48,
        algorithm: "H512",
      });

      res.json({
        message: passwordMatch ? "passwords matched" : "passwords do not match",
        token: passwordMatch ? token : "invalid token",
      });
    } else {
      res.json({ message: "User does not exist" });
    }
  } catch (error) {
    res.json({ message: error.message });
  }
});
module.exports = router;
