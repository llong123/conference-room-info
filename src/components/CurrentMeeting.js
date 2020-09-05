import React from "react";

function CurrentMeeting({ meetingDatas, currentTimeFromDateString }) {
  let now = new Date();
  const current = meetingDatas.filter(
    (x) => new Date(x.startDate) <= now && new Date(x.endDate) >= now
  )[0];

  function Current() {
    if (current) {
      return (
        <div>
          <p style={{ fontSize: "1.5rem" }}>CURRENT MEETING</p>
          <hr className="spacing" />
          <h1>{current.title}</h1>
          <p>
            {currentTimeFromDateString(current.startDate)} -{" "}
            {currentTimeFromDateString(current.endDate)}
          </p>
          <p>{current.organizer}</p>
        </div>
      );
    } else {
      return (
        <div>
          <h1>Vapaa</h1>
        </div>
      );
    }
  }

  return (
    <div className="CurrentMeeting">
      <Current />
    </div>
  );
}

export default CurrentMeeting;
