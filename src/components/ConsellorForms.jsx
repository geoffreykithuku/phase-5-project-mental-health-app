import React, { useState } from "react";
import "./PatientForms.css";
import ConsellorLogin from "./CounsellorLogin";
import ConsellorSignup from "./ConsellorSignup";

const ConsellorForms = ({handleLogin}) => {
  const [currentForm, setCurrentForm] = useState("clogin");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <>
      <div className="forms">
        <div className="forms-left">
          <img
            src="https://img.freepik.com/free-vector/human-brain-with-stethoscope-around_1308-101031.jpg?size=626&ext=jpg"
            alt="apartment"
          />
        </div>
        <div className="forms-right">
          {currentForm === "clogin" ? (
            <ConsellorLogin onLogin={handleLogin} onFormSwitch={toggleForm} />
          ) : (
            <ConsellorSignup onLogin={handleLogin} onFormSwitch={toggleForm} />
          )}
        </div>
      </div>
    </>
  );
};

export default ConsellorForms;
