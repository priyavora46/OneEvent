const express = require("express");
const router = express.Router();
const Organize = require("../models/OrganizeEvent"); // Import model

// Organize an event
router.post("/organize-event", async (req, res) => {
  const { eventName, eventDate, eventDescription } = req.body;

  if (!eventName || !eventDate || !eventDescription) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const newEvent = new Organize({ eventName, eventDate, eventDescription });
    await newEvent.save();
    res.json({ message: "Event organized successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Error organizing event" });
  }
});

module.exports = router;
