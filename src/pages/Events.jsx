import { useState } from "react";
import styled from "styled-components";
import PropAll from "../components/Properties";
import { SearchBar } from "../components/SearchBar";
import EventCalendar from "../components/EventCalendar";
import "../App.css";

function Events() {
  return (
    <main>
      <div className="container">
        <h1>Upcoming Events</h1>
        <EventCalendar />
      </div>
      <div className="container">
        <h2>No Upcoming Events</h2>
        Tune in for any updates!
      </div>
    </main>
  );
}
export default Events;
