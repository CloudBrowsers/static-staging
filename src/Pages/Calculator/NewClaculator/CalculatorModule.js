import React, { useEffect, useState } from "react";
import { Container } from "@mui/system";
import "./CalculatorModule.css";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  InputAdornment,
  TextField,
} from "@mui/material";
import { saveAs } from "file-saver";
import Slider, {
  SliderThumb,
  SliderValueLabelProps,
} from "@mui/material/Slider";
import { Divider, styled } from "@mui/material";
import ContactUs from "../../ContactUs/ContactUs";
import { Link } from "react-scroll";
import PDF from "../../../pdf/CloudifyTests .pdf";
import ChoosePlan from "../../../Components/ChoosePlan/ChoosePlan";
import { useDispatch, useSelector } from "react-redux";
import { setIsReset, setNoOfDays } from "../../../store/calculatorSlice";
import SliderComponent from "../../../Components/Slider";

const CalculatorModule = () => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = React.useState(false);
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  React.useEffect(() => {
    setIsActive(windowWidth <= 480);
  }, [windowWidth, isActive]);
  const noOfDays = useSelector((store) => {
    return store.calculatorSlice.noOfDays;
  });
  const isReset = useSelector((store) => {
    return store.calculatorSlice.isReset;
  });
  const expanded = useSelector((store) => {
    return store.calculatorSlice.expanded;
  });
  const [sliderValues, setSliderValues] = useState({
    number: 5,
    day: 5,
    session: 5,
  });

  const [selectPlan, setSelectPlan] = React.useState({
    monthly: false,
    payAsYouGo: false,
    onPremisis: false,
  });

  const { day, session, number } = sliderValues;
  const { monthly, payAsYouGo, onPremisis } = selectPlan;

  const handleChange = (event) => {
    const { name, checked } = event.target;

    // If 'monthly' is selected, set the other two options to false
    if (name === "monthly" && checked) {
      setSelectPlan({
        monthly: true,
        payAsYouGo: false,
        onPremisis: false,
      });
    }
    if (name === "payAsYouGo" && checked) {
      setSelectPlan({
        monthly: false,
        payAsYouGo: true,
        onPremisis: false,
      });
    }
    if (name === "onPremisis" && checked) {
      setSelectPlan({
        monthly: false,
        payAsYouGo: false,
        onPremisis: true,
      });
    }
  };

  const handleChangeInput = (event) => {
    // setNumberOfDays(event.target.value);
  };

  const handleSliderInputChange = (sliderName) => (event, newValue) => {
    setSliderValues((prevValues) => ({
      ...prevValues,
      [sliderName]: newValue,
    }));
  };

  const handleInputChange = (inputName) => (event) => {
    const newValue = event.target.value;
    setSliderValues((prevValues) => ({
      ...prevValues,
      [inputName]: newValue === "" ? "" : Number(newValue),
    }));
  };
  const iOSBoxShadow =
    "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";

  const marks = [
    {
      value: 0,
    },
    {
      value: 500,
    },
    {
      value: 1000,
    },
    {
      value: 1500,
    },
    {
      value: 2000,
    },
  ];

  const IOSSlider = styled(Slider)(({ theme }) => ({
    color: theme.palette.mode === "dark" ? "#69d5ab" : "#69d5ab",
    height: 2,
    padding: "15px 0",
    "& .MuiSlider-thumb": {
      height: "12px",
      width: "12px",
      backgroundColor: "black",
      border: "1px solid #69d5ab",
      boxShadow: " 0 3px 1px rgba(0,0,0,0.1)",
      boxShadow: iOSBoxShadow,
      "&:focus, &:hover, &.Mui-active": {
        boxShadow:
          "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.3),0 0 0 1px rgba(0,0,0,0.02)",
        "@media (hover: none)": {
          boxShadow: iOSBoxShadow,
        },
      },
    },
    "& .MuiSlider-valueLabel": {
      fontSize: 12,
      fontWeight: "normal",
      top: -6,
      backgroundColor: "unset",
      color: theme.palette.text.primary,
      "&:before": {
        display: "none",
      },
      "& *": {
        background: "#69d5ab",
        color: "white",
        width: "43px",
        textAlign: "center",
        borderRadius: "3px",
        color: theme.palette.mode === "dark" ? "#fff" : "black",
      },
    },
    "& .MuiSlider-track": {
      border: "none",
    },
    "& .MuiSlider-rail": {
      opacity: 0.5,
      backgroundColor: "#bfbfbf",
    },
    "& .MuiSlider-mark": {
      backgroundColor: "#bfbfbf",
      height: 8,
      width: 1,
      "&.MuiSlider-markActive": {
        opacity: 1,
        backgroundColor: "currentColor",
      },
    },
  }));

  const totalDaySession = () => {
    const total_session = number * day;
    return total_session ? total_session : 0;
  };

  const totalHourlySession = () => {
    const total_hourly_session = number * day * session;
    return total_hourly_session;
  };

  const totalCost = () => {
    if (isReset) {
      dispatch(setIsReset(false));
      setSliderValues({ number: 0, day: 0, session: 0 });
      setSelectPlan({
        monthly: false,
        payAsYouGo: false,
        onPremisis: false,
      });
      dispatch(setNoOfDays(0));

      return 0;
    }
    if (expanded === "panel1") {
      const total_montly_cost = 40 * number;
      const per_session_cost = total_montly_cost / (number * day * 30);
      return (
        <div>
          <div className="cost">
            $ <span>{per_session_cost.toFixed(2)}</span>
          </div>
          <div className="total_cost">
            <div className="per_session">
              Total Cost
              <span
                style={{
                  color: "white",
                  fontSize: "15px",
                  marginLeft: "3px",
                }}
              >
                <span
                  style={{
                    color: "#69d5ab",
                    fontSize: "15px",
                    marginRight: "3px",
                  }}
                >
                  $
                </span>
                {total_montly_cost.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      );
    }
    if (expanded === "panel2") {
      const total_cost = 100 + 0.2 * number * session * day * noOfDays;
      const per_session_cost = total_cost / (number * day * noOfDays * session);

      return (
        <div>
          <div className="cost">
            $ <span>{per_session_cost.toFixed(2)}</span>
          </div>
          <div className="total_cost">
            <div className="per_session">
              Total Cost
              <span
                style={{
                  color: "white",
                  fontSize: "15px",
                  marginLeft: "3px",
                }}
              >
                <span
                  style={{
                    color: "#69d5ab",
                    fontSize: "15px",
                    marginRight: "3px",
                  }}
                >
                  $
                </span>
                {total_cost.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      );
    }
    if (expanded === "panel3") {
      const total_premisses_cost = 0.01 * number * session * noOfDays;
      const per_session_cost = total_premisses_cost / (number * day * noOfDays);
      return (
        <div>
          <div className="cost">
            $ <span>{per_session_cost.toFixed(2)}</span>
          </div>
          <span style={{ fontSize: "15px" }}>
            <div className="total_cost">
              Total Cost
              <span
                style={{
                  color: "#69d5ab",
                  fontSize: "15px",
                  marginLeft: "12px",
                  marginRight: "3px",
                }}
              >
                $
              </span>
              <span
                style={{
                  color: "white",
                  fontSize: "15px",
                }}
              >
                {total_premisses_cost.toFixed(2)}
              </span>
            </div>
            <p
              style={{
                fontSize: "12px",
                posiion: "relative",
                top: "0px",
                color: "#b5b7b9",
              }}
            >{`+ Orgnization Infrastructure Cost + IT Maintenence Cost`}</p>
          </span>
        </div>
      );
    }

    return 0;
  };
  const handleReset = () => {
    setIsReset(true);
    setSliderValues({ ...sliderValues, number: 0, day: 0, session: 0 });
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const handleDownloadPDF = () => {
    const pdfUrl = PDF;

    fetch(pdfUrl)
      .then((response) => response.blob())
      .then((blob) => {
        saveAs(blob, "document.pdf");
      })
      .catch((error) => {
        console.error("Error fetching or saving the PDF file:", error);
      });
  };

  const renderNumberOfDays = (data) => {
    return (
      <>
        {data ? (
          <Box className="number-of-days-section-box" data-aos="zoom-in">
            <Box>Number of days</Box>
            <Box className="numberofdays-section">
              <input
                required
                value={monthly ? "30" : noOfDays}
                onChange={handleChangeInput}
                name="noOfDays"
                type="number"
                disabled={monthly ? true : false}
              />
            </Box>
          </Box>
        ) : null}
      </>
    );
  };
  useEffect(() => {
    console.log("sliderValues.number", sliderValues);
  }, [sliderValues]);

  return (
    <>
      <div className="calculator-main-section-box">
        <Grid>
          <Box className="text-wight-heading">Cost Calculator</Box>
          <Box className="sub-para-text">
            <Container>
              Empowering Informed Decisions at CloudifyTests! Transparency is
              paramount, which is why we offer a user-friendly cost calculator.
              Tailor your pricing effortlessly by entering key parameters like
              parallel sessions, iterations, and session duration.
            </Container>
          </Box>
        </Grid>
        {/* Choose your plan section */}
        <Container className="choose-plan-container-box">
          <Box mt={4} mb={2} fontWeight="bold">
            Choose Your Plan
          </Box>
          <Grid className="choose-plan-box">
            <ChoosePlan />
          </Grid>
          {/* Range Section  */}
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
            className="session-execution-box"
          >
            <Grid item xs={5.5} className="number-box">
              <TextField
                className="textField-calculator"
                label={"Number Of Parallel Session"}
                type="number"
                value={sliderValues.number}
                onChange={handleInputChange("number")}
                name="noOfDays"
                fullWidth
                sx={{ input: { color: "white " } }}
              />

              <Box className="isoSlider-box">
                <SliderComponent
                  value={number}
                  handleSliderInputChange={handleSliderInputChange("number")}
                  max={2000}
                  marks={[
                    { value: 0 },
                    { value: 500 },
                    { value: 1000 },
                    { value: 1500 },
                    { value: 2000 },
                  ]}
                />
              </Box>
              {/* Automation */}
              <TextField
                label={"Number Of Iterations Per Day"}
                className="textField-calculator"
                type="number"
                value={sliderValues.day}
                onChange={handleInputChange("day")}
                name="noOfDays"
                fullWidth
                sx={{ input: { color: "white" } }}
              />

              <Box className="isoSlider-box">
                <SliderComponent
                  value={day}
                  handleSliderInputChange={handleSliderInputChange("day")}
                  max={24}
                  marks={[
                    { value: 0 },
                    { value: 6 },
                    { value: 12 },
                    { value: 18 },
                    { value: 24 },
                  ]}
                />
              </Box>
              {/* Average */}

              <TextField
                label={"Average Session Duration"}
                className="textField-calculator"
                type="number"
                value={sliderValues.session}
                onChange={handleInputChange("session")}
                name="noOfDays"
                fullWidth
                sx={{ input: { color: "white" } }}
              />
              <Box className="isoSlider-box">
                <SliderComponent
                  value={session}
                  handleSliderInputChange={handleSliderInputChange("session")}
                  max={24}
                  marks={[
                    { value: 0 },
                    { value: 6 },
                    { value: 12 },
                    { value: 18 },
                    { value: 24 },
                  ]}
                />
              </Box>
              {!isActive && (
                <Box className="know-more" onClick={handleDownloadPDF}>
                  Know More
                </Box>
              )}
            </Grid>
            {/* Total Section */}
            <Grid item xs={5.3} mt={3} className="session-box" marginTop={1.5}>
              <Box className="total-session-box">
                <Box>
                  Total Session <span>Count per day</span>
                </Box>
                <Box>{totalDaySession()}</Box>
              </Box>
              <Box className="total-usage-box">
                <Box>
                  Total Hourly <span>Usage per day</span>
                </Box>
                <Box>
                  {totalHourlySession()}{" "}
                  <sup style={{ color: "#69d5ab" }}>Hrs</sup>
                </Box>
              </Box>
              {/* Count-session */}
              <Box className="total-cost">
                <Box>Cost per session</Box>
                {!expanded && (
                  <Box color={"red"}>Please select plan to know your cost</Box>
                )}
                <Box className="cost">
                  <span>{totalCost()}</span>
                </Box>
                <Divider className="divider" />
                <Box className="count-section">
                  <Box>
                    <p className="paragraph">Total Session Count per day</p>
                    <Box>{totalDaySession()}</Box>
                  </Box>
                  <Box>
                    <p className="paragraph">Total Session Count per day</p>
                    <Box>
                      {totalHourlySession()}{" "}
                      <sup style={{ color: "#69d5ab" }}>Hrs</sup>
                    </Box>
                  </Box>
                </Box>
                <Box className="btn-section">
                  <div onClick={handleReset} className="reset">
                    Reset
                  </div>
                  <div className="contact-us">
                    {sliderValues.number >= 1000 ? (
                      <Link
                        activeClass="active"
                        to={sliderValues.number >= 1000 ? "contact" : ""}
                        spy={true}
                        smooth={true}
                        duration={700}
                        offset={-70}
                      >
                        Contact Us
                      </Link>
                    ) : (
                      <a
                        href="https://calendly.com/dhingra-sara-1/get-started-with-cloudify-tests?month=2023-07"
                        target="_blank"
                        style={{ color: "white", textDecoration: "none" }}
                      >
                        Get Started
                      </a>
                    )}
                  </div>
                </Box>
              </Box>
              {isActive && (
                <Box className="know-more" onClick={handleDownloadPDF}>
                  Know More...
                </Box>
              )}
            </Grid>
          </Grid>
        </Container>
      </div>
      <ContactUs
        sliderValues={sliderValues}
        totalCost={totalCost()}
        totalHourlySession={totalHourlySession()}
        totalDaySession={totalDaySession()}
        noOfDays={noOfDays}
      />
    </>
  );
};

export default CalculatorModule;
