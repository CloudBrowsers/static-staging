import React, { useEffect } from "react";
import "./home.css";
import AOS from "aos";
import "aos/dist/aos.css";
import banner from "../../assets/banner-image.svg";
import { Box } from "@mui/system";

function Home() {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <Box id="home" className="home_container">
      <Box data-aos="fade-left" className="left_section">
        <div>
          <div className="home_text">WELCOME TO CLOUDIFYTESTS</div>
          <div className="cloud_home_text">
            A CLOUD BASED <span>CROSS-BROWSER</span>
            <div>TESTING PLATFORM</div>
          </div>
          <hr />
          <div className="section_bottom">
            Clean and competent testing solutions for your
            <div>
              Selenium <span>Automations</span>
            </div>
          </div>
          <div className="demo_section">
            <a
              target="_blank"
              className="demo"
              href="https://calendly.com/dhingra-sara-1/get-started-with-cloudify-tests?month=2023-04"
            >
              Schedule your free trial
            </a>
          </div>
        </div>
      </Box>

      <Box className="right_section">
        <img src={banner} alt="banner" data-aos="fade-right" className="img" />
      </Box>
    </Box>
  );
}

export default Home;
