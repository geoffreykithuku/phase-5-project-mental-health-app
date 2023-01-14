
import React, { useState } from "react";
import './UserDoctorCheck.css'

const UserDoctorCheck = () => {

  return (
    <>
      <div className="container">
        <div className="row">
          <h3>Are you a doctor or patient?</h3>
          <div className="button-container">
            <button className="user">Patient</button>
            <button className="doctor">Doctor</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDoctorCheck