const router = require("express").Router();
const bcrypt = require("bcryptjs");
const { addUser } = require("../users/users-model");
const Users = require("../users/users-model");

router.post("/register", async (req, res, next) => {
  try {
    const { password, email } = req.body;
    const newUser = { password, email };
    const createdUser = await addUser(newUser);
    res.status(201).json(createdUser);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
