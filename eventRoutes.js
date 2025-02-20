const express = require("express");
const Event = require("../models/Event"); // Import event model
const router = express.Router();

// ✅ Get event by ID
router.get("/:eventId", async (req, res) => {
  try {
    const event = await Event.findById(req.params.eventId);
    if (!event) return res.status(404).json({ message: "Event not found" });
    res.json(event);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// ✅ Register for an event
router.post("/:eventId/register", async (req, res) => {
  try {
    const { name, email, contact } = req.body;
    if (!name || !email || !contact)
      return res.status(400).json({ message: "All fields are required" });

    const event = await Event.findById(req.params.eventId);
    if (!event) return res.status(404).json({ message: "Event not found" });

    event.participants.push({ name, email, contact });
    await event.save();

    res.json({ message: "Registration successful!", event });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
