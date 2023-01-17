import React, { useState } from "react";
import { useNavigate } from "react-router";

const ConsellorSignup = (props) => {
  const navigate = useNavigate();
  const [formData, setformData] = useState({
    name: "",
    email: "",
    specialty: "",
    password: "",
    confirm_password: "",
  });

  function handleSubmit(e) {
    // e.preventDefault();
    // fetch("http://localhost:3000/signup", {
    //   method: "POST",
    //   body: JSON.stringify(formData),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // }).then((r) => {
    //   if (r.ok) {
    //     window.alert("User created successfully");

    //     navigate("/");
    //   } else {
    //     window.alert("Something went wrong");
    //     r.json().then((err) => console.log(err.errors));
    //   }
    // });
    navigate("/counsellordashboard")
  }

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
      <form className="signup-form" onSubmit={handleSubmit}>
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
        <label htmlFor="specialty">Specialty</label>
        <input
          onChange={handleChange}
          type="specialty"
          name="email"
          placeholder="Enter your specialty"
          id="specialty"
          value={formData.specialty}
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
          value={formData.confirm_password}
          type="password"
          name="confirm_password"
          placeholder="Confirm your password"
          id="confirm_password"
        />
        <button>Signup</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("clogin")}>
        Already have an account? Login here
      </button>
    </div>
  );
};

export default ConsellorSignup;
