import * as React from "react";
import PropTypes from "prop-types";
import Slider, { SliderThumb } from "@mui/material/Slider";
import { styled } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import Tooltip from "@mui/material/Tooltip";
import Box from "@mui/material/Box";

function ValueLabelComponent(props) {
  const { children, value } = props;

  return (
    <Tooltip enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}

ValueLabelComponent.propTypes = {
  children: PropTypes.element.isRequired,
  value: PropTypes.number.isRequired,
};

const iOSBoxShadow =
  "0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02)";

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

function AirbnbThumbComponent(props) {
  const { children, ...other } = props;

  return (
    <SliderThumb {...other}>
      {children}
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
      <span className="airbnb-bar" />
    </SliderThumb>
  );
}

AirbnbThumbComponent.propTypes = {
  children: PropTypes.node,
};

export default function SliderComponent({
  value,
  handleSliderInputChange,
  max,
  marks,
}) {
  return (
    <Box>
      <IOSSlider
        aria-label="ios slider"
        defaultValue={60}
        sx={{ marginTop: "30px" }}
        marks={marks}
        valueLabelDisplay="on"
        value={value}
        onChange={handleSliderInputChange}
        max={max}
      />
      <Box sx={{ m: 3 }} />
    </Box>
  );
}
