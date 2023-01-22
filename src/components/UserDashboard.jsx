import React, { useState, useEffect } from "react";
import { Navigate, NavLink, useNavigate, useParams } from "react-router-dom";
import "./UserDashboard.css";
import NewAppointment from "./NewAppointment";
import UserAppointments from "./UserAppointments";
import PatientForms from "./PatientForms";
import EditAppointment from "./EditAppointment";

const UserDashboard = () => {
  const [user, setUser] = useState(null);
  const [component, setComponent] = useState("appointments");
  const [click, setClick] = useState(false);

  const newAppointment = () => {
    setClick(!click);
    setComponent("new");
  };
    useEffect(() => {
      // auto-login
      fetch("https://mental-health-e5nb.onrender.com/me").then((r) => {
        if (r.ok) {
          r.json().then((user) => setUser(user));
        }
      });
    }, []);
  const allAppointments = () => {
    setClick(!click);
    setComponent("appointments");
  };
  function handleLogin(user) {
    setUser(user);
  }
  const handleLogout = () => setUser(null);

  if (!user) {
    return <PatientForms handleLogin={handleLogin} />;
  }
  return (
    <div className="ud-container-fluid">
      <div className="row">
        <div className="ud-nav-container">
          <ul className={click ? "ud-nav-menu active" : "ud-nav-menu"}>
            <li className="ud-nav-item">
              <button
                activeClassName="active"
                className="ud-nav-links"
                onClick={newAppointment}
              >
                New
              </button>
            </li>
            <li className="ud-nav-item">
              <button
                activeClassName="active"
                className="ud-nav-links"
                onClick={allAppointments}
              >
                Appointments
              </button>
            </li>

            <li className="ud-nav-item">
              <button
                activeClassName="active"
                className="ud-nav-links"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
      {component === "new" ? (
        <NewAppointment user={user} setComponent={setComponent} />
      ) : (
        <UserAppointments user={user} />
      )}
    </div>
  );
};

export default UserDashboard;
