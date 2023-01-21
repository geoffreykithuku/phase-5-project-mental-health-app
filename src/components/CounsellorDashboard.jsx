import React, { useState , useEffect} from "react";
import { Navigate, NavLink, useNavigate, useParams } from "react-router-dom";
import CounsellorAppointments from "./CounsellorAppointments";
import "./CounsellorDashboard.css";
import EditAppointment from "./EditAppointment";
import ConsellorForms from "./ConsellorForms";
import MyAppointments from "./MyAppointments";
const CounsellorDashboard = () => {
  const [component, setComponent] = useState("appointments");
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [click, setClick] = useState(false);
  const allAppointments = () => {
    setClick(!click);
    setComponent("appointments");
  };
  const [id, setId] = useState(null);
  function handleEdit(a_id) {
    setId((prev) => (prev = a_id));
  }
  function myAppoints() {
    setComponent("myappoints");
  }
  useEffect(() => {
    // auto-login
    fetch("http://localhost:3000/cme").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  function handleLogin(user) {
    setUser(user);
  }
  const handleLogout = () => {
    fetch("http://localhost:3000/clogout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  };

  if (!user) {
    return <ConsellorForms handleLogin={handleLogin} />;
  }

  return (
    <div className="cd-container-fluid">
      <div className="row">
        <div className="cd-nav-container">
          <ul className={click ? "cd-nav-menu active" : "cd-nav-menu"}>
            <li className="cd-nav-item">
              <button
                activeClassName="active"
                className="cd-nav-links"
                onClick={myAppoints}
              >
                My Appointments
              </button>
            </li>

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

      {component === "appointments" ? (
        <CounsellorAppointments
          handleEdit={handleEdit}
          setComponent={setComponent}
          user={user}
        />
      ) : component === "edit" ? (
        <EditAppointment id={id} setComponent={setComponent} />
      ) : (
        <MyAppointments
          setComponent={setComponent}
          user={user}
          handleEdit={handleEdit}
        />
      )}
    </div>
  );
};

export default CounsellorDashboard;
