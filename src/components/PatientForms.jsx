import React, { useState } from "react";
import "./PatientForms.css";
import Login from "./Login";
import Signup from "./Signup";

const Forms = ({handleLogin}) => {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <>
      <div className="forms">
        <div className="forms-left">
          <img
            src="https://img.freepik.com/free-vector/font-design-talk-mental-health_1308-99574.jpg?size=626&ext=jpg"
            alt="apartment"
          />
        </div>
        <div className="forms-right">
          {currentForm === "login" ? (
            <Login onLogin={handleLogin} onFormSwitch={toggleForm} />
          ) : (
            <Signup onLogin={handleLogin} onFormSwitch={toggleForm} />
          )}
        </div>
      </div>
    </>
  );
};

export default Forms;
