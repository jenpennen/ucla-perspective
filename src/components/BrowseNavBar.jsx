import { Link } from "react-router-dom";
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
    </div>
  );
}
export default BrowseNavBar;
