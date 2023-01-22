import React, { useState, useNavigate } from "react";
import { Navigate } from "react-router-dom";
import "./NewAppointment.css";
const NewAppointment = ({ setComponent, user }) => {
  const [formData, setformData] = useState({
    appointment_date: "",
    appointment_time: "",
    issue: "",
    status: "Pending",
    prescription: "Unavailable",
    doctor_id: 1,
    patient_id: user.id,
  });
  console.log(formData);

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://mental-health-e5nb.onrender.com/newappointment", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((r) => {
      if (r.ok) {
        window.alert("Appointment created successfully");
        setComponent("appointments");
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
    <div className="appoint-container">
      <form className="appoint-form" onSubmit={handleSubmit}>
        <label htmlFor="date">Date</label>
        <input
          className="ap-input"
          onChange={handleChange}
          type="date"
          name="appointment_date"
          placeholder="Date of appointment"
          id="date"
          value={formData.appointment_date}
        />
        <label htmlFor="time">Time</label>
        <input
          className="ap-input"
          onChange={handleChange}
          type="time"
          name="appointment_time"
          placeholder="Time of appointment"
          id="time"
          value={formData.appointment_time}
        />
        <label htmlFor="issue">Issue</label>
        <textarea
          className="ap-textarea"
          onChange={handleChange}
          value={formData.issue}
          type="text"
          name="issue"
          placeholder="Issue for appointment"
          id="issue"
        />
        <br />
        <button className="ap-button">Book</button>
      </form>
    </div>
  );
};

export default NewAppointment;
