import React from "react";
import Paper from "@material-ui/core/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  Appointments,
  CurrentTimeIndicator,
} from "@devexpress/dx-react-scheduler-material-ui";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "clsx";

const currentDate = "2020-09-05";

const useStyles = makeStyles((theme) => ({
  nowIndicator: {
    position: "absolute",
    zIndex: 1,
    left: 0,
    top: ({ top }) => top,
  },
}));

const TimeIndicator = ({ top, ...restProps }) => {
  const classes = useStyles({ top });
  return (
    <div {...restProps}>
      <div className={classNames(classes.nowIndicator, "circle")} />
      <div className={classNames(classes.nowIndicator, "line")} />
    </div>
  );
};

const Appointment = ({ children, style, ...restProps }) => (
  <Appointments.Appointment
    style={{
      ...style,
      WebkitTextFillColor: "black",
      borderLeftColor: "#FC0",
      textTransform: "capitalize",
      backgroundColor: "#FFF",
      borderRadius: "1px",
      borderLeftWidth: "0.5rem",
      boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
    }}
  >
    {children}
  </Appointments.Appointment>
);

function Calendar({ schedulerData }) {
  return (
    <Paper className="Paper">
      <Scheduler data={schedulerData}>
        <ViewState currentDate={currentDate} />
        <DayView startDayHour={7} endDayHour={24} />
        <Appointments appointmentComponent={Appointment} />
        <CurrentTimeIndicator
          indicatorComponent={TimeIndicator}
          updateInterval={300}
        />
      </Scheduler>
    </Paper>
  );
}

export default Calendar;
