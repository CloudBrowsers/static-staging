import React, { useEffect } from "react";
import "./home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import banner from "../../assets/banner-image.svg";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <Box id="home" className="home_container">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} className="left_section">
          <div>
            <div className="home_text">
              A CLOUD BASED
              <br />
              CROSS-BROWSER <br />
              TESTING PLATFORM
            </div>
            <div className="cloud_home_text">
              AUTOMATE YOUR TESTING AT SCALE
            </div>
            <hr />
            <div className="section_bottom">
              <div>
                Effective Testing Solutions for <br /> Selenium and Playwright
                <span> Automations</span>
              </div>
            </div>
            <div className="demo_section">
              <a
                target="_blank"
                className="demo"
                href="https://calendly.com/dhingra-sara-1/get-started-with-cloudify-tests?month=2023-04"
              >
                Schedule your demo
              </a>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} className="right_section">
          <img src={banner} alt="banner" className="img" />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;
