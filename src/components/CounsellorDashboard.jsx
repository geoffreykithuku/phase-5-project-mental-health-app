import React, { useState } from "react";
import { Navigate, NavLink, useNavigate, useParams } from "react-router-dom";
import CounsellorAppointments from "./CounsellorAppointments";
import "./CounsellorDashboard.css";
import EditAppointment from "./EditAppointment";
const CounsellorDashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const { id } = useParams();
  const allAppointments = () => {
    setClick(!click);
    navigate(`/counsellordashboard/appointments`);
  };

  // function handleLogin(user) {
  //   setUser(user);
  // }
  const handleLogout = () => setUser(null);
  // if (!user) {
  //   return <ConsellorForms handleLogin={handleLogin} />;
  // }
  return (
    <div className="cd-container-fluid">
      <div className="row">
        <div className="cd-nav-container">
          <ul className={click ? "cd-nav-menu active" : "cd-nav-menu"}>
            <li className="cd-nav-item">
              <button
                activeClassName="active"
                className="cd-nav-links"
                onClick={allAppointments}
              >
                Appointments
              </button>
            </li>

            <li className="cd-nav-item">
              <button
                activeClassName="active"
                className="cd-nav-links"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
      {id ? <EditAppointment /> : <CounsellorAppointments />}
    </div>
  );
};

export default CounsellorDashboard;
