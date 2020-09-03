import React from "react";
import "./App.css";
import CurrentMeeting from "./components/CurrentMeeting";
import IncomingMeetings from "./components/IncomingMeetings";
import Calendar from "./components/Calendar";

function App() {
  return (
    <div className="container">
      <CurrentMeeting></CurrentMeeting>
      <IncomingMeetings></IncomingMeetings>
      <Calendar></Calendar>
    </div>
  );
}

export default App;
