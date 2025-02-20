const express = require("express");
const Leaderboard = require("../models/Leaderboard");

const router = express.Router();

router.post("/add", async (req, res) => {
  const { username, score } = req.body;
  try {
    const newEntry = new Leaderboard({ username, score });
    await newEntry.save();
    res.status(201).json({ message: "Score added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/list", async (req, res) => {
  const scores = await Leaderboard.find().sort({ score: -1 });
  res.json(scores);
});

module.exports = router;
