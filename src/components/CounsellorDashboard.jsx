import React, { useState } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import "./CounsellorDashboard.css";
import EditAppointment from "./EditAppointment";
import CounsellorAppointments from "./CounsellorAppointments";
import ConsellorForms from "./ConsellorForms";
const CounsellorDashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [component, setComponent] = useState("appointments");
  const [click, setClick] = useState(false);

  const editAppointment = () => {
    setComponent("edit");
    // navigate('/counsellordashboard/:id')
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
        return <ConsellorForms handleLogin={handleLogin} />;
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
