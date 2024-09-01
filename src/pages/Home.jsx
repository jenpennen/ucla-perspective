import { useState } from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "../components/SearchBar";
import BrowseNavBar from "../components/BrowseNavBar";
import "../App.css";

function Home() {
  return (
    <>
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
    </>
  );
}

export default Home;
