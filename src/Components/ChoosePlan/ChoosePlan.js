import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import {
  FormControl,
  FormControlLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import "../../Pages/Calculator/NewClaculator/CalculatorModule.css";
import { Box } from "@mui/system";
import { useDispatch, useSelector } from "react-redux";
import { setExpanded, setNoOfDays } from "../../store/calculatorSlice";

const ChoosePlan = () => {
  const dispatch = useDispatch();
  const noOfDays = useSelector((store) => {
    return store.calculatorSlice.noOfDays;
  });
  const expanded = useSelector((store) => {
    return store.calculatorSlice.expanded;
  });

  const handleChange = (panel) => (event, isExpanded) => {
    if (panel === expanded && !isExpanded) {
      return null;
    } else dispatch(setExpanded(isExpanded ? panel : false));
  };

  const handleChangeInput = (event) => {
    dispatch(setNoOfDays(event.target.value));
  };

  const renderNumberOfDays = () => {
    return (
      <>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Box className="panel-box">
            {expanded === "panel1"
              ? "Number of days for which the plan is active are"
              : "Please select no. of days for which the plan should be active"}
          </Box>
          <TextField
            label={"No of days"}
            size="small"
            type="number"
            value={expanded === "panel1" ? "30" : noOfDays}
            onChange={handleChangeInput}
            name="noOfDays"
            disabled={expanded === "panel1" ? true : false}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">days</InputAdornment>
              ),
            }}
          />
        </Box>
      </>
    );
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary aria-controls="panel1bh-content" id="panel1bh-header">
          <Typography className="choose-plan-header">
            <span>Monthly</span>
            <FormControl>
              <RadioGroup
                value={expanded === "panel1" ? "panel1" : ""}
                onChange={() => handleChange("panel1")(null, true)}
              >
                <FormControlLabel value="panel1" control={<Radio />} />
              </RadioGroup>
            </FormControl>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{renderNumberOfDays()}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
      >
        <AccordionSummary aria-controls="panel2bh-content" id="panel2bh-header">
          <Typography className="choose-plan-header">
            <span>Pay-as-you-go</span>
            <FormControl>
              <RadioGroup
                value={expanded === "panel2" ? "panel2" : ""}
                onChange={() => handleChange("panel2")(null, true)}
              >
                <FormControlLabel value="panel2" control={<Radio />} />
              </RadioGroup>
            </FormControl>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{renderNumberOfDays()}</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
      >
        <AccordionSummary aria-controls="panel3bh-content" id="panel3bh-header">
          <Typography className="choose-plan-header">
            <span>On-Premise</span>
            <FormControl>
              <RadioGroup
                value={expanded === "panel3" ? "panel3" : ""}
                onChange={() => handleChange("panel3")(null, true)}
              >
                <FormControlLabel value="panel3" control={<Radio />} />
              </RadioGroup>
            </FormControl>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>{renderNumberOfDays()}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ChoosePlan;
