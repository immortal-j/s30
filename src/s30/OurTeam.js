import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import { Grid, Typography } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(35),
    height: theme.spacing(35),
    marginLeft: "55px",
  },
}));

export default function OurTeam() {
  const classes = useStyles();

  return (
    <div>
      <h2 className="lhead">Our Team</h2>
      <Grid container spacing={5}>
        <Grid sm={4} item>
          <Avatar src="/demo-person.jpg" className={classes.large} />
          <Typography style={{ fontSize: "18px" }}>Atharva</Typography>
          <Typography style={{ fontSize: "12px" }}>Lorem epsum</Typography>
          <a href="https://www.linkedin.com/feed/" target="_blank">
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ color: "#2962ff", fontSize: "20px" }}
            ></FontAwesomeIcon>
          </a>
        </Grid>
        <Grid sm={4} item>
          <Avatar src="/demo-person.jpg" className={classes.large} />
          <Typography style={{ fontSize: "18px" }}>Atharva</Typography>
          <Typography style={{ fontSize: "12px" }}>Lorem epsum</Typography>
          <a href="https://www.linkedin.com/feed/" target="_blank">
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ color: "#2962ff", fontSize: "20px" }}
            ></FontAwesomeIcon>
          </a>
        </Grid>
        <Grid sm={4} item>
          <Avatar src="/demo-person.jpg" className={classes.large} />
          <Typography style={{ fontSize: "18px" }}>Atharva</Typography>
          <Typography style={{ fontSize: "12px" }}>Lorem epsum</Typography>
          <a href="https://www.linkedin.com/feed/" target="_blank">
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ color: "#2962ff", fontSize: "20px" }}
            ></FontAwesomeIcon>
          </a>
        </Grid>
      </Grid>
      <br />
      <br />
      <Grid container spacing={5}>
        <Grid sm={4} item>
          <Avatar src="/demo-person.jpg" className={classes.large} />
          <Typography style={{ fontSize: "18px" }}>Atharva</Typography>
          <Typography style={{ fontSize: "12px" }}>Lorem epsum</Typography>
          <a href="https://www.linkedin.com/feed/" target="_blank">
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ color: "#2962ff", fontSize: "20px" }}
            ></FontAwesomeIcon>
          </a>
        </Grid>
        <Grid sm={4} item>
          <Avatar src="/demo-person.jpg" className={classes.large} />
          <Typography style={{ fontSize: "18px" }}>Atharva</Typography>
          <Typography style={{ fontSize: "12px" }}>Lorem epsum</Typography>
          <a href="https://www.linkedin.com/feed/" target="_blank">
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ color: "#2962ff", fontSize: "20px" }}
            ></FontAwesomeIcon>
          </a>
        </Grid>
        <Grid sm={4} item>
          <Avatar src="/demo-person.jpg" className={classes.large} />
          <Typography style={{ fontSize: "18px" }}>Atharva</Typography>
          <Typography style={{ fontSize: "12px" }}>Lorem epsum</Typography>
          <a href="https://www.linkedin.com/feed/" target="_blank">
            <FontAwesomeIcon
              icon={faLinkedin}
              style={{ color: "#2962ff", fontSize: "20px" }}
            ></FontAwesomeIcon>
          </a>
        </Grid>
      </Grid>
    </div>
  );
}
