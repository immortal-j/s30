import "../App.css";
import Navbar from "./navbar";
import Wave from "./wave";
import Placedat from "../placeddata";
import Lotie from "./lotie";
import { Grid, Typography } from "@material-ui/core";
import Card from './card';
import IncomeAgreement from './incomeAgreement';
import Testimonial from "./Testimonial";
import OurTeam from './OurTeam'
import Footer from './Footer'

function Landing() {
  return (
    <div>
      <div class="navsection">
        <Navbar />
      </div>

      <section class="section1">
        <div className="pos1">
          <Lotie />
        </div>
        <div className="pos2">
          <Lotie />
        </div>
        <h1 class="lhead purple">Super 30</h1>
        <p className="shead">
          A 6 month long, rigorous, online program designed by industry experts,
          we provide in-depth access to an industry tested curriculum. Taught by
          live instructors, with continuous mentor support & flexible timings,
          this program doesn’t require any coding background. With a strong
          focus on imparting industry relevant skills, we will help you land a
          job in your dream product based company.
        </p>

        <Wave />
      </section>
      <section class="purplebg section2">
        <Grid container justifyContent="center" spacing={6}>
        <Grid item xs={6} sm={3}>
        <p class="placedhead mar10 pcenter">1000+</p>
        <p class="placedsub mar10 pcenter">Hours of coding</p>
        </Grid>
        <Grid item xs={6} sm={3}>
        <p class="placedhead mar10 pcenter">400+</p>
        <p class="placedsub mar10 pcenter">DSA Questions</p>
        </Grid>
        <Grid item xs={6} sm={3}>
        <p class="placedhead mar10 pcenter">100+</p>
        <p class="placedsub mar10 pcenter">Coding Tests</p>
        </Grid>
        <Grid item xs={6} sm={3}>
        <p class="placedhead mar10 pcenter">30+</p>
        <p class="placedsub mar10 pcenter">Project Review Sessions</p>
        </Grid>

        </Grid>
      </section>

      <section className="section3">
        <div class="wave3">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
       
      <Grid container justifyContent="center" spacing={6}>
      <Grid sm={12}>
      
        <p class="lhead black mar80">Features</p>
       
        <Typography  class="shead black mar30">
          A 6 month long, rigorous, online program designed by industry experts,
          we provide in-depth access to an industry tested curriculum. 
        </Typography>
      </Grid>
        <Grid item sm={4}>
          <Card />
        </Grid>
        <Grid item sm={4}>
          <Card/>
        </Grid>
        <Grid item sm={4}>
          <Card/>
        </Grid>
        <Grid item sm={4}>
          <Card/>
        </Grid>
        <Grid item sm={4}>
          <Card/>
        </Grid>
        <Grid item sm={4}>
          <Card/>
        </Grid>
        
      </Grid>
      
      </section>
     
      <section className="section4" >
      <Grid sm={12}>
        <p style={{fontSize: '60px',fontWeight: '800'}} >Income Sharing Agreement</p>
        <Typography style={{fontSize: '20px',fontWeight: '600',margin:'50px'}} >
        Our fees plan follow an Income Sharing Agreement (ISA) model through which tuition fees is paid after getting a job. Total fees is capped and 
        remains same even if you get a very high package. 
        We make money only if you have a successful career after finishing the program.
        </Typography>
       
      </Grid>
        <Grid container>
          <Grid sm={4}></Grid>
        <Grid sm={4}>
        
          <IncomeAgreement />
        </Grid>
        <Grid sm={4}></Grid>
        </Grid>
      
      </section>
     
      <section className="section6" >
        <OurTeam />
      </section>
      <section className="section5">
        <Testimonial />
      </section>
      <br/><br/><br/>
      <Footer />     
    </div>
  );
}

export default Landing;
