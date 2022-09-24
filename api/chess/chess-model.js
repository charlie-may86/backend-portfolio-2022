const db = require("../../data/db-config");

module.exports = {
  getResults,
  addResult,
  findById,
  getWhiteEight,
};

function getResults() {
  return db("chess").select("username", "time", "game_length");
}

async function addResult(result) {
  const [id] = await db("chess").insert(result, "result_id");
  return findById(id);
}

function findById(result_id) {
  return db("chess").where("result_id", result_id).first();
}

// select *
// from chess
// where game_length = '8'
// order by time asc
// limit 10

function getWhiteEight() {
  return db("chess")
    .select("username", "time", 'result_id')
    .where("game_length", "8")
    .orderBy("time", "asc")
    .limit(10);
}
