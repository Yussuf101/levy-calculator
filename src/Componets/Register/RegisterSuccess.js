import React from "react";
import "./SignUp.css";
import { Link } from "react-router-dom";

const RegisterSuccess = () => {
  const logoStyle = {
    color: "blue",
    textDecoration: "none",
    fontSize: "80px",
    marginRight: "200px",
    display: "flex",
    justifyContent: "flex-end",
  };
  return (
    <div className="register-success-content">
      <Link className="close-btn" style={logoStyle} to="/">
        ×
      </Link>
      <div classname="success-title-container">
        <h1 className="register-success-title">Welcome to Code Nation Apprentiship levy calculator</h1>
      </div>
      <div className="success-img"></div>
    </div>
  );
};

export default RegisterSuccess;
