import React from "react";
import "./Footer.css"; // Import the custom CSS file

const Footer = () => {
  return (
    <>
      {/* About OneEvent Section (Separate from Footer) */}
      <div className="container my-4">
        <div className="row align-items-center">
          <div className="col-md-8">
            <h5 className="text-warning" style={{ fontSize: "1.5rem" ,marginRight: "20px"  }}>About OneEvent</h5>
            <p style={{ fontSize: "1.1rem" }}>
              OneEvent is your ultimate event management companion, streamlining everything from registrations to leaderboards. Whether you're an organizer or an attendee, we ensure a seamless,
              hassle-free experience. Discover, participate, and create unforgettable events with ease – because great events deserve great management!
            </p>
            <ul style={{ fontSize: "1.1rem" }}>
              <li>Automated participant registration and event scheduling.</li>
              <li>Real-time leaderboard and results tracking.</li>
              <li>Integrated communication and reminder system for attendees.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer mt-5 py-4 bg-dark text-light">
        <div className="container">
          <div className="row">
            {/* Contact Section */}
            <div className="col-md-6">
              <h5 className="footer-title text-warning" style={{ fontSize: "1.3rem" }}>Contact Us</h5>
              <p className="footer-text">📧 support@oneevent.com</p>
              <p className="footer-text">📞 +91 98765 43210</p>
              <p className="footer-text">📍 Marwadi University, Rajkot</p>
            </div>

            {/* Newsletter Subscription */}
            <div className="col-md-6">
              <h5 className="footer-title text-warning" style={{ fontSize: "1.3rem" }}>Subscribe to Our Newsletter</h5>
              <form>
                <input type="email" className="form-control mb-2" placeholder="Enter your email" required />
                <button className="btn btn-warning w-100">Subscribe</button>
              </form>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="text-center mt-4">
            <h5 className="text-warning" style={{ fontSize: "1.3rem" }}>Follow Us</h5>
            <ul className="d-flex justify-content-center list-unstyled">
              <li className="mx-2"><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li className="mx-2"><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
              <li className="mx-2"><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li className="mx-2"><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
            </ul>
            <p className="footer-copy">© 2025 OneEvent. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
