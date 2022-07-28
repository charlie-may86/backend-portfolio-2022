const db = require("../../data/db-config");

module.exports = {
  getAllUsers,
  addUser,
  findById,
  findByEmail,
  findByUsername,
  logIn,
  deleteUser,
};

function getAllUsers() {
  return db("users").select("user_id", "email");
}

async function addUser(user) {
  const [id] = await db("users").insert(user, "user_id");
  return findById(id);
}

function findById(user_id) {
  return db("users").where("user_id", user_id).first();
}

function findByEmail(email) {
  return db("users").select("email").where("email", email).first();
}

function findByUsername(username) {
  return db("users").select("username").where("username", username).first();
}

function logIn(email) {
  return db("users").where("email", email).first();
}

function deleteUser(user_id) {
  return db("users").where("user_id", user_id).del();
}
