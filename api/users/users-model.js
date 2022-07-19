const db = require('../../data/db-config');

module.exports = {
  getAllUsers,
};

function getAllUsers() {
  return db("users").select("user_id", "email");
}
