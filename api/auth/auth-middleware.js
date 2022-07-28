const jwt = require("jsonwebtoken");
const { TOKEN_SECRET } = require("../../config/secrets");
const Users = require("../users/users-model");

module.exports = {
  checkUniqueEmail,
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
