const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config()

mongoose
  .connect(
    process.env.MONGO_URI
  )
  .then(() => {
    console.log("Baza ulandi");
  })
  .catch((err) => {
    if (err) throw err;
  });

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/users", require("./routes/users"));

const PORT = process.env.PORT || 5000

app.listen(PORT, (err) => {
  if (err) throw err;
  console.log("Server run: " + PORT);
});
