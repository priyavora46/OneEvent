import React, { useState } from "react";
import axios from "axios";

const OrganizeEvent = () => {
  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventDescription, setEventDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/api/organize-event", {
        eventName,
        eventDate,
        eventDescription,
      });
      alert(response.data.message);
      setEventName("");
      setEventDate("");
      setEventDescription("");
    } catch (error) {
      alert("Error organizing event");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Organize a New Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Event Name</label>
          <input
            type="text"
            className="form-control"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Event Date</label>
          <input
            type="date"
            className="form-control"
            value={eventDate}
            onChange={(e) => setEventDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Event Description</label>
          <textarea
            className="form-control"
            value={eventDescription}
            onChange={(e) => setEventDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          Create Event
        </button>
      </form>
    </div>
  );
};

export default OrganizeEvent;
