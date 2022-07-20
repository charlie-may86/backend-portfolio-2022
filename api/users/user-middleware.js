const jwt = require("jsonwebtoken");
const { TOKEN_SECRET } = require("../../config/secrets");

function userOnly(req, res, next) {
  const token = req.headers.authorization;
  if (token) {
    jwt.verify(token, TOKEN_SECRET, (err, decoded) => {
      if (err) {
        res.status(401).json({ message: `token bad: ${err}` });
      } else {
        req.decodedJwt = decoded;
        next();
      }
    });
  } else {
    res.status(401).json({ message: "we wants token!" });
  }
}

module.exports = {
    userOnly,
}
