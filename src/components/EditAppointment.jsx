import React, { useState, useNavigate } from "react";
import "./NewAppointment.css";

const EditAppointment = () => {
  const [formData, setformData] = useState({
    date: "",
    time: "",
    issue: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/client/new", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((r) => {
      if (r.ok) {
        window.alert("User created successfully");

        // navigate("/");
      } else {
        window.alert("Something went wrong");
        r.json().then((err) => console.log(err.errors));
      }
    });
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
    <div className="container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="date">Date</label>
        <input
          onChange={handleChange}
          type="date"
          name="date"
          placeholder="Date of appointment"
          id="date"
          value={formData.date}
        />
        <label htmlFor="time">Time</label>
        <input
          onChange={handleChange}
          type="time"
          name="time"
          placeholder="Time of appointment"
          id="time"
          value={formData.time}
        />
        <label htmlFor="issue">Issue</label>
        <textarea
          onChange={handleChange}
          value={formData.issue}
          type="text"
          name="issue"
          placeholder="Issue for appointment"
          id="issue"
        />
        <label htmlFor="status">Status</label>
        <input
          onChange={handleChange}
          type="status"
          name="status"
          placeholder="Status of appointment"
          id="status"
          value={formData.status}
        />
        <label htmlFor="notes">Prescription</label>
        <textarea
          onChange={handleChange}
          type="text"
          name="notes"
          placeholder="Prescription"
          id="status"
          value={formData.status}
        />
        <button>Update Appointment</button>
      </form>
    </div>
  );
};

export default EditAppointment;
