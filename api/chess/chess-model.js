const db = require("../../data/db-config");

module.exports = {
  getResults,
  addResult,
  findById,
};

function getResults() {
  return db("chess").select("username", "time");
}

async function addResult(result) {
  const [id] = await db("chess").insert(result, "result_id");
  return findById(id);
}

function findById(result_id) {
  return db("chess").where("result_id", result_id).first();
}
