import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./EventDashboard.css"; // Custom styles
import { useNavigate } from "react-router-dom";

const EventDashboard = () => {
  const [registeredEvents, setRegisteredEvents] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const events = [
    { id: 1, name: "Hackathon", type: "Technical", details: "24-hour coding event", image: "https://cse.noticebard.com/wp-content/uploads/sites/23/2023/08/Top-11-Upcoming-Hackathons-1024x682.jpg", description: "Compete with coders worldwide in a 24-hour challenge." },
    { id: 2, name: "AI Workshop", type: "Technical", details: "Hands-on AI session", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcUxigyvUzyaHlrX1Ni_Ocwc_dygxlMmjN9Q&s" , description: "Learn the latest AI techniques with hands-on projects." },
    { id: 3, name: "Web Dev Bootcamp", type: "Technical", details: "Learn full-stack development", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf1XMpyLCIOCShy8C5k499rEaLJtX257Ltzw&s" , description: "Master front-end and back-end technologies." },
    { id: 4, name: "Cybersecurity Seminar", type: "Technical", details: "Protect against cyber threats", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbkz4QUxh0GgjPkeyKni8x6Sj8kn7CbIR01w&s" , description: "Understand ethical hacking & cybersecurity fundamentals." },
    { id: 5, name: "Blockchain Summit", type: "Technical", details: "Learn about blockchain", image: "https://i0.wp.com/blogs.cfainstitute.org/investor/files/2023/11/Lets-talk-about-blockchain-not-crypto.jpg?resize=940%2C575&ssl=1", description: "Explore blockchain, cryptocurrencies & smart contracts." },
    { id: 6, name: "Data Science Bootcamp", type: "Technical", details: "Analyze real-world data", image: "https://www.shutterstock.com/shutterstock/photos/1283679544/display_1500/stock-photo-real-world-data-analysis-info-dry-erase-board-words-d-illustration-1283679544.jpg", description: "Hands-on data analysis & machine learning models." },
    { id: 7, name: "Robotics Challenge", type: "Technical", details: "Build & program robots", image:"https://www.indmall.in/wp-content/uploads/2024/06/what-programming-languages-are-used-for-industrial-robotics.jpg" , description: "Create and compete with AI-powered robots." },
    { id: 8, name: "IoT Innovation", type: "Technical", details: "Smart devices & IoT", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN-5JGkVMJk7TqgXtik9FLiyfEfOwKPN2Rtw&s" , description: "Develop real-world IoT projects using sensors & AI." },
    { id: 9, name: "Digital Marketing 101", type: "Non-Technical", details: "Marketing in the digital age", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB2g9jFYZ1Wm0N-NtxMZGQhrokFORDx4yO2w&s" , description: "SEO, SEM, and social media growth strategies." },
    { id: 10, name: "Entrepreneurship Summit", type: "Non-Technical", details: "Start & grow a business", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKq73eKLOQCAON_jXPpPUSQoXPjg24OHFMjw&s", description: "Learn from successful entrepreneurs & investors." },
    { id: 11, name: "Public Speaking Workshop", type: "Non-Technical", details: "Enhance communication", image:"https://imageio.forbes.com/specials-images/imageserve/64eb980cb5fe9555b84af6bf/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds" , description: "Master stage confidence & presentation skills." },
    { id: 12, name: "Photography Contest", type: "Non-Technical", details: "Capture the best shots", image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVgpK1L898JBY7KSz3mFmcEsOedZKr8fcQow&s" , description: "Showcase creativity in a themed photography contest." },
    { id: 13, name: "Fitness Bootcamp", type: "Non-Technical", details: "Health & wellness", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsnmqdozTim7s0upFH4vYu1eCwoekzjUBC5Q&s", description: "Workouts & diet plans from fitness experts." },
    { id: 14, name: "Music Fest", type: "Non-Technical", details: "Live musical performances", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8GlvD_0owX5PDxnqJMP9E1nSlL7xDKWIYlw&s", description: "Enjoy live performances from top artists." },
    { id: 15, name: "Art Exhibition", type: "Non-Technical", details: "Showcase your art", image:"https://www.eurokidsindia.com/blog/wp-content/uploads/2023/11/children-art-in-living-space-870x570.jpg", description: "Display and sell your creative artworks." },
  ];

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleRegister = async (eventName) => {
    if (!user) {
      alert("Please log in to register for an event.");
      navigate("/login");
      return;
    }

    const registrationData = {
      eventName,
      email: user.email, 
      contact: user.contact, 
    };

    try {
      const response = await fetch("http://localhost:5000/api/register-event", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(registrationData),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message);
        setRegisteredEvents([...registeredEvents, eventName]);
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error registering for event:", error);
      alert("Error registering for the event. Try again later.");
    }
  };

  return (
    <div className="container">
      <h1 className="text-center my-4">Event Dashboard</h1>
      <div className="row">
        {events.map((event) => (
          <div key={event.id} className="col-md-4 mb-4">
            <div className="card">
              <img src={event.image} className="card-img-top" alt={event.name} />
              <div className="card-body">
                <h5 className="card-title">{event.name}</h5>
                <p className="card-text">{event.description}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleRegister(event.name)}
                  disabled={registeredEvents.includes(event.name)}
                >
                  {registeredEvents.includes(event.name) ? "Registered" : "Register"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventDashboard;
