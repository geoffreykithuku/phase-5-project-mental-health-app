import React, { useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import "./CounsellorDashboard.css";
import EditAppointment from "./EditAppointment";
import CounsellorAppointments from "./CounsellorAppointments";
const CounsellorDashboard = () => {
  const navigate = useNavigate();
  const [component, setComponent] = useState("appointments");
  const [click, setClick] = useState(false);

  const editAppointment = () => {
    setComponent("edit");
  };
  const allAppointments = () => {
    setClick(!click);
    setComponent("appointments");
  };
  const handleLogout = () => {};
  return (
    <div className="ud-container-fluid">
      <div className="row">
        <div className="ud-nav-container">
          <ul className={click ? "ud-nav-menu active" : "ud-nav-menu"}>
            <li className="ud-nav-item">
              <NavLink
                activeClassName="active"
                className="ud-nav-links"
                onClick={allAppointments}
              >
                Appointments
              </NavLink>
            </li>

            <li className="ud-nav-item">
              <NavLink
                activeClassName="active"
                className="ud-nav-links"
                onClick={handleLogout}
              >
                Logout
              </NavLink>
            </li>
          </ul>
        </div>
        {component === "appointments" ? (
          <CounsellorAppointments editAppointment={editAppointment} />
        ) : (
          <EditAppointment />
        )}
      </div>
    </div>
  );
};

export default CounsellorDashboard;
