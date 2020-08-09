import React from 'react';
import { makeStyles , Container } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import services3 from '../image/services3.svg'
import ScrollAnimation from 'react-animate-on-scroll';
import ux from '../image/ux.jpg'
import copywrite from '../image/copywrite.jpg'

import services from './Services.module.css';



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


  const serv = useWebAnimations({
    keyframes: {
      transform: "translatex(30px)",
    },
    timing: {
      duration: 1500, // Run for 1000ms
      iterations: Infinity, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
  });



  const serv1 = useWebAnimations({
    keyframes: {
      transform: "translatex(30px)",
    },
    timing: {
      duration: 1500, // Run for 1000ms
      iterations: Infinity, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
  });



  const serv2 = useWebAnimations({
    keyframes: {
      transform: "translatex(30px)",
    },
    timing: {
      duration: 1500, // Run for 1000ms
      iterations: Infinity, // Repeat once
      direction: "alternate", // Run the animation forwards and then backwards
      easing: "ease-in-out", // Use a fancy timing function
    },
  });






  //  const writing = useWebAnimations({ ...flipInX });

  //  const writing1 = useWebAnimations({ ...backInUp });

  //  const writing2 = useWebAnimations({ ...fadeInRight });





  return (
    <div className={services.container} >
    <div className={classes.root}>
    <Container>
      <Grid container spacing={3}>


      <Grid item xs={12} sm={6}>
        
        <div  >
 
            <img 
            
            src={ux} alt="" 

            ref={serv.ref}
            width={400}
            />

        </div>

   </Grid>


        <Grid item xs={12} sm={6}>
         
        <ScrollAnimation animateIn="rotateIn">
          <div  className={services.content} >
                  <h1 className={services.head}>UX writing</h1>
                  <div >
                    <p className={services.para}>Your company’s website isn’t just a digital business card or a few brush strokes here and there. It’s an essential sales channel, and it has rules. You need it to survive in the jungle of business.</p>
                  </div>
                </div>
          </ScrollAnimation>
        
        </Grid>
                   

      </Grid>






      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
         
        <ScrollAnimation animateIn="fadeInLeft">
          <div  className={services.content} >
                  <h1 className={services.head}>Website Copywriting</h1>
                  <div >
                    <p className={services.para}>Your website is a dialogue with your audience. I capture the essence of your business and communicate it clearly. Carefully considered writing and SEO best practices allow me to craft the perfect user journey online. Let me draw the map that guides users every step of the way from discovery, to consideration, to conversion.</p>
                  </div>
                </div>

        </ScrollAnimation>
        </Grid>

        <Grid item xs={12} sm={6}>
        
            <div  >
     
                <img 
                
                src={copywrite} alt="" 

                ref={serv1.ref}
                width={400}
                />

            </div>
   
       </Grid>
      </Grid>





      <Grid container spacing={3}>


      <Grid item xs={12} sm={6}>
        
        <div  >
 
            <img 
            
            src={services3} alt="" 

            ref={serv2.ref}
            />

        </div>

   </Grid>


        <Grid item xs={12} sm={6}>
         
        <ScrollAnimation animateIn="fadeInRight">
         
          <div  className={services.content} >
                  <h1 className={services.head}>Content writing</h1>
                  <div >
                    <p className={services.para}>Give your business a competitive edge with powerful content that can be targeted to any segment of your audience. No matter how large or complex your project, my custom-built solutions including articles, eDMs, and case studies will help you implement a plan that maximizes your business’s online exposure.</p>
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
