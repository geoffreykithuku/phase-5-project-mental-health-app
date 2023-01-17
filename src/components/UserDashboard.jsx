import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./UserDashboard.css";
import NewAppointment from "./NewAppointment";
import UserAppointments from "./UserAppointments";
import PatientForms from "./PatientForms"

const UserDashboard = () => {
  const [user, setUser] = useState(null);
  
  const [component, setComponent] = useState("appointments");
  const [click, setClick] = useState(false);

  const newAppointment = () => {
    setClick(!click);
    setComponent("newAppointment");
  };
  const allAppointments = () => {
    setClick(!click);
    setComponent("appointments");
  };
    function handleLogin(user) {
      setUser(user);
    }
  const handleLogout = () => setUser(null);
  if (!user) {
    return <PatientForms  handleLogin={handleLogin}/>
  }
  return (
    <div className="ud-container-fluid">
      <div className="row">
        <div className="ud-nav-container">
          <ul className={click ? "ud-nav-menu active" : "ud-nav-menu"}>
            <li className="ud-nav-item">
              <NavLink
                activeClassName="active"
                className="ud-nav-links"
                onClick={newAppointment}
              >
                New
              </NavLink>
            </li>
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
          <UserAppointments />
        ) : (
          <NewAppointment />
        )}
      </div>
    </div>
  );
};

export default UserDashboard;
