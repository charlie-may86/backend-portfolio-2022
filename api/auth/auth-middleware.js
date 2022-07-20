const jwt = require("jsonwebtoken");
const { TOKEN_SECRET } = require("../../config/secrets");
const Users = require("../users/users-model");

function restricted(req, res, next) {}
