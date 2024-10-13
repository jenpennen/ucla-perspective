import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Forms.css";

function SignUp() {
  return (
    <div className="container">
      <h2>Sign Up</h2>
      <div className="centered-container">
        <div className="form-container">
          <form className="user-form">
            <p className="label">Email</p>
            <input className="form-input" placeholder="Email"></input>
            <p className="label">Create Password</p>
            <input className="form-input" placeholder="Create Password"></input>
            <select className="select-role">
              <option value="n/a">Select None</option>
              <option value="user">User</option>
              <option value="admin">Club Admin</option>
            </select>
            <button className="submit-btn">Create Account</button>
          </form>
          <p className="create-account-link">
            Already have an account? <Link to="/login"> Login</Link>
          </p>
        </div>
      </div>{" "}
    </div>
  );
}

export default SignUp;
