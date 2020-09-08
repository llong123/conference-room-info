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
import NavigateBeforeRoundedIcon from "@material-ui/icons/NavigateBeforeRounded";
import AccountCircleRoundedIcon from "@material-ui/icons/AccountCircleRounded";
import moment from "moment";
import ExpandMoreRoundedIcon from "@material-ui/icons/ExpandMoreRounded";
import TimeLogo from "../icons/time.png";
import PersonLogo from "../icons/person.png";
import DescriptionLogo from "../icons/description.png";

function MeetingDetail({ detailOff, selectedMeeting }) {
  function turnOff() {
    detailOff(false);
  }

  function Participants() {
    if (!selectedMeeting.participants) {
      return "";
    }

    return (
      <GridList cellHeight={50} cols={1}>
        {selectedMeeting.participants.map((p, index) => (
          <GridListTile style={{ display: "inline-flex" }} key={index} cols={1}>
            <Box marginLeft="3rem">
              <AccountCircleRoundedIcon fontSize="large" />
            </Box>
            <Box marginLeft="1rem">
              <Typography
                style={{
                  textTransform: "uppercase",
                  fontWeight: "bold",
                  lineHeight: "1",
                }}
              >
                {p.Name}
              </Typography>
              <Typography style={{ textTransform: "uppercase" }}>
                {p.Title}
              </Typography>
            </Box>
          </GridListTile>
        ))}
      </GridList>
    );
  }

  return (
    <Paper className="Paper">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" onClick={turnOff}>
            <NavigateBeforeRoundedIcon
              style={{ color: "white", marginLeft: "1rem" }}
            ></NavigateBeforeRoundedIcon>
          </IconButton>
          <h3 style={{ color: "black", marginLeft: "2.5rem" }}>
            {selectedMeeting.title}
          </h3>
        </Toolbar>
      </AppBar>
      <Box className="DataBox">
        <img src={TimeLogo} alt="Time Logo" />
        <p>{moment(selectedMeeting.startDate).format("dddd, DD.MM.YYYY")}</p>
      </Box>
      <Box className="DataBox">
        <img src={TimeLogo} alt="Time Logo" />
        <p>
          {moment(selectedMeeting.startDate).format("HH:mm")} -{" "}
          {moment(selectedMeeting.endDate).format("HH:mm")}
        </p>
      </Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreRoundedIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <img
            style={{ paddingLeft: "1rem" }}
            src={PersonLogo}
            alt="Time Logo"
          />
          <Typography
            style={{
              textTransform: "uppercase",
              padding: "1rem 0 0 2rem",
              fontWeight: "500",
            }}
          >
            Participants
          </Typography>
        </AccordionSummary>
        <AccordionDetails style={{ alignItems: "center" }}>
          <Participants></Participants>
        </AccordionDetails>
      </Accordion>
      <Box className="DataBox">
        <img src={DescriptionLogo} alt="Time Logo" />
        <p>Description</p>
      </Box>
      <Box className="DataBox">
        <p
          style={{
            textTransform: "none",
            fontWeight: "lighter",
            padding: "1rem",
            fontStyle: "italic",
            lineHeight: "1.6",
          }}
        >
          {selectedMeeting.description}
        </p>
      </Box>
    </Paper>
  );
}

export default MeetingDetail;
