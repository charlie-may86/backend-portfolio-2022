const jwt = require("jsonwebtoken");
const { TOKEN_SECRET } = require("../../config/secrets");
const Users = require("../users/users-model");

module.exports = {
  checkUniqueEmail,
  checkNewUser,
  checkUniqueUsername,
};

async function checkUniqueEmail(req, res, next) {
  email = req.body.email;
  const result = await Users.findByEmail(email);
  if (result) {
    res.status(409).json({ message: "A user is already using that email" });
  } else {
    next();
  }
}

async function checkUniqueUsername(req, res, next) {
  username = req.body.username;
  const result = await Users.findByUsername(username);
  if (result) {
    res.status(409).json({ message: "Username unavailable" });
  } else {
    next();
  }
}

async function checkNewUser(req, res, next) {
  newUser = req.body;
  if (!newUser.email || !newUser.username || !newUser.passsword) {
    res.status(422).json({ message: `missing field` });
  } else {
    next();
  }
}
