import { useState } from "react";
import { Link } from "react-router-dom";
import { SearchBar } from "../components/SearchBar";
import BrowseNavBar from "../components/BrowseNavBar";
import Club from "../components/Club";
import "../App.css";

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
          <Club tag="Social" name="Disney Club" desc="Princess and the Frog Movie Night" info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, sequi dolorem? Illo, eaque. Quidem possimus neque nam voluptas sunt sed incidunt! Aut voluptatem neque facilis iure nam, error et magni. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laboriosam dignissimos ducimus voluptatibus. Molestiae enim animi corrupti ipsa doloribus labore suscipit magnam cumque, itaque, asperiores fuga beatae et facilis voluptatum esse!"/>
          <Club tag="Career Development" name="UCLA DevX" desc="Boba Social at ShareTea" info="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, minus modi. Earum cumque, eos in voluptatum ex omnis, nesciunt dolore doloribus rerum nobis voluptatibus temporibus iste quo iure ab. Repellat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat cupiditate labore nemo maiores voluptates architecto pariatur, repellat voluptatibus, earum ducimus quos illo similique! Dicta fugiat id sunt eius inventore provident."/>
          <button class="more-button">View on More Events</button>
        </div>
      </div>
    </body>
  );
}

export default Home;
