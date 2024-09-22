import { Link } from "react-router-dom";
import { FaFolder, FaCalendarAlt, FaHome } from "react-icons/fa";
import styled from "styled-components";
import "./NavBar.css";

const IconContainer = styled.div`
  display: block;
`;
function BrowseNavBar() {
  return (
    <div className="icons-bar">
      <Link to="/ClubDirectory">
        <button className="browse-button">
          <div className="icon-container">
            <FaFolder size={20} className="browse-icons" />
          </div>
          Club Directory
        </button>
      </Link>
      <Link to="/Events">
        <button className="browse-button">
          <div className="icon-container">
            <FaCalendarAlt size={20} className="browse-icons" />
          </div>
          Events
        </button>
      </Link>
      <Link to="/RegisterClub">
        <button className="browse-button">
          <div className="icon-container">
            <FaHome size={25} className="browse-icons" />
          </div>{" "}
          Register Club
        </button>
      </Link>
      <div></div>
    </div>
  );
}
export default BrowseNavBar;
