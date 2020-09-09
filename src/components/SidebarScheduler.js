import React from "react";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  DayView,
  Appointments,
  CurrentTimeIndicator,
  AppointmentTooltip,
} from "@devexpress/dx-react-scheduler-material-ui";
import { makeStyles } from "@material-ui/core/styles";
import classNames from "clsx";
import moment from "moment";

const useStyles = makeStyles((theme) => ({
  nowIndicator: {
    position: "absolute",
    zIndex: 1,
    left: 0,
    top: ({ top }) => top,
  },
}));

const currentDate = moment();

const TimeIndicator = ({ top, ...restProps }) => {
  const classes = useStyles({ top });
  return (
    <div {...restProps}>
      <div className={classNames(classes.nowIndicator, "circle")} />
      <div className={classNames(classes.nowIndicator, "line")} />
    </div>
  );
};

export default function SidebarScheduler({
  schedulerData,
  setSelected,
  toggleDetailOn,
}) {
  const Appointment = ({ children, style, ...restProps }) => (
    <div>
      <Appointments.Appointment
        {...restProps}
        onClick={(x) => {
          setSelected(x.data);
          toggleDetailOn(true);
        }}
        style={{
          ...style,
          WebkitTextFillColor: "black",
          borderLeftColor: "#FC0",
          textTransform: "capitalize",
          backgroundColor: "white",
          borderRadius: "1px",
          borderLeftWidth: "0.5rem",
          boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.75)",
        }}
      >
        {children}
      </Appointments.Appointment>
    </div>
  );

  const AppointmentContent = ({ children, style, ...restProps }) => (
    <div>
      <Appointments.AppointmentContent {...restProps}>
        {children}
      </Appointments.AppointmentContent>
    </div>
  );

  return (
    <Scheduler data={schedulerData}>
      <ViewState currentDate={currentDate} />
      <DayView startDayHour={7} endDayHour={24} />
      <Appointments
        AppointmentContent={AppointmentContent}
        appointmentComponent={Appointment}
      />
      <AppointmentTooltip />
      <CurrentTimeIndicator
        indicatorComponent={TimeIndicator}
        updateInterval={300}
      />
    </Scheduler>
  );
}
