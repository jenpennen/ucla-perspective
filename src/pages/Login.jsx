import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "../css/Forms.css";

function Login() {
  return (
    <div className="container">
      {" "}
      <h2 className="header">Login</h2>
      <div className="centered-container">
        <div className="form-container">
          <form className="user-form">
            <p className="label">Email</p>
            <input className="form-input" placeholder="Email"></input>
            <p className="label">Password</p>
            <input className="form-input" placeholder="Password"></input>
            <select className="select-role">
              <option value="n/a">Select None</option>
              <option value="user">Student</option>
              <option value="admin">Club Admin</option>
            </select>
            <button className="submit-btn">Log In</button>
          </form>
          <p className="create-account-link">
            Don't have an account? <Link to="/signup"> Create Account</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
