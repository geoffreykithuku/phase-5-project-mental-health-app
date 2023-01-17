import React, { useState } from "react";

const Login = ({onLogin, onFormSwitch}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((r) => {

      if (r.ok) {
        r.json().then((user) =>onLogin(user));
      } else {
        r.json().then((err) => console.log(err.errors));
      }
    });
  }
  return (
    <div className="auth-form-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          value={email}
          type="email"
          name="email"
          placeholder="Enter your email"
          id="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          type="password"
          name="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          placeholder="Enter your password"
          id="password"
        />
        <button>Login</button>
      </form>
      <button className="link-btn" onClick={() => onFormSwitch("signup")}>
        Don't have an account? Signup here
      </button>
    </div>
  );
};

export default Login;
