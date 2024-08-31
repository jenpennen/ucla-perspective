import { Link } from "react-router-dom";
import "./NavBar.css";
export function NavBar() {
  return (
    <>
      <div className="navbar">
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/Login">
          <button>Login</button>
        </Link>
        <Link to="/SignUp">
          <button>Sign Up</button>
        </Link>
        <Link to="/ClubDirectory">
          <button>Club Directory</button>
        </Link>
      </div>
    </>
  );
}
