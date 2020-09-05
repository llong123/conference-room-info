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
    };
  });

  function getTimeFromDateString(date) {
    let d = new Date(date);
    return d.getHours() + ":" + d.getMinutes();
  }

  return (
    <div className="container">
      <CurrentMeeting
        currentTimeFromDateString={getTimeFromDateString}
        meetingDatas={meetingDatas}
      ></CurrentMeeting>
      <IncomingMeetings
        timeFromDateString={getTimeFromDateString}
        meetingDatas={meetingDatas}
      ></IncomingMeetings>
      <Calendar schedulerData={meetingDatas}></Calendar>
    </div>
  );
}

export default App;
