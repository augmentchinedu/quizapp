const mongoose = require("mongoose");
const schemas = require("./schema");

const Teacher = mongoose.model("Teacher", schemas.teacherSchema);
const Subject = mongoose.model("Subject", schemas.subjectSchema);

module.exports = { Teacher, Subject };
