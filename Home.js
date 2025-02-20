import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Carousel, Modal, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import OrganizeEvent from "./OrganizeEvent";
import EventRegistration from "./EventRegistration"; // Fixed import

const Home = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [step, setStep] = useState("login");
  const [selectedEventId, setSelectedEventId] = useState("");

  const events = [
    { _id: "1", title: "Tech Conference 2025", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdnkTaPWwi29eSXZaNmYW7r-7ZHdZJ0W1yuSSg99qQG518Is3XBzqI1YCICMhMzF-B9eA&usqp=CAU" },
    { _id: "2", title: "AI & Machine Learning Expo", image: "https://media.istockphoto.com/id/1435014643/photo/ai-machine-learning-robot-hand-ai-artificial-intelligence-assistance-human-touching-on-big.jpg?s=612x612&w=0&k=20&c=MlbHdhkfqetT9b9kq58EPb2x_twui75NS-dCY01nf4Q=" },
    { _id: "3", title: "Startup Networking Night", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-3kSQt70-jVB0HqQ_GFUQbVKFj7dIutFIlA&s" },
    { _id: "4", title: "Cyber Security Summit", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc5n-Cxa04HP5rC2-lXWJptpfXWPQchvn8ZQ&s" },
    { _id: "5", title: "Web3 & Blockchain Conference", image: "https://assets.techrepublic.com/uploads/2022/08/web-blockchain-technology-market.jpeg" },
    { _id: "6", title: "Innovators Hackathon", image: "https://blog.functionfixers.co.uk/assets/iStock-1484758991.jpg" },
  ];

  // Open Modal for Registration
  const handleRegisterClick = (eventId) => {
    if (!isLoggedIn) {
      setStep("login");
    } else {
      setStep("register");
      setSelectedEventId(eventId);
    }
    setShowModal(true);
  };

  // Handle Login Success
  const handleLogin = () => {
    setIsLoggedIn(true);
    setStep("register");
  };

  return (
    <div className="container mt-5">
      {/* Hero Section */}
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src="https://png.pngtree.com/thumb_back/fh260/background/20230407/pngtree-event-planning-sign-on-a-wooden-desk-in-an-office-with-photo-image_2280039.jpg" alt="Event" style={{ height: "400px", objectFit: "cover" }} />
          <Carousel.Caption>
            <h3>Discover, Learn, and Grow</h3>
            <p>Join the most exciting events happening around you.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="https://img.freepik.com/free-photo/top-view-wedding-planning-resources-arrangement_23-2150279492.jpg" alt="Networking Event" style={{ height: "400px", objectFit: "cover" }} />
          <Carousel.Caption>
            <h3>Expand Your Network</h3>
            <p>Meet and connect with like-minded professionals.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      {/* Join & Organize Event Buttons */}
      <div className="text-center my-4">
        <Button variant="primary" className="me-3" onClick={() => navigate("/events")}>Join an Event</Button>
        <Button variant="success" onClick={() => navigate("/organize-event")}>Organize an Event</Button> {/* Fixed Route Path */}
      </div>

      {/* Upcoming Events */}
      <section className="mt-5">
        <h2 className="text-center text-danger fw-bold">🔥 Upcoming Events 🔥</h2>
        <div className="row">
          {events.map((event) => (
            <div key={event._id} className="col-md-4 mb-4">
              <div className="card shadow-lg border border-danger">
                <img src={event.image} className="card-img-top" alt={event.title} style={{ height: "250px", objectFit: "cover" }} />
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold text-danger">{event.title}</h5>
                  <button className="btn btn-danger btn-lg w-100" onClick={() => handleRegisterClick(event._id)}>🚀 Register Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="mt-5 text-center">
        <h2 className="text-warning">✨ What People Say ✨</h2>
        <p className="fst-italic">“OneEvent has transformed how I attend and organize events. Highly recommended!” - Alex</p>
        <p className="fst-italic">“The best event management platform I have used. 5 stars!” - Sophia</p>
      </section>

      {/* Register/Login Modal */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{step === "login" ? "Login" : "Register for Event"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {step === "login" ? (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Enter password" />
              </Form.Group>
              <Button variant="primary" onClick={handleLogin}>Login</Button>
            </Form>
          ) : (
            <EventRegistration show={showModal} handleClose={() => setShowModal(false)} eventId={selectedEventId} />
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Home;
