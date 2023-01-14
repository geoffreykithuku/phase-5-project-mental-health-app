import React, { useState } from "react";
import "./Forms.css";
import Login from "./Login";
import Signup from "./Signup";

const Forms = () => {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <>
      <div className="forms">
        <div className="forms-left">
          <img
            src="https://images.pexels.com/photos/4672710/pexels-photo-4672710.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="apartment"
          />
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
