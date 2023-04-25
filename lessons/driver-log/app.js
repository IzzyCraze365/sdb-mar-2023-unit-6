// Unit 6 - Day 026
// App

require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose"); //! This is NEW
const userController = require("./controllers/user.controller");
const driverlogController = require("./controllers/driverlog.controller");

const PORT = process.env.PORT;
// "localhost:27017" is what MongoDb says in the Upper-Left Corner
//mongoose.connect("mongodb://localhost:27017/driverlog-db"); //This provides a connection point //! This is NEW
mongoose.connect("mongodb://127.0.0.1:27017/driverlog-db"); //This provides a working connection point //! This is NEW
const db = mongoose.connection; //! This is NEW
db.once("open", () => console.log("Connected to the DB")); //! This is NEW

app.use(express.json());

app.use("/user", userController);

app.use("/log", driverlogController);

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
