const mongoose = require("mongoose");
const subjectSchema = new mongoose.Schema({
  name: String,
});

const teacherSchema = new mongoose.Schema({
  id: String,
  name: String,
});

module.exports = { teacherSchema, subjectSchema };
