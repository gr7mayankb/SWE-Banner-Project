import React, { useState } from "react";
import "./login.css";
import { redirect, useNavigate } from "react-router-dom";

const Login = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const LoginHandler = (e) => {
    localStorage.setItem("role", role);
    localStorage.setItem("name", name);
    e.preventDefault();
    if (role === "Admin") {
      navigate("/admin");
    } else if (role === "User") navigate("/banner");
  };

  return (
    <>
      <div className="loginForm">
        <div className="wrapper-login">
          <form action="submit">
            <h1>Login</h1>
            <div className="input-box-login">
              <input
                type="text"
                placeholder="Enter Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="input-box-login">
              <input
                type="text"
                placeholder="Type User for User Admin For Admin"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </div>
            <button className="btn-login" type="submit" onClick={LoginHandler}>
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
