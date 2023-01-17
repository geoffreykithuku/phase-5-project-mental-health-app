import React, { useState, useNavigate } from "react";
import "./EditAppointment.css";
import Appointments from "../data";
import { useParams } from "react-router-dom";
const EditAppointment = () => {
  const params = useParams();
  const app = Appointments.find((app) => app.id === params.id);
  const [formData, setformData] = useState(app);
  console.log(app);

  function handleSubmit(e) {
    // e.preventDefault();
    // fetch("http://localhost:3000/client/new", {
    //   method: "POST",
    //   body: JSON.stringify(formData),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // }).then((r) => {
    //   if (r.ok) {
    //     window.alert("User created successfully");
    //     // navigate("/");
    //   } else {
    //     window.alert("Something went wrong");
    //     r.json().then((err) => console.log(err.errors));
    //   }
    // });
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
    <div className="ea-container">
      <form className="ea-form" onSubmit={handleSubmit}>
        <label htmlFor="date">Date</label>
        <input
          className="ea-input"
          onChange={handleChange}
          type="text"
          name="date"
          placeholder="Date of appointment"
          id="date"
          value={formData.date}
        />
        <label htmlFor="time">Time</label>
        <input
          className="ea-input"
          onChange={handleChange}
          type="text"
          name="time"
          placeholder="Time of appointment"
          id="time"
          value={formData.time}
        />
        <label htmlFor="issue">Issue</label>
        <textarea
          className="ea-textarea"
          onChange={handleChange}
          value={formData.issue}
          type="text"
          name="issue"
          placeholder="Issue for appointment"
          id="issue"
        />
        <label htmlFor="status">Status</label>
        <input
          className="ea-input"
          onChange={handleChange}
          type="status"
          name="status"
          placeholder="Status of appointment"
          id="status"
          value={formData.status}
        />
        <label htmlFor="notes">Prescription</label>
        <textarea
          className="ea-textarea"
          onChange={handleChange}
          type="text"
          name="notes"
          placeholder="Prescription"
          id="status"
          value={formData.prescription}
        />
        <br />
        <button className="ea-button">Complete Appointment</button>
      </form>
    </div>
  );
};

export default EditAppointment;
