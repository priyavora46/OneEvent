const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  date: { type: Date, required: true },
  location: String,
  participants: [
    {
      name: String,
      email: String,
      contact: String,
    },
  ],
});

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
