import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Avatar from "@material-ui/core/Avatar";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const data = [
  {
    name: "Rishikesh",
    label:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod tincidunt tortor ut faucibus. Proin ultricies lectus at fermentum convallis. Pellentesque molestie purus id urna lacinia convallis condimentum in nisi. ",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    name: "Rishikesh",
    label:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod tincidunt tortor ut faucibus. ",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    name: "Rishikesh",
    label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod tincidunt tortor ut faucibus.",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80",
  },
  {
    name: "Rishikesh",
    label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod tincidunt tortor ut faucibus.",
    imgPath:
      "https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    name: "Rishikesh",
    label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod tincidunt tortor ut faucibus.",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 200,
    padding: theme.spacing(1),
    backgroundColor: "#8739f9",
  },
  img: {
    height: 255,
    display: "block",
    maxWidth: 400,
    overflow: "hidden",
    width: "100%",
  },
  stepper: {
    background: "#8739f9",
    minWidth: "300px",
    maxWidth: "300px",
    
  },
  large: {
    width: theme.spacing(8),
    height: theme.spacing(8),
  },
  white: {
    color: "#fff",
  },
}));

function Carousel() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = data.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Grid container justifyContent="center">
          <Grid container item xs={12} sm={12} justifyContent="center">
            <Avatar src={data[activeStep].imgPath} className={classes.large} />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Typography className={classes.white}>
              {data[activeStep].name}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12}>
            <Typography className={classes.white}>
              {data[activeStep].label}
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {data.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? "" : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <Grid container justifyContent="center">
        <MobileStepper
          className={classes.stepper}
          steps={maxSteps}
          position="static"
          variant="dots"
          activeStep={activeStep}
          nextButton={
            <Button
              className={classes.white}
              size="small"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              className={classes.white}
              size="small"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}
            </Button>
          }
        />
      </Grid>
    </div>
  );
}

export default Carousel;
