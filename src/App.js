import React from "react";
import "./App.css";
import CurrentMeeting from "./components/CurrentMeeting";
import IncomingMeetings from "./components/IncomingMeetings";
import Calendar from "./components/Sidebar";

function App() {
  const meetingDatas = require("./data/meetings.json").map((x) => {
    return {
      ...x,
      startDate: x.StartTime,
      endDate: x.EndTime,
      title: x.Subject,
    };
  });

  return (
    <div className="container">
      <CurrentMeeting meetingDatas={meetingDatas}></CurrentMeeting>
      <IncomingMeetings meetingDatas={meetingDatas}></IncomingMeetings>
      <Calendar schedulerData={meetingDatas}></Calendar>
    </div>
  );
}

export default App;
