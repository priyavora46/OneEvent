import React, { useState } from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css"; // Custom CSS for styling

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Simulated authentication state

  const handleSearch = (e) => {
    e.preventDefault();
    alert(`Searching for: ${searchQuery}`);
    // Later, integrate with search functionality
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
      <div className="container">
        {/* Brand Logo */}
        <Link className="navbar-brand fw-bold text-white" to="/">
          OneEvent
        </Link>

        {/* Navbar Toggler for Mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/">Home</Link>
            </li>
            <li className="nav-item"> 
            <Link className="nav-link text-white" to="/event-dashboard">Events</Link>

            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/leaderboard">Leaderboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/certificate">Certificate</Link>
            </li>
          </ul>

          {/* Search Box */}
          <form className="d-flex me-3" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search events..."
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="btn btn-outline-light" type="submit">
              Search
            </button>
          </form>

          {/* Login / Signup Button */}
          {isAuthenticated ? (
            <button className="btn btn-danger" onClick={() => setIsAuthenticated(false)}>
              Logout
            </button>
          ) : (
            <Link className="btn btn-light" to="/login">
              Login
            </Link>
          )}

          {!isAuthenticated && (
            <span className="ms-2 text-white">
              or <Link to="/signup" className="text-warning">Sign Up</Link>
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
