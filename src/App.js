import React from "react";
import "./App.css";
import CurrentMeeting from "./components/CurrentMeeting";
import IncomingMeetings from "./components/IncomingMeetings";
import Calendar from "./components/Calendar";

function App() {
  const meetingDatas = require("./data/meetings.json").map((x) => {
    return {
      startDate: x.StartTime,
      endDate: x.EndTime,
      title: x.Subject,
      organizer: x.Organizer,
      participants: x.Participants,
      description: x.Description,
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
