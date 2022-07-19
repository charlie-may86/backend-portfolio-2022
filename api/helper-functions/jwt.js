const jwt = require("jsonwebtoken");
const { TOKEN_SECRET } = require("../../config/secrets");

function buildToken(user) {
  const payload = {
    user_id: user.user_id,
    email: user.email,
  };

  const options = {
    expiresIn: "1d",
  };

  return jwt.sign(payload, TOKEN_SECRET, options);
}

module.exports = {
  buildToken,
};
