import React, { useState } from "react";
import "./auth.css"; // Import CSS file

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let newErrors = {};

        if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) 
            newErrors.email = "Enter a valid email.";
        
        if (!formData.password.trim()) 
            newErrors.password = "Password is required.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");

        if (!validateForm()) {
            setMessage("❌ Please fix the errors before submitting.");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/api/users/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) throw new Error(data.message || "Login failed");

            setMessage("✅ Login successful!");
        } catch (error) {
            setMessage("❌ Login failed: " + error.message);
            console.error("Login error:", error);
        }
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>
            {message && <p className="message">{message}</p>}
            <form onSubmit={handleSubmit} className="auth-form">
                <input type="email" name="email" onChange={handleChange} placeholder="Email" required />
                {errors.email && <span className="error">{errors.email}</span>}

                <input type="password" name="password" onChange={handleChange} placeholder="Password" required />
                {errors.password && <span className="error">{errors.password}</span>}

                <button type="submit">Login</button>
            </form>

            <p className="auth-footer">
                Don't have an account? <a href="/signup">Sign Up</a>
            </p>
        </div>
    );
};

export default Login;
