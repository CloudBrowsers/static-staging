import { Box } from "@mui/system";
import React from "react";
import "./about.css";
import banner from "../../assets/banner.svg";

const About = () => {
  return (
    <div id="about">
      <div className="about_section">
        <div className="text_about" data-aos="fade-up">
          About Us
        </div>
        <div className="about_container">
          <img
            src={banner}
            alt="banner"
            data-aos="fade-up"
            className="img_about"
          />
          <Box className="about_box" data-aos="fade-up">
            <p className="about_box_text">
              At CloudifyTests, we understand the importance of ensuring your
              applications run seamlessly in the cloud. That's why we've created
              a comprehensive testing solution that leverages our proprietary
              tools to streamline your testing process.
            </p>
            <p className="about_box_text">
              Our platform is built with security and reliability in mind,
              ensuring your data remains protected while we carry out your
              testing requirements. With CloudifyTests, you can access a range
              of testing solutions, including functional, performance, and
              security testing, all designed to meet industry standards and best
              practices.
            </p>
            <p className="about_box_text">
              We believe in providing a personalized testing experience that is
              tailored to your specific needs. That's why we offer scalable and
              customizable testing services, allowing you to choose the services
              that fit your budget and requirements. Our goal is to improve your
              ROI by up to 8x by delivering faster, more accurate, and efficient
              testing solutions.
            </p>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default About;
