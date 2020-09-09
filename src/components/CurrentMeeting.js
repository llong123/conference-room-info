import React from "react";
import moment from "moment";
import { LinearProgress } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
    width: "30vw",
    display: "inline-block",
    margin: "0 1rem",
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#FC0",
  },
}))(LinearProgress);

function TimeElapsed(currentMeeting) {
  if (!currentMeeting) {
    return 0;
  }

  const totalTime = moment(currentMeeting.endDate).diff(
    moment(currentMeeting.startDate)
  );
  return (moment().diff(moment(currentMeeting.startDate)) / totalTime) * 100;
}

function CurrentMeeting({ meetingDatas }) {
  let [current, updateCurrent] = React.useState(
    meetingDatas
      .filter(
        (x) => moment(x.startDate) <= moment() && moment(x.endDate) >= moment()
      )
      .shift()
  );
  let [elapsed, updateElapsed] = React.useState(TimeElapsed(current));

  React.useEffect(() => {
    const timer = setInterval(() => {
      updateCurrent((current) => {
        current = meetingDatas
          .filter(
            (x) =>
              moment(x.startDate) <= moment() && moment(x.endDate) >= moment()
          )
          .shift();
        return current;
      });
    }, 60000);
    return () => {
      clearInterval(timer);
    };
  }, [meetingDatas]);

  React.useEffect(() => {
    const timer = setInterval(() => {
      updateElapsed(() => {
        return TimeElapsed(current);
      });
    }, 60000);
    return () => {
      clearInterval(timer);
    };
  }, [current]);

  function Current() {
    if (current) {
      return (
        <div>
          <p style={{ fontSize: "1.5rem" }}>CURRENT MEETING</p>
          <hr className="spacing" />
          <h1>{current.title}</h1>

          <div className="elapsedTime">
            <p>{moment(current.startDate).format("HH:mm")}</p>
            <BorderLinearProgress variant="determinate" value={elapsed} />
            <p>{moment(current.endDate).format("HH:mm")}</p>
          </div>
          <p>{current.Organizer}</p>
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
