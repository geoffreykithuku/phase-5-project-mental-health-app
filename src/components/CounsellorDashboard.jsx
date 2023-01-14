import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
const CounsellorDashboard = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="navbar">
          <div className="nav-container">
            <NavLink exact to="/" className="nav-logo">
                          Mind<span className="logo1">Ease </span>
              <i className="fas fa-medkit"></i>
            </NavLink>

            <ul className={click ? "nav-menu active" : "nav-menu"}>
            
              <li className="nav-item">
                <NavLink
                  exact
                  to="client/appointments"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Appointments
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  exact
                  to="client/logout"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Logout
                </NavLink>
              </li>
            </ul>
            <div className="nav-icon" onClick={handleClick}>
              <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default CounsellorDashboard;
