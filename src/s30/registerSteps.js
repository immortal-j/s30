import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Grid } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    transition: "0.5s",
    textAlign: "left",
    "&:hover": {
      marginTop: "-10px",
      border: "2px solid transparent",
      borderImageSlice: "1",
      animation: "$myEffect 3000ms linear infinite",
    },
  },
  "@keyframes myEffect": {
    "0%": {
      borderImage:
        "linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%)",
      borderImageSlice: "1",
    },
    "50%": {
      borderImage:
        "linear-gradient(45deg,#fb0094,#00f,#0f0,#ff0,#f00,#fb0094,#00f,#0f0,#ff0,#f00)",
      borderImageSlice: "1",
    },
    "100%": {
      borderImage:
        "linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%)",
      borderImageSlice: "1",
    },
  },
  title: {
    fontSize: "25px",
    fontWeight: 600,
  },
  pos: {
    marginTop: 12,
    fontSize: "18px",
  },
  step: {
    backgroundColor: "#8739f9",
  },
  anc:{
    textDecoration:'none',
    color:'#8739f9',
   
  }
});

export default function RegisterSteps() {
  const classes = useStyles();

  return (
    <Grid sm={12} container justifyContent="center" spacing={3}>
      <Grid sm={4} item>
        <Card className={classes.root}>
          <CardContent>
            <Grid container spacing={3}>
              <Grid
                container
                justifyContent="center"
                item
                sm={2}
                xs={2}
                className={classes.step}
              >
                <Typography
                  variant="h5"
                  component="h2"
                  style={{ margin: "auto" }}
                >
                  1
                </Typography>
              </Grid>
              <Grid item sm={10} xs={10}>
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.title}
                >
                  Pay Upfront Fees
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  className={classes.pos}
                >
                  Pay the upfront fees (if any) to the upi id - <b>xyz@sbi</b>{" "}
                  and take a screenshot for Payment proof.
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid sm={4} item>
        <Card className={classes.root}>
          <CardContent>
            <Grid container spacing={3}>
              <Grid
                container
                justifyContent="center"
                item
                sm={2}
                xs={2}
                className={classes.step}
              >
                <Typography
                  variant="h5"
                  component="h2"
                  style={{ margin: "auto" }}
                >
                  2
                </Typography>
              </Grid>
              <Grid item sm={10} xs={10}>
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.title}
                >
                  Download & Fill ISA
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  className={classes.pos}
                >
                  Download{" "}
                  <a href="https://www.google.com" target="_blank" className={classes.anc}>
                    ISA for Plan A
                  </a>{" "}
                  <b>or</b>{" "}
                  <a href="https://www.google.com" target="_blank" className={classes.anc}>
                    ISA for Plan B
                  </a>
                  <br />
                  <br />
                  Read & Fill the above ISA carefully.
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>

      <Grid sm={4} item>
        <Card className={classes.root}>
          <CardContent>
            <Grid container spacing={3}>
              <Grid
                container
                justifyContent="center"
                item
                sm={2}
                xs={2}
                className={classes.step}
              >
                <Typography
                  variant="h5"
                  component="h2"
                  style={{ margin: "auto" }}
                >
                  3
                </Typography>
              </Grid>
              <Grid item sm={10} xs={10}>
                <Typography
                  variant="h5"
                  component="h2"
                  className={classes.title}
                >
                  Submit Application
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  className={classes.pos}
                >
                  Submit your application in this{" "}
                  <a href="https://www.google.com" target="_blank" className={classes.anc}>
                    Google Form
                  </a>
                  . You will need payment proof (if Plan B) and filled ISA to
                  proceed.
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}
