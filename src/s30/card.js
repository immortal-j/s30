import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    "&:hover":{
        // backgroundColor:'blue',
        marginTop:'-10px',
        border: '1px solid transparent',
        borderImage: 'linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%)',
        borderImageSlice: '1',
        animation:'$myEffect 3000ms linear infinite',
       
    }
  },
  "@keyframes myEffect": {
    "0%": {
        borderImage: 'linear-gradient(to bottom right, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%)',
        borderImageSlice: '1',
    },
    "10%": {
        borderImage: 'linear-gradient(to bottom right, #b827fc 10%, #2c90fc 35%, #b8fd33 60%, #fec837 85%, #fd1892 10%)',
        borderImageSlice: '1',
    },
    "20%": {
        borderImage: 'linear-gradient(to bottom right, #b827fc 20%, #2c90fc 45%, #b8fd33 70%, #fec837 95%, #fd1892 20%)',
        borderImageSlice: '1',
    },
    "30%": {
        borderImage: 'linear-gradient(to bottom right, #b827fc 30%, #2c90fc 55%, #b8fd33 80%, #fec837 5%, #fd1892 30%)',
        borderImageSlice: '1',
    },
    "40%": {
        borderImage: 'linear-gradient(to bottom right, #b827fc 40%, #2c90fc 65%, #b8fd33 90%, #fec837 15%, #fd1892 40%)',
        borderImageSlice: '1',
    },
    "50%": {
        borderImage: 'linear-gradient(to bottom right, #b827fc 50%, #2c90fc 75%, #b8fd33 100%, #fec837 25%, #fd1892 50%)',
        borderImageSlice: '1',
    },
    "60%": {
        borderImage: 'linear-gradient(to bottom right, #b827fc 60%, #2c90fc 85%, #b8fd33 10%, #fec837 35%, #fd1892 60%)',
        borderImageSlice: '1',
    },
    "70%": {
        borderImage: 'linear-gradient(to bottom right, #b827fc 70%, #2c90fc 95%, #b8fd33 20%, #fec837 45%, #fd1892 70%)',
        borderImageSlice: '1',
    },
    "80%": {
        borderImage: 'linear-gradient(to bottom right, #b827fc 80%, #2c90fc 5%, #b8fd33 30%, #fec837 55%, #fd1892 80%)',
        borderImageSlice: '1',
    },
    "90%": {
        borderImage: 'linear-gradient(to bottom right, #b827fc 90%, #2c90fc 15%, #b8fd33 40%, #fec837 65%, #fd1892 90%)',
        borderImageSlice: '1',
    },
    
    // "100%": {
    //     borderImage: 'linear-gradient(to bottom left, #b827fc 0%, #2c90fc 25%, #b8fd33 50%, #fec837 75%, #fd1892 100%)',
    //     borderImageSlice: '1',
    // }
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography>
       
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
     
    </Card>
  );
}
