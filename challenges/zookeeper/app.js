// Unit 6 - Day 026
// Challenge "Zookeeper"
// Team "ALJI"

require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userController = require("./controllers/user.controller");

const PORT = process.env.PORT;
mongoose.connect("mongodb://127.0.0.1:27017/zookeeper-db");
const db = mongoose.connection;
db.once("open", () => console.log("Connected to the DB"));

app.use(express.json());

app.use("/user", userController);
app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
