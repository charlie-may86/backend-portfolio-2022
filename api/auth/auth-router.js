const router = require("express").Router();
const bcrypt = require("bcryptjs");
const { buildToken } = require("../helper-functions/jwt");
const { addUser, logIn } = require("../users/users-model");
const {
  checkUniqueEmail,
  checkUniqueUsername,
  checkNewUser,
} = require("./auth-middleware");
const Users = require("../users/users-model");

router.post(
  "/register",
  checkUniqueEmail,
  checkUniqueUsername,
  checkNewUser,
  async (req, res, next) => {
    try {
      const { password, email, username } = req.body;
      const hash = bcrypt.hashSync(password, 8);
      const newUser = { password: hash, email, username };
      const createdUser = await addUser(newUser);
      res.status(201).json(createdUser);
    } catch (err) {
      next(err);
    }
  }
);

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await logIn(email);

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = buildToken(user);
      res.status(200).json({
        message: `welcome, have a cookie`,
        token,
      });
    } else {
      res.status(401).json({ message: "username or password are incorrect" });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
