import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./UserDoctorCheck.css";

const UserDoctorCheck = () => {
  const navigate = useNavigate();
  function navUser() {
    navigate("/usersdashboard");
  }
  function navDoc() {
    navigate("/counsellordashboard");
  }

  return (
    <>
      <div className="us-container">
        <div className="row">
          <h3>Are you a doctor or patient?</h3>
          <div className="button-container">
            <button onClick={navUser} className="user">
              Patient
            </button>
            <button onClick={navDoc} className="doctor">
              Doctor
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDoctorCheck;
