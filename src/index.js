const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose
  .connect("mongodb+srv://enigmaroot:enigma00@enigma00.jv7u1.mongodb.net/test")
  .then(() => {
    console.log("successful connection");
    app.listen(5000, () => {
      console.log("Server 5000 is listening!");
    });
  })
  .catch((err) => console.log(err));
