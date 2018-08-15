const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const userRoutes = require("./routes/user");

const app = express();

mongoose.connect("mongodb+srv://nadav:1234@cluster0-29tfz.mongodb.net/test")
.then(() => {
    console.log('Connected to database!')
})
.catch(() => {
    console.log('Connected failed!')
});

app.use("/api/user", userRoutes);

module.exports = app;