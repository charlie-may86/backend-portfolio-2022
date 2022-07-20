const jwt = require("jsonwebtoken");
const { TOKEN_SECRET } = require("../../config/secrets");

function userOnly(req, res, next) {
  const token = req.headers.authorization;
  const { id } = req.params;
  if (token) {
    jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).json({ message: `token bad: ${err}` });
      } else if (decoded.user_id != id) {
        res.status(401).json({ message: `You shall not pass` });
      } else if (decoded.user_id == id) {
        req.decodedJwt = decoded;
        next();
      } else {
        res.status(500).json({ message: `Something went wrong` });
      }
    });
  } else {
    res.status(401).json({ message: "we wants a token!" });
  }
}

module.exports = {
  userOnly,
};
