import React, { useState, useNavigate, useEffect } from "react";
import "./EditAppointment.css";
import { useParams } from "react-router-dom";
const EditAppointment = ({ id, setComponent }) => {
  const [formData, setformData] = useState([]);

  useEffect(() => {
    fetch(`https://mental-health-e5nb.onrender.com/appointments/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setformData(data);
      });
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    fetch(
      `https://mental-health-e5nb.onrender.com/appointments/${id}/complete`,
      {
        method: "PATCH",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((r) => {
      if (r.ok) {
        window.alert("Appointment completed successfully");
        // navigate("/");
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
    <div className="ea-container">
      <form className="ea-form" onSubmit={handleSubmit}>
        {/* <label htmlFor="date">Date</label>
        <input
          className="ea-input"
          onChange={handleChange}
          type="text"
          name="appointment_date"
          placeholder="Date of appointment"
          id="date"
          value={formData.appointment_date}
        />
        <label htmlFor="time">Time</label>
        <input
          className="ea-input"
          onChange={handleChange}
          type="text"
          name="appointment_time"
          placeholder="Time of appointment"
          id="time"
          value={formData.appointment_time}
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
        /> */}
        <label htmlFor="notes">Prescription</label>
        <textarea
          className="ea-textarea"
          onChange={handleChange}
          type="text"
          name="prescription"
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
