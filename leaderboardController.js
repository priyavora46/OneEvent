const Leaderboard = require("../models/Leaderboard");

exports.updateScore = async (req, res) => {
  const { studentName, email, score } = req.body;
  try {
    const entry = new Leaderboard({ studentName, email, score });
    await entry.save();
    res.json({ message: "Score updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
