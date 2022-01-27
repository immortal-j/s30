import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Card, Grid } from "@material-ui/core/";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: "59px",
    height: "550px",
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
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 22,
  },
  pos: {
    marginTop: "15px",
    marginBottom: "20px",
    fontSize: "16px",
  },
});

export default function IncomeAgreement() {
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    console.log(open);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid container justifyContent="center" spacing={9}>
      <Grid item sm={6}>
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title}>Plan1</Typography>
            <hr />

            <Typography
              style={{ marginTop: "25px", fontSize: "19px" }}
              variant="h5"
              component="h2"
            >
              Upfront Registration Fees
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              No Registration Fees
            </Typography>

            <hr />

            <Typography
              style={{ marginTop: "25px", fontSize: "19px" }}
              variant="h5"
              component="h2"
            >
              Download the above ISA
            </Typography>
          </CardContent>
          <hr />
          <Typography
            style={{ marginTop: "25px", fontSize: "19px" }}
            variant="h5"
            component="h2"
          >
            Inorder to register  for coderun using plan 1;
          </Typography>
          <Typography
            style={{ marginTop: "25px", fontSize: "19px",textAlign:'left',marginLeft:'20px' }}
            variant="h5"
            component="h2"
          >
            1. download the above isa <br/>2.fill the
            required details in isa<br/> 2.fill the below application form
          </Typography>
          <Button
            size="small"
            variant="contained"
            color="primary"
            style={{
              color: "white",
              backgroundColor: "#8739f9",
              marginTop: "35px",
            }}
            onClick={handleClickOpen}
          >
            Apply Now
          </Button>
        </Card>
      </Grid>
      <Grid item sm={6}>
        <Card className={classes.root}>
          <CardContent>
            <Typography className={classes.title}>Plan2</Typography>
            <hr />

            <Typography
              style={{ marginTop: "25px", fontSize: "19px" }}
              variant="h5"
              component="h2"
            >
              Upfront Registration Fees
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              INR 3000
            </Typography>

            <hr />

            <Typography
              style={{ marginTop: "25px", fontSize: "19px" }}
              variant="h5"
              component="h2"
            >
              Download ISA
            </Typography>
          </CardContent>
          <hr />
          <Typography
            style={{ marginTop: "25px", fontSize: "19px" }}
            variant="h5"
            component="h2"
          >
           Inorder to register  for coderun using plan 2;
          </Typography>
          <Typography
            style={{ marginTop: "25px", fontSize: "19px",textAlign:'left',marginLeft:'20px' }}
            variant="h5"
            component="h2"
          >
            1.upi 3000 inr to upiid() <br/>2. download the above isa <br/>3.fill the
            required details in isa<br/> 4.fill the below application form
          </Typography>
          <Button
            size="small"
            variant="contained"
            color="primary"
            style={{
              color: "white",
              backgroundColor: "#8739f9",
              marginTop: "35px",
            }}
            onClick={handleClickOpen}
          >
            Apply Now
          </Button>
        </Card>
      </Grid>
    </Grid>
  );
}
