import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
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
import MeetingDetail from "./MeetingDetail";

function Calendar({ schedulerData, ...props }) {
  const [showDetail, enableDetail] = useState(false);
  const currentDate = moment();
  const [selectedMeeting, setSelected] = useState();

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
    <div>
      <Appointments.Appointment
        {...restProps}
        onClick={(x) => {
          setSelected(x.data);
          enableDetail(true);
        }}
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
    </div>
  );

  const AppointmentContent = ({ children, style, ...restProps }) => (
    <div>
      <Appointments.AppointmentContent {...restProps}>
        {children}
      </Appointments.AppointmentContent>
    </div>
  );

  function Sidebar(props) {
    const show = props.showDetail;
    console.log(show);
    if (show) {
      return (
        <MeetingDetail
          selectedMeeting={selectedMeeting}
          detailOff={enableDetail}
        ></MeetingDetail>
      );
    } else {
      return (
        <Paper className="Paper">
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
        </Paper>
      );
    }
  }

  return <Sidebar showDetail={showDetail}></Sidebar>;
}

export default Calendar;
