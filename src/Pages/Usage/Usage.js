import React from "react";
import "./usage.css";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Container } from "@mui/system";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const usage_info = [
  {
    label: "USAGE INFORMATION",
    heading: "Software As A Service(SaaS)",
    desc: "A delivery model in which a software application is hosted by a third-party provider and made available to customers over the Internet. Customers can access the software through a web browser or a mobile app, without the need to install and maintain it on their own local servers or computers.",
  },
  {
    label: "USAGE INFORMATION",
    heading: "On Premise Setup",
    desc: "A software that is installed and runs on a customer’s own local servers or computers. The customer is responsible for setting up, maintaining and upgrading the software, as well as ensuring its proper functioning and security.",
  },
];

const Usage = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = usage_info.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  return (
    <div className="usag" id="usage">
      <Container maxWidth="sm" className="usage_container">
        <Paper square elevation={0} className="paper" data-aos="fade-up">
          <Typography component={"p"}>
            {usage_info[activeStep].label}
          </Typography>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
          className="autoplay"
          data-aos="fade-up"
        >
          {usage_info.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <div className="step">
                  <div className="heading">{step.heading}</div>
                  <div className="desc">{step.desc}</div>
                </div>
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          style={{
            display: "flex",
            justifyContent: "center",
            background: "#ecf5ff",
          }}
        />
      </Container>
    </div>
  );
};

export default Usage;
