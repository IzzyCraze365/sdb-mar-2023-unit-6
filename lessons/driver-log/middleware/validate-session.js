// take the token that is provided by request object (headers: authorization)
// check to see if the token is expired. if it is expired provide a response back to the user
// if the token is valid we will create a variable to contain the user's information based off of the ID we caputured in the creation of the token.
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");
const validateSession = async (req, res, next) => {
  try {
    // ! extracting the token from the header
    const token = req.headers.authorization;
    // console.log(token);
    // ! validating and extracting the payload from the token
    const decodedToken = await jwt.verify(token, "i_am_secret");
    // console.log(decodedToken);
    // ! Find the user and pass it along to the next function
    const user = await User.findById(decodedToken.id);

    if (!user) {
      throw Error("User Not Found");
    }

    req.user = user;
    return next(); // Move onto the next function in view-all from driver.controller.
    //throw Error("Error from Validate Session");
  } catch (error) {
    res.json({ message: error.message });
  }
};

module.exports = validateSession;
