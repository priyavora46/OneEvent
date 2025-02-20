const Event = require("../models/Event");

exports.registerEvent = async (req, res) => {
  const { eventName, email, contact } = req.body;

  try {
    const newEvent = new Event({ eventName, email, contact });
    await newEvent.save();
    res.status(201).json({ message: "Event registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
