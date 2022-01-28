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
    name: "Monica Dholwani | SDE Intern @ Fivetran",
    label: `O(1) Coding Club helped me achieve this opportunity. My mentors were always there to guide & train me.
    Initially I was not good at coding, I didn't even know what competitive coding is!
    All thanks to CodeRun program which helped me improve my coding skills and achieve a super dream job!`,
    imgPath: "monica.jpeg",
    linkedin: "https://www.linkedin.com/in/monica-dholwani/",
  },
  {
    name: "Halry Bhalodia | SDE-T Intern @ ZS Associates",
    label: `At first, I didn't know where to start so I talked to mentors in O(1), they helped me from the beginning till the time I got placed in a Dream company, and even after that.
    With the help of Coderun, I could set a target for every day to practice coding questions and track my progress which helped me find out my weak topics and suggest related questions for more practice.
    Also, I could secure the Runner up position in Top Women Coders of Regional Challenge by Capgemini by practicing coding questions in coderun.`,
    imgPath: "halry.jpeg",
    linkedin: "https://www.linkedin.com/in/monica-dholwani/",
  },
  {
    name: "Aditya Sharma | SDE Intern @ Persistent",
    label: `I am associated with O(1) coding club for a long time and gained a lot of knowledge regarding coding and placements through it.
    With the help of different sessions conducted by O(1) coding club, I was able to bag dream package placements with offers like SDE at Persistent Systems and SDE-T at ZS associates.
    O1 also helped me in my second year to bag summer internship at Microland Ltd. with their guidance.
    Coderun helped me a lot to prepare for the placement season.`,
    imgPath: "aditya.jpeg",
    linkedin: "https://www.linkedin.com/in/aditya-sharma-0b21a3197/",
  },
  {
    name: "Rohit Doshi | SDE-T Intern @ ZS Associates",
    label: `Back in my 2nd year, I was clueless about what skills were needed to be in a good company.
    Mentors at O(1) Coding Club showed me the path to follow to land a great job.
    What I understood was to trust the process and keep on enhancing my knowledge and expertise on the basics.
    If it weren't for O(1) coding club, I would've known this too late and might not have landed the job that I have now.`,
    imgPath: "rohit.jpeg",
    linkedin: "https://www.linkedin.com/in/rohit-bhavesh-doshi/",
  },
  {
    name: "Tejas Tapas | SDE Intern @ ULA",
    label: `I was a part of the O(1) Coding Club for the last 1 year where I participated in some of their initiatives like CPL, coderun and aptitude series.
    I got to learn in a competitive environment with like-minded students and improve DSA and CP skills.
    The coding question which I solved during the CodeRun program highly benefited me in all companies Online Assessment and Interview rounds.`,
    imgPath: "tejas.jpeg",
    linkedin: "https://www.linkedin.com/in/tejas-sudhir-tapas/",
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: "-40px",
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 250,
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
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  desc: {
    color: "#fff",
  },
  title: {
    color: "#fff",
    fontSize: "25px",
    marginTop: "15px",
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
            <Typography className={classes.title}>
              {data[activeStep].name}
            </Typography>
          </Grid>

          <Grid item xs={10} sm={10}>
            <Typography className={classes.desc}>
              {data[activeStep].label}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      {/*
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
      </AutoPlaySwipeableViews> */}

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
