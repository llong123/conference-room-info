import React from "react";
import {
  Paper,
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  GridList,
  GridListTile,
} from "@material-ui/core";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import moment from "moment";
import TimeLogo from "../icons/time.png";
import PersonLogo from "../icons/person.png";
import DescriptionLogo from "../icons/description.png";

export default function MeetingDetail({ toggleDetailOff, selectedMeeting }) {
  function turnOff() {
    toggleDetailOff(false);
  }

  function Participants() {
    if (!selectedMeeting.Participants) {
      return "";
    }

    return (
      <AccordionDetails style={{ alignItems: "center" }}>
        <GridList cellHeight={50} cols={1}>
          {selectedMeeting.Participants.map((p, index) => (
            <GridListTile
              style={{ display: "inline-flex" }}
              key={index}
              cols={1}
            >
              <Box marginLeft="3rem">
                <AccountCircleOutlinedIcon fontSize="large" />
              </Box>
              <Box marginLeft="1rem">
                <Typography
                  style={{
                    textTransform: "uppercase",
                    fontWeight: "bold",
                    lineHeight: "1",
                    fontFamily: "inherit",
                  }}
                >
                  {p.Name}
                </Typography>
                <Typography
                  style={{ textTransform: "uppercase", fontSize: "smaller" }}
                >
                  {p.Title}
                </Typography>
              </Box>
            </GridListTile>
          ))}
        </GridList>
      </AccordionDetails>
    );
  }

  return (
    <Paper className="Sidebar">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" onClick={turnOff}>
            <ArrowBackIosRoundedIcon
              fontSize="large"
              style={{ color: "white" }}
            ></ArrowBackIosRoundedIcon>
          </IconButton>
          <h3 style={{ color: "black", marginLeft: "2.5rem" }}>
            {selectedMeeting.title}
          </h3>
        </Toolbar>
      </AppBar>
      <Box className="DataBox">
        <img src={TimeLogo} alt="Time Logo" />
        <p className="AccordionText">
          {moment(selectedMeeting.startDate).format("dddd, DD.MM.YYYY")}
        </p>
      </Box>
      <Box className="DataBox">
        <img src={TimeLogo} alt="Time Logo" />
        <p className="AccordionText">
          {moment(selectedMeeting.startDate).format("HH:mm")} -{" "}
          {moment(selectedMeeting.endDate).format("HH:mm")}
        </p>
      </Box>
      <Accordion elevation={0} expanded={true}>
        <AccordionSummary aria-controls="panel1bh-content" id="panel1bh-header">
          <img
            style={{ marginLeft: "1rem" }}
            src={PersonLogo}
            alt="Person Logo"
          />
          <Typography
            style={{
              textTransform: "uppercase",
              padding: "1rem 0 0 2rem",
              fontFamily: "inherit",
            }}
          >
            Participants
          </Typography>
        </AccordionSummary>
        {selectedMeeting.Participants ? <Participants></Participants> : ""}
      </Accordion>
      <Box className="DataBox">
        <img src={DescriptionLogo} alt="Time Logo" />
        <p className="AccordionText">Description</p>
      </Box>
      <Box className="DataBox">
        <p className="descriptionText">{selectedMeeting.Description}</p>
      </Box>
    </Paper>
  );
}
