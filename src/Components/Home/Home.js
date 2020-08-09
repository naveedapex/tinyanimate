import React from 'react';
import { makeStyles , Container , Button ,Box} from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import intro1 from '../image/intro1.jpg'
import ScrollAnimation from 'react-animate-on-scroll';


import home from './Home.module.css';
import useWebAnimations from "@wellyshen/use-web-animations";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    

  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
  
  },
}));

export default function Home() {
  const classes = useStyles();


  const header = useWebAnimations({
    keyframes: {
      transform: "translateY(100px)",
    },
    timing: {
      duration: 2500, // Run for 1000ms
      iterations: Infinity, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
  });

 


  return (
    <div className={home.HomeContainer}>
    <div className={classes.root}>
    <Container>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
         
        <ScrollAnimation animateIn="bounceInDown "> 
          <div className={home.content} >
                  <h1 className={home.heading}>A Tiny Animation makes the Web eye catching!</h1>
                  <div className={home.paragraph}>
                    <p>Your company’s website isn’t just a digital business card or a few brush strokes here and there. It’s an essential sales channel, and it has rules. You need it to survive in the jungle of business.</p>
                  </div>
                  <div className={home.button}>
                    <Button variant="contained" className={home.btn}>Send a Message</Button>
                  </div>
                </div>

        </ScrollAnimation>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Box component="section">   
            <div className={home.animation} >
              <Box component="div">
               
                <img 
                className={home.Brain}
                src={intro1} alt="Brain" 
                ref={header.ref}
                width={400}

                />
               
               

              </Box>
            </div>
          </Box>
       </Grid>
      </Grid>

      </Container>
    </div>
    </div>
  );
}
