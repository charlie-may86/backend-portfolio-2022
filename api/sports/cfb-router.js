const router = require("express").Router();
const axios = require("axios");
const Picks = require("./cfb-model");

router.get("/", async (req, res, next) => {
  const options = {
    method: "GET",
    url: "https://api.sportsdata.io/v3/cfb/scores/json/Games/2022",
    headers: {
      "Ocp-Apim-Subscription-Key": "b78d05aaa3da480c8f022c79d284bb7d",
    },
  };

  const getSchedule = async () => {
    try {
      return await axios(options);
    } catch (error) {
      console.log(error);
    }
  };

  try {
    const schedule = await getSchedule();
    res.status(201).json(schedule.data);
  } catch (err) {
    next(err);
  }
});

router.post("/pickem", async (req, res, next) => {
  try {
    const { username, winner, spread } = req.body;
    const addPick = {
      username,
      winner,
      spread,
    };
    const newPick = await Picks.addPick(addPick);
    res.status(201).json(newPick);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
