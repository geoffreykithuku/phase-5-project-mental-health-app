import React from "react";
import "./CounsellorAppointments.css";
import Appointments from "../data";
import { useNavigate, useParams } from "react-router-dom";
const CounsellorAppointments = () => {
  const navigate = useNavigate();
  const params = useParams();
  const handleApprove = () => {
    // approve an appointment
    //  fetch(
    //    `/appointents/${id}``,
    //    {
    //      method: "PATCH",
    //      headers: {
    //        "Content-Type": "application/json",
    //      },
    //      body: JSON.stringify(appointment),
    //    }
    //  )
    //    .then((res) => res.json())
    //    .then((data) => {
    //      navigate(`/contacts/view/${data.id}`);
    //    });
  };
  // const ap = Appointments.find((app) => app.id === params.id);

  return (
    <div className="ca-container">
      <div className="row m-auto justify-center">
        {Appointments.map((ap) => {
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
                  <a href="">Dr. Mathew</a>
                </h4>
                <p className="description">
                  <h5>Day: {ap.date}</h5>
                  <h5>Time: {ap.time}</h5>
                  <h5>Issue: {ap.issue}</h5>
                  <h5>Status: {ap.status}</h5>
                  {ap.prescription ? (
                    <h5>Prescription: {ap.prescription}</h5>
                  ) : (
                    <h5>Prescription: Unavailable</h5>
                  )}
                  <button className="cancel">Reschedule</button>
                  <button onClick={handleApprove} className="approve">
                    Approve
                  </button>

                  <button
                    onClick={() => {
                      navigate(`/counsellordashboard/${ap.id}`);
                    }}
                    className="edit"
                  >
                    Start
                  </button>
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
