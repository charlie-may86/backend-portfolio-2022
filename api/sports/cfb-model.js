const db = require("../../data/db-config");

module.exports = {
  addPick,
  findById,
};

function findById(pick_id) {
  return db("picks").where("pick_id", pick_id).first();
}

async function addPick(pick) {
  const [id] = await db("picks").insert(pick, "pick_id");
  return findById(id);
}
