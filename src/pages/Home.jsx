import { useState } from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "../components/SearchBar";
import BrowseNavBar from "../components/BrowseNavBar";
import "../App.css";
import "../components/NavBar.css";
// import { PropSummary } from "../components/Properties";
import EventCalendar from "../components/EventCalendar";
import Footer from "../components/Footer";
function Home() {
  return (
    <main>
      <div className="container">
        <h1>Perspective</h1>
      </div>
      <div className="container">
        <SearchBar />
      </div>
      <div className="container">
        <hr className="browse-line" />
        <BrowseNavBar />
      </div>
      <div className="container">
        <h2>Events Directory</h2>
        <p>Click on any date to check out any cool events around!</p>
        <div className="container">
          <EventCalendar />
        </div>
        <Link to="/events">
          <button className="button">View More on Events</button>
        </Link>
      </div>
    </main>
  );
}

export default Home;
