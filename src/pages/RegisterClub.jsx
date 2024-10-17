import React from "react";
import "../App.css";
import "../css/Forms.css";
function RegisterClub() {
  return (
    <div className="container">
      <h1 className="header">Register Club</h1>
      <div className="register-container">
        <div className="form-input">
          <form className="register-form">
            <p className="label">UCLA Email</p>
            <input
              className="form-input"
              placeholder="joebruin@ucla.edu"
            ></input>
            <p className="label">Club Name</p>
            <input className="form-input" placeholder="Club Name"></input>
            <p className="label">New or Existing Club?</p>
            <select className="select-role">
              <option value="n/a">N/A</option>
              <option value="new">New</option>
              <option value="existing">Existing</option>
            </select>
            <p className="label">Club Description</p>
            <textarea
              className="club-description-text"
              placeholder="Club Description"
            ></textarea>
            <button className="submit-btn">Register Club</button>
          </form>
        </div>
      </div>
    </div>
  );
}
export default RegisterClub;
