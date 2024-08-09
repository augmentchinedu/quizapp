const path = require("path");
const express = require("express");
const router = express.Router();
const controller = require("../controllers");

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "dist", "index.html"));
});

router.get("/get-subjects", controller.getSubjects);
router.get("/add-subject", controller.addSubject);
router.get("/check-id", controller.checkID);
router.get("/delete-subject/:id", controller.deleteSubject);
// Auths
// router.post("/auth/login", controller.login);

module.exports = router;
