import React, { useEffect, useState } from "react";
import "./CounsellorAppointments.css";

import { useNavigate, useParams } from "react-router-dom";
const CounsellorAppointments = ({ setComponent, handleEdit}) => {
  const navigate = useNavigate();
  const params = useParams();

  const [app, setAppointments] = useState([]);
  const [approved, setApproved] = useState(false);
 
  useEffect(() => {
    fetch("https://mental-health-e5nb.onrender.com/appointments")
      .then((res) => res.json())
      .then((data) => setAppointments(data));
  }, [approved]);
  const formData = {
    user: "Approved",
  };
  const handleApprove = (a) => {
    fetch(
      `https://mental-health-e5nb.onrender.com/appointments/${a.id}/approve`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    ).then((res) => {
      if (res.ok) {
        alert("Approval successful");
        setApproved(!approved);
      } else {
        alert("Approval unsuccessful");
      }
    });
  };

  return (
    <div className="ca-container">
      <div className="row m-auto justify-center">
        {app.map((ap) => {
          return (
            <div
              key={ap.id}
              className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0 appointment"
              data-aos="zoom-in"
              data-aos-delay="200"
            >
              <div className="icon-box icon-box-green">
                <div className="icon">
                  <i className="bx bx-tachometer"></i>
                </div>
                <h4 className="title">
                  <a href="">Doctor: {ap.doctor.name}</a>
                  <br />
                  <a href="">Patient: {ap.patient.name}</a>
                </h4>
                <p className="description">
                  <h5>Day: {ap.appointment_date}</h5>
                  <h5>Time: {ap.appointment_time}</h5>
                  {/* <h5>Issue: {ap.issue}</h5> */}
                  <h5>Status: {ap.status}</h5>
                  {/* {ap.prescription ? (
                    <h5>Prescription: {ap.prescription}</h5>
                  ) : (
                    <h5>Prescription: Unavailable</h5>
                  )} */}
                  {/* <button
                    className={
                      ap.status === "Approved" || ap.status === "Complete"
                        ? "disabled"
                        : "cancel"
                    }
                  >
                    Reschedule
                  </button>
                  <button
                    className={
                      ap.status === "Approved" || ap.status === "Complete"
                        ? "disabled"
                        : "approve"
                    }
                    onClick={() => handleApprove(ap)}
                  >
                    Approve
                  </button>

                  <button
                    onClick={() => {
                      handleEdit(ap.id);
                      setComponent("edit");
                    }}
                    className={
                      ap.status === "Complete"
                        ? "disabled"
                        : "edit"
                    }
                  >
                    Start
                  </button> */}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CounsellorAppointments;
