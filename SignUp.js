import React, { useState } from "react";
import "./auth.css"; // Import CSS file

const Signup = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        contact: "",
        fullName: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");

    // Handle Input Change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Validate Form
    const validateForm = () => {
        let newErrors = {};

        if (!formData.username.trim()) newErrors.username = "Username is required.";
        if (!formData.fullName.trim()) newErrors.fullName = "Full Name is required.";
        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Enter a valid email.";
        if (!formData.contact.trim() || !/^\d{10}$/.test(formData.contact)) newErrors.contact = "Enter a valid 10-digit contact number.";
        if (!formData.password.trim() || formData.password.length < 6) newErrors.password = "Password must be at least 6 characters.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // Handle Form Submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validate before submitting
        if (!validateForm()) return;

        try {
            const response = await fetch("http://localhost:5000/api/users/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || "Signup failed");
            }

            setMessage("Signup successful! Redirecting...");
            setTimeout(() => {
                window.location.href = "/login"; // Redirect to login page
            }, 2000);
        } catch (error) {
            setMessage(`Signup failed: ${error.message}`);
            console.error("Signup error:", error);
        }
    };

    return (
        <div className="auth-container">
            <h2>Sign Up</h2>
            {message && <p className="message">{message}</p>}
            <form onSubmit={handleSubmit} className="auth-form">
                <input type="text" name="username" value={formData.username} onChange={handleChange} placeholder="Username" required />
                {errors.username && <span className="error">{errors.username}</span>}

                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
                {errors.email && <span className="error">{errors.email}</span>}

                <input type="text" name="contact" value={formData.contact} onChange={handleChange} placeholder="Contact" required />
                {errors.contact && <span className="error">{errors.contact}</span>}

                <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Full Name" required />
                {errors.fullName && <span className="error">{errors.fullName}</span>}

                <input type="password" name="password" value={formData.password} onChange={handleChange} placeholder="Password" required />
                {errors.password && <span className="error">{errors.password}</span>}

                <button type="submit">Signup</button>
            </form>

            <p className="auth-footer">
                Already have an account? <a href="/login">Login</a>
            </p>
        </div>
    );
};

export default Signup;
