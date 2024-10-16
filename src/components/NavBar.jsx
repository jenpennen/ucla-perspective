import { Link } from "react-router-dom";
import "../css/NavBar.css";
export function NavBar() {
  return (
    <>
      <div className="container">
        <div className="navbar">
          <Link to="/">
            <button className="home-button">Home</button>
          </Link>
          <Link to="/login">
            <button className="home-button">Login</button>
          </Link>
          <Link to="/signup">
            <button className="home-button">Sign Up</button>
          </Link>
          {/* <Link to="/ClubDirectory">
            <button>Club Directory</button>
          </Link> */}
        </div>
      </div>
    </>
  );
}
