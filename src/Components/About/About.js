import React from 'react';
import { makeStyles , Container } from '@material-ui/core';
import ScrollAnimation from 'react-animate-on-scroll';
import Grid from '@material-ui/core/Grid';

import abouts from '../image/about.svg'


import about from './About.module.css';





const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  
  },
}));

export default function () {
  const classes = useStyles();


  // const writing = useWebAnimations({ ...rollIn });





   


  return (
    <div className={about.container} >
    <div className={classes.root}>
    <Container>
    






      <Grid container spacing={3}>


      <Grid item xs={12} sm={6}>
        
        <div className={about.img}  >
 
            <img className={about.rotate}
            
            src={abouts} alt="" 

            ref={about.ref}
            />

        </div>

   </Grid>


        <Grid item xs={12} sm={6}>
         
        <ScrollAnimation animateIn="swing">
          <div  className={about.content} >
          
                  <h1 className={about.head}>About</h1>
                  <div >
                    <p className={about.para}>

                    My copywriting and UX writing draws on abilities developed in the psychological sciences.
                    <br/>
                    <br/>
                    Expertise in visual perception, behavioral motivation, and decision-making allows me to engineer words that convert customers and guide users.

                    </p>
                  </div>
                </div>

                </ScrollAnimation>
        </Grid>


      </Grid>







      </Container>
    </div>
    </div>
  );
}
