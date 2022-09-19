const router = require('express').Router();
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

module.exports = router
