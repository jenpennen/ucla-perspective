import { Link } from "react-router-dom";
import { FaFolder, FaCalendarAlt, FaHome } from "react-icons/fa";
import styled from "styled-components";
import "../css/NavBar.css";

function BrowseNavBar() {
  return (
    <div className="icons-bar">
      <Link to="/club-directory">
        <button className="browse-button">
          <div className="icon-container">
            <FaFolder size={50} className="browse-icons" />
          </div>
          Club Directory
        </button>
      </Link>
      <Link to="/events">
        <button className="browse-button">
          <div className="icon-container">
            <FaCalendarAlt size={50} className="browse-icons" />
          </div>
          Events
        </button>
      </Link>
      <Link to="/register-club">
        <button className="browse-button">
          <div className="icon-container">
            <FaHome size={50} className="browse-icons" />
          </div>{" "}
          Register Club
        </button>
      </Link>
      <div></div>
    </div>
  );
}
export default BrowseNavBar;
