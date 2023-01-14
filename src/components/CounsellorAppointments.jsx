import React from "react";
import "./UserAppointment.css";

const CounsellorAppointments = () => {
  return (
    <div>
      <div className="row m-auto justify-center">
        <div
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
              <h5>Day: 5/01/2023</h5>
              <h5>Time: 9090</h5>
              <h5>Issue: counselling</h5>
              <h5>Status: pending</h5>
              <button className="cancel">Cancel</button>
              <button className="edit">Edit</button>
            </p>
          </div>
        </div>
        <div
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
              <h5>Day: 5/01/2023</h5>
              <h5>Time: 9090</h5>
              <h5>Issue: counselling</h5>
              <h5>Status: pending</h5>
              <button className="cancel">Cancel</button>
              <button className="edit">Edit</button>
            </p>
          </div>
        </div>
        <div
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
              <h5>Day: 5/01/2023</h5>
              <h5>Time: 9090</h5>
              <h5>Issue: counselling</h5>
              <h5>Status: pending</h5>
              <button className="cancel">Cancel</button>
              <button className="edit">Edit</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CounsellorAppointments;
