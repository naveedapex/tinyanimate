import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import footer from './Footer.module.css'
import fb from '../image/fb.jpg'
import git from '../image/git.png'
import Linked from '../image/in.png'



import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={footer.Container}>
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
        <p className={footer.foot}>Open Source Material</p>
<br/>
<br/>
<br/>
<br/>
       

        </Grid>
       
      </Grid>
      </div>
    </div>
  );
}
