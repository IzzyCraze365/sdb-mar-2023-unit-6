# Mongo DB

MERN - Stack
M - Mongo
E - Express
R - React
N - Node

## Traditional DB's

Databases - collection of tables
Tables - PrimaryKey (id), Columns, Each row in a table will be the data.
Records - actual values that are stored in the database per the given table row.

## MongoDB Terminology

Database (same as above)
Collections equates to a table
Document equates to a record

# Initial Setup

- `npm init -y` creates the package.json
- `npm i express dotenv mongoose bcrypt`
- create the `app.js` file
- update our `package.json` to reflect the app.js is the starting file.
- add boiler plate code
- start the server see if it runs
- refactor code to use `.env` file for the PORT.

## Boiler Plate for Starting a Server

```js
const express = require("express");
const app = express();
const PORT = 4000;

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
```

## Creating Models

- Models help define what your data collection will look like
- Define the fields and data types in the model

```js
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  // Create the Columns Here for the Collection
});

module.exports = mongoose.model("User", UserSchema);
```

## Creating a new Document

```js
const user = new User({
  firstname: firstname,
  lastname: lastname,
  email: email,
  password: password,
});
```

Saving to the DB

```js
const newUser = await user.save();
```
