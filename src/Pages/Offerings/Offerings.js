import React, { useState } from "react";
import "./offerings.css";
import { Container, Grid } from "@mui/material";
import dashboard from "../../assets/Dashboard.svg";
import capabilities from "../../assets/Capabilities_page.svg";
import session from "../../assets/Session_page.svg";
import historySession from "../../assets/History_session.svg";
import tunnel from "../../assets/tunnel.svg";
import { Link } from "react-scroll";

const Offerings = () => {
  return (
    <Container id="offerings">
      <div className="container_offering">
        <div data-aos="zoom-in">
          <div className="cloudifyTests">Offerings</div>
          <div className="offering_data">
            <div className="data">
              <Link
                activeClass="active"
                to={"dashboard"}
                spy={true}
                smooth={true}
                duration={700}
                offset={-70}
              >
                Dashboard
              </Link>
              <Link to={"dashboard"}></Link>
            </div>
            <div className="data">
              <Link
                activeClass="active"
                to={"session"}
                spy={true}
                smooth={true}
                duration={700}
                offset={-70}
              >
                Live Session Monitor
              </Link>
            </div>
            <div className="data">
              <Link
                activeClass="active"
                to={"script"}
                spy={true}
                smooth={true}
                duration={700}
                offset={-70}
              >
                Script-Generator
              </Link>
            </div>
            <div className="data">
              <Link
                activeClass="active"
                to={"historySession"}
                spy={true}
                smooth={true}
                duration={700}
                offset={-70}
              >
                History Sessions
              </Link>
            </div>
            <div className="data">
              <Link
                activeClass="active"
                to={"locallyHosted"}
                spy={true}
                smooth={true}
                duration={700}
                offset={-70}
              >
                Locally Hosted Testing
              </Link>
            </div>
          </div>
        </div>

        <div className="mid_data">
          <div className="left_container" data-aos="fade-up" id="dashboard">
            <div className="dashboard">Dashboard</div>
            <div className="dash_text">
              Displays number of running and pending sessions. Provides a graph
              of daily application usage including session completion, abortion,
              errors and timeouts over a date range.
            </div>
          </div>
          <div
            className="right_container"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img src={dashboard} alt="dashboard" className="img_off" />
          </div>
        </div>
        <div className="mid_data" id="session">
          <div
            className="right_container"
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img src={session} alt="sessions" className="img_off" />
          </div>
          <div className="left_container" data-aos="fade-up">
            <div className="dashboard">Live Session Monitor</div>
            <div className="dash_text">
              Have a comprehensive view of all running sessions, with
              information like browser and version, test name, duration ,
              creation time, screen resolution, and options to save video and
              logs.
            </div>
          </div>
        </div>
        <div className="mid_data" id="script">
          <div className="left_container" data-aos="fade-up">
            <div className="dashboard">Script-Generator</div>
            <div className="dash_text">
              The platform allows creation of manual sessions with customizable
              options like browser name and version, screen resolution, timeout,
              saving video and logs and also the option to select specific
              devices.
            </div>
          </div>
          <div
            className="right_container"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img src={capabilities} alt="capabilities" className="img_off" />
          </div>
        </div>
        <div className="mid_data" id="historySession">
          <div
            className="right_container"
            data-aos="flip-right"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img
              src={historySession}
              alt="historySession"
              className="img_off"
            />
          </div>
          <div className="left_container" data-aos="fade-up" id="locallyHosted">
            <div className="dashboard">History Sessions</div>
            <div className="dash_text">
              Users can access past test-cases with retention time feature.
              Search, sort and filter test-cases, and view and download recorded
              videos and logs with a single click.
            </div>
          </div>
        </div>
        <div className="mid_data">
          <div className="left_container" data-aos="fade-up">
            <div className="dashboard">Locally Hosted Testing</div>
            <div className="dash_text">
              Users can access services running on the local system inside
              CloudifyTests cluster for runing automated tests.
            </div>
          </div>
          <div
            className="right_container"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <img src={tunnel} alt="dashboard" className="img_off" />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Offerings;
