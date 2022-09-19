const router = require("express").Router();
const axios = require("axios");
const Results = require("./chess-model");

router.get("/", async (req, res, next) => {
  try {
    const results = await Results.getResults();
    res.status(200).json(results);
  } catch (err) {
    next(err);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { username, time } = req.body;
    const newResult = { username, time };
    const createNewResult = await Results.addResult(newResult);
    res.status(201).json(createNewResult);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
