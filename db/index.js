require("dotenv").config();

const mongoose = require("mongoose");
const models = require("./models");

async function init() {
  try {
    await mongoose.connect(
      `mongodb+srv://augmentchinedu:${process.env.MONGODB_PASSWORD}@quizapp.bi2rp.mongodb.net/?retryWrites=true&w=majority&appName=quizapp`
    );
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log(err);
  }
}

module.exports = { init, ...models };
