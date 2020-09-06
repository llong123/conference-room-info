import React from "react";
import moment from "moment";

function IncomingMeetings({ meetingDatas, timeFromDateString }) {
  let todayMeetings = meetingDatas.filter(
    (x) => new Date(x.startDate).toDateString() === new Date().toDateString()
  );

  let sortedData = todayMeetings
    .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))
    .filter((x) => new Date(x.startDate) > new Date())
    .slice(0, 3);

  function NextMeetings() {
    return sortedData.map((x, index) => (
      <div key={index}>
        <span>
          {moment(x.startDate).format("HH:mm")} -{" "}
          {moment(x.endDate).format("HH:mm")}
        </span>
        <span style={{ fontWeight: "bold" }}>{x.title}</span>
        <span
          style={{
            textTransform: "uppercase",
          }}
        >
          {x.organizer}
        </span>
      </div>
    ));
  }

  return (
    <div className="IncomingMeetings">
      <NextMeetings />
    </div>
  );
}

export default IncomingMeetings;
