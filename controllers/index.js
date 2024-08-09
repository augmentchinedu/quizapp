const { Subject } = require("../db");

module.exports = {
  getSubjects: async (req, res) => {
    let subjects = await Subject.find();

    subjects = subjects.map((subject) => ({
      id: subject.id,
      name: subject.name,
    }));
    res.send(subjects);
  },
};
