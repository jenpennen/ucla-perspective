import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import styled from "styled-components";
import "../css/Calendar.css";
import { PropSummary } from "../components/Properties";
import { Link } from "react-router-dom";
const CalendarContainer = styled.div`
  max-width: fit-content;
  margin: auto;
  display: inline-block;
  margin-top: 20px;
  padding: 10px;
  border-radius: 3px;
`;
// import "../App.css";
export default function EventCalendar() {
  return (
    <CalendarContainer>
      <Calendar />
      <Link to="/ClubDirectory">
        <button className="button">View More on Events</button>
      </Link>
      {/* <div className="container">
        <PropSummary />
      </div> */}
    </CalendarContainer>
  );
}
