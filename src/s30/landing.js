import "./App.css";
import Navbar from "./navbar";
import Wave from "./wave";
import Placedat from "../placeddata";
import Lotie from "./lotie";
import { Grid } from "@material-ui/core";
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
        <Grid container spacing={10}>
          <Grid item xs={12} sm={6}>
            <p class="pleft">
              <h1 class="lhead">About the Program</h1>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
              animi, vero in quis, eos maiores pariatur consectetur magni culpa
              similique saepe laborum ipsum commodi quisquam tenetur ullam illum
              molestias sit?
            </p>
          </Grid>

          <Grid
            container
            xs={12}
            sm={6}
            className="black"
            justifyContent="center"
          >
            <Grid className="whitebg curvegrid" container item sm={6} xs={6}>
              <p>
                <h1 class="shead">About the Program</h1>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
                animi, vero in quis, eos maiores pariatur consectetur magni
               
              </p>
            </Grid>
            <Grid className="whitebg curvegrid" container item sm={6} xs={6}>
              <p>
                <h1 class="shead">About the Program</h1>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
                animi, vero in quis, eos maiores pariatur consectetur magni
               
              </p>
            </Grid>
            <Grid className="whitebg curvegrid" container item sm={6} xs={6}>
              <p>
                <h1 class="shead">About the Program</h1>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
                animi, vero in quis, eos maiores pariatur consectetur magni
               
              </p>
            </Grid>
            <Grid className="whitebg curvegrid" container item sm={6} xs={6}>
              <p>
                <h1 class="shead">About the Program</h1>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta
                animi, vero in quis, eos maiores pariatur consectetur magni
                
              </p>
            </Grid>
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
        <Placedat />
      </section>
    
    </div>
  );
}

export default Landing;
