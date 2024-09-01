import { Link } from "react-router-dom";
// import "@fortawesome/fontawesome-free/css/all.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

function BrowseNavBar() {
  return (
    <div>
      <Link to="/ClubDirectory">
        <button>Club Directory</button>
      </Link>
      <Link to="/Events">
        <button>Events</button>
      </Link>
      <Link to="/RegisterClub">
        <button>Register Club</button>
      </Link>
      <div></div>
    </div>
  );
}
export default BrowseNavBar;
