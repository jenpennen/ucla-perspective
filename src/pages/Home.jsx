import { useState } from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "../components/SearchBar";
import BrowseNavBar from "../components/BrowseNavBar";
import "../App.css";
import {PropSummary} from "../components/Properties";

function Home() {
  return (
    <body>
      <div className="container">
        <h1>Perspective</h1>
      </div>
      <div className="container">
        <SearchBar />
      </div>
      <div className="browse">
        <h2>Browse</h2>
        <BrowseNavBar />
      </div>
      <div className="directory">
        <h2>Events Directory</h2>
        <p>Click on any date to check out any cool events around!</p>
        <div className="calendar">
          This is a calendar.
        </div>
        <div className="club-listing">
          <PropSummary />
          <Link to="/ClubDirectory">
            <button class="more-button">View on More Events</button>
          </Link>
        </div>
      </div>
    </body>
  );
}

export default Home;
