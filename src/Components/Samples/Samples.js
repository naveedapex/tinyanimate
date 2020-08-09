import React from 'react';
import { makeStyles , Container } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import s1 from '../image/s1.jpg'
import s2 from '../image/s2.jpg'
import s3 from '../image/s3.jpg'
import s4 from '../image/s4.jpg'
import s5 from '../image/s5.jpg'
import s6 from '../image/s6.jpg'
import s7 from '../image/s7.jpg'
import s8 from '../image/s8.jpg'





import sample from './Sample.module.css';



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

export default function () {
  const classes = useStyles();

  return (
    <div className={sample.Container}>
     
    <div className={classes.root}>
    <h1 className={sample.head}> Sample</h1>

    <h1 className={sample.head1}>Useful UX</h1>
    <Container>
   
      <Grid container spacing={3} className={sample.grid}>
      
        <Grid item xs={12} sm={4} className={sample.zoom}>
        
          <Paper className={classes.paper} >

           <img className={sample.img} src={s1} alt=""/>
             <h2>Scripted Chatbot</h2>
             <p>
             Conversation design guidelines such as chatbot personality, flowcharts, and scripts helped me convert complex mattress fitting data into simple dialogue for a scripted chatbot that guides customers in choosing the right mattress for their weight range.
             </p>
             
              <p>Case study</p>

          </Paper>
        </Grid>
        <Grid item xs={12} sm={4} className={sample.zoom}>
          <Paper className={classes.paper}>


          <img className={sample.img} src={s2} alt=""/>
             <h2>User Onboarding</h2>
             <p>
             Here is the first screen in an onboarding process I wrote for a SaaS product. To create a smooth introduction to the product and improve conversion rates, I used reassuring details and informative labels to clear possible uncertainties and reduce ambiguity.
             </p>
            
              <p>See More</p>



          </Paper>
        </Grid>
        <Grid item xs={12} sm={4} className={sample.zoom}>
          <Paper className={classes.paper}>


          <img className={sample.img} src={s3} alt=""/>
             <h2>Product Development</h2>
             <p>
             As the sole UX writer on a product team building the 'Uber of marketing', I wrote and designed web copy, microcopy, notifications, forms, FAQs, sales video script, automated emails, signup page, login page, pricing page, checkout page, and more
             </p>
            
              <p>Case study coming in 2020</p>



          </Paper>
        </Grid>
  



<br/>
<br/>

<Grid item xs={12} sm={4} className={sample.zoom}>
        
        <Paper className={classes.paper} >

         <img className={sample.img} src={s4} alt=""/>
           <h2>Rebranding Campaign</h2>
           <p>
           Here’s a screenshot for a video I wrote, storyboarded, and directed. The aim was to build awareness for an eLearning company. The copy – which inspired the audience to think, feel, and act – helped increase sales by 9.86%.
           </p>
           
            <p>Case study</p>

        </Paper>
      </Grid>
      <Grid item xs={12} sm={4} className={sample.zoom}>
        <Paper className={classes.paper}>


        <img className={sample.img} src={s5} alt=""/>
           <h2>Facebook Ads</h2>
           <p>
           I’ve lost count of how many Facebook ads I’ve written. My general strategy for writing ads with limited space is to make sure the copy focuses on a single, specific thought, and shows empathy. Check out some of my recent ads.
           </p>
          
            <p>See More</p>



        </Paper>
      </Grid>
      <Grid item xs={12} sm={4} className={sample.zoom}>
        <Paper className={classes.paper}>


        <img className={sample.img} src={s6} alt=""/>
           <h2>Explainer Video</h2>
           <p>
           Here’s a screenshot for a video I wrote, storyboarded, and directed. The aim was to build awareness for an eLearning company. The copy – which inspired the audience to think, feel, and act – helped increase sales by 9.86%.
           </p>
          
            <p>Case study coming in 2020</p>



        </Paper>
      </Grid>

      <Grid item xs={12} sm={4} className={sample.zoom} >
        <Paper className={classes.paper}>


        <img className={sample.img} src={s7} alt=""/>
           <h2>YouTube Ad</h2>
           <p>
           Here is Groovysaurus Rex – the company mascot in a 3D animated video advertisement which I wrote, storyboarded, and directed. The ad ran for 30 days and yielded 19 conversions, with a 67% view rate.
           </p>
          
            <p>Case study coming in 2020</p>



        </Paper>
      </Grid>





      <Grid item xs={12} sm={4} className={sample.zoom}>
        <Paper className={classes.paper}>


        <img className={sample.img} src={s8} alt=""/>
           <h2>Pilot Screenplay</h2>
           <p>
           Screenwriting is one of my specialties. My award-winning, original, sci-fi, adult animated, pilot screenplay has successfully been pitched to production companies in the USA and Australia.                                                                                          
           </p>
          
            <p>Case study coming in 2020</p>



        </Paper>
      </Grid>









      
      </Grid>
      </Container>
      </div>
    </div>
  );
}
