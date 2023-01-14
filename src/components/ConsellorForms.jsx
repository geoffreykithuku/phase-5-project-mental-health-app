import React, { useState } from "react";
import "./PatientForms.css";
import ConsellorLogin from "./CounsellorLogin";
import ConsellorSignup from "./ConsellorSignup";

const ConsellorForms = () => {
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
            <Login onFormSwitch={toggleForm} />
          ) : (
            <Signup onFormSwitch={toggleForm} />
          )}
        </div>
      </div>
    </>
  );
};

export default ConsellorForms;
