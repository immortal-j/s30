import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });


const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginBottom: '59px',
    height: "450px",
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 22,
  },
  pos: {
    marginTop: '15px',
    marginBottom: '20px',
    fontSize: '16px'
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
    <Card className={classes.root}>
        <Dialog
    open={open}
    TransitionComponent={Transition}
    keepMounted
    onClose={handleClose}
    aria-labelledby="alert-dialog-slide-title"
    aria-describedby="alert-dialog-slide-description"
  >
    <DialogTitle id="alert-dialog-slide-title">{"Use Google's location service?"}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-slide-description">
        Let Google help apps determine location. This means sending anonymous location data to
        Google, even when no apps are running.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={handleClose} color="primary">
        Agree
      </Button>
    </DialogActions>
  </Dialog>
      <CardContent>
        <Typography className={classes.title} >
          Plan
        </Typography>
        <hr/>

        <Typography style={{marginTop:'25px',fontSize:'19px'}} variant="h5" component="h2">
          Registration Fees
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          No Registration Fees
        </Typography>
        
        <hr/>
        
        <Typography style={{marginTop:'25px',fontSize:'19px'}} variant="h5" component="h2">
          Pay Fees after Placement
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
        Pay tuition fees in 24 equal monthly installments, 
        until you reach the total tution fees cap of ₹2,50,000 + GST
        </Typography>
      </CardContent>
      <hr/>
      <Button  size='small' variant="contained" color="primary" style={{color:'white',backgroundColor:'#8739f9', marginTop:'35px'}}  onClick={handleClickOpen}>
        Apply Now
      </Button>
    </Card>

  );
}
