import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Footer component
import Home from "./Pages/Home"; // Import Home Page
import Signup from "./Pages/SignUp";
import Login from "./Pages/Login";
import EventRegistration from "./Pages/EventRegistration";
import Leaderboard from "./Pages/Leaderboard";
import Certificate from "./Pages/Certificate";
import OrganizeEvent from "./Pages/OrganizeEvent"; // New Page for organizing events
import EventDashboard from "./Pages/EventDashboard"; // Import Event Dashboard

const App = () => {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: "90vh", paddingBottom: "50px" }}>
        <Routes>
          <Route path="/" element={<Home />} /> {/* Home Page Route */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/events" element={<EventRegistration />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/certificate" element={<Certificate />} />
          <Route path="/organize-event" element={<OrganizeEvent />} />
          <Route path="/event-dashboard" element={<EventDashboard />} /> {/* New Route */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
