const Users = require("../models/User");
const express = require("express");
const router = express.Router();

router.get("/users", (req, res) => {
  Users.find({}, function (err, data) {
    if (err) {
      throw err;
    } else {
      return data;
    }
  });
});
router.post("/users", (req, res) => {
  const reqBody = req.body;
  console.log(reqBody);
  let newUser = new Users(reqBody);
  newUser
    .save()
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
  res.send("Success");
});
module.exports = router;
