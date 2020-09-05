import React from "react";

function IncomingMeetings({ meetingDatas, timeFromDateString }) {
  let todayMeetings = meetingDatas.filter(
    (x) => new Date(x.startDate).toDateString() === new Date().toDateString()
  );

  let sortedData = todayMeetings
    .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))
    .slice(0, 3);

  console.log(sortedData);

  function NextMeetings() {
    return sortedData.map((x, index) => (
      <div key={index}>
        <span>
          {timeFromDateString(x.startDate)} - {timeFromDateString(x.endDate)}
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
