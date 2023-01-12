import React, { useState } from "react";
import "./forms.css";
import Login from "./Login";
import Signup from "./Signup";
import apartment from "./assets/images/apartment.jpg";
const Forms = () => {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <>
      <div className="forms">
        <div className="forms-left">
          <img src={apartment} alt="apartment" />
        </div>
        <div className="forms-right">
          {currentForm === "login" ? (
            <Login onFormSwitch={toggleForm} />
          ) : (
            <Signup onFormSwitch={toggleForm} />
          )}
        </div>
      </div>
    </>
  );
};

export default Forms;
