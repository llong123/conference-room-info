import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import SidebarScheduler from "./SidebarScheduler";
import MeetingDetail from "./MeetingDetail";

export default function Calendar({ schedulerData }) {
  const [showDetail, toggleDetail] = useState(false);
  const [selectedMeeting, setSelected] = useState();

  function Sidebar(props) {
    if (props.showDetail) {
      return (
        <MeetingDetail
          selectedMeeting={selectedMeeting}
          toggleDetailOff={toggleDetail}
        ></MeetingDetail>
      );
    } else {
      return (
        <Paper className="Sidebar">
          <SidebarScheduler
            setSelected={setSelected}
            toggleDetailOn={toggleDetail}
            schedulerData={schedulerData}
          ></SidebarScheduler>
        </Paper>
      );
    }
  }

  return <Sidebar showDetail={showDetail}></Sidebar>;
}
