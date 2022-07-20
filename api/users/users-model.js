const db = require("../../data/db-config");

module.exports = {
  getAllUsers,
  addUser,
  findById,
  logIn,
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

function logIn(email) {
  return db("users").where("email", email).first();
}
