const { Subject } = require("../db");

module.exports = {
  addSubject: async (req, res) => {
    let name = req.query.name;
    let id = name.replaceAll(" ", "-").toLowerCase();

    let subject = new Subject({
      name,
      id,
    });

    await subject.save();

    res.send(true);
  },

  getSubjects: async (req, res) => {
    let subjects = await Subject.find();

    subjects = subjects.map((subject) => ({
      id: subject.id,
      name: subject.name,
    }));
    res.send(subjects);
  },

  checkID: (req, res) => {
    console.log(req.params);
    res.send(true);
  },

  deleteSubject: (req, res) => {
    console.log(req.params);

    res.send(true);
  },
};
