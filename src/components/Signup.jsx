import React, { useState } from "react";
import { useNavigate } from "react-router";

const Signup = ({ onFormSwitch, onLogin }) => {
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://mental-health-e5nb.onrender.com/signup", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((r) => {
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => console.log(err.errors));
      }
    });
  }
  console.log(formData);

  function handleChange(e) {
    const { name, value } = e.target;
    setformData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  return (
    <div className="auth-form-container">
      <form className="signup-form">
        <label htmlFor="name">Name</label>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          placeholder="Enter your name"
          id="name"
          value={formData.name}
        />
        <label htmlFor="email">Email</label>
        <input
          onChange={handleChange}
          type="email"
          name="email"
          placeholder="Enter your email"
          id="email"
          value={formData.email}
        />
        <label htmlFor="password">Password</label>
        <input
          onChange={handleChange}
          value={formData.password}
          type="password"
          name="password"
          placeholder="Enter your password"
          id="password"
        />
        <label htmlFor="confirm_password">Confirm Password</label>
        <input
          onChange={handleChange}
          value={formData.password_confirmation}
          type="password"
          name="password_confirmation"
          placeholder="Confirm your password"
          id="password_confirmation"
        />
        <button onClick={handleSubmit}>Signup</button>
      </form>
      <button className="link-btn" onClick={() => onFormSwitch("login")}>
        Already have an account? Login here
      </button>
    </div>
  );
};

export default Signup;
