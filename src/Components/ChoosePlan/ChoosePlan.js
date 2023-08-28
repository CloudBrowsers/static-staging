import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
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
  const [value, setValue] = React.useState("panel1");
  const [isSelected, setSelected] = React.useState(null);

  const handleChangeRadio = (event) => {
    setValue(event.target.value);
    setSelected(event.target.value);
  };
  const dispatch = useDispatch();
  // const [expanded, setExpanded] = React.useState(false);
  const noOfDays = useSelector((store) => {
    return store.calculatorSlice.noOfDays;
  });
  const isReset = useSelector((store) => {
    return store.calculatorSlice.isReset;
  });
  const expanded = useSelector((store) => {
    return store.calculatorSlice.expanded;
  });

  const handleChange = (panel) => (event, isExpanded) => {
    dispatch(setExpanded(isSelected ? panel : false));
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
        <AccordionSummary
          // expandIcon={<Checkbox checked={expanded === "panel1"} />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className="choose-plan-header">
            <span>Monthly</span>
            {/* <Checkbox checked={expanded === "panel1"} /> */}
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChangeRadio}
              >
                <FormControlLabel
                  value="panel1"
                  control={<Radio />}
                  // label="Female"
                />
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
        <AccordionSummary
          // expandIcon={<Checkbox checked={expanded === "panel2"} />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className="choose-plan-header">
            <span>Pay-as-you-go</span>
            {/* <Checkbox checked={expanded === "panel2"} /> */}
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChangeRadio}
              >
                <FormControlLabel
                  value="panel2"
                  control={<Radio />}
                  // label="Female"
                />
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
        <AccordionSummary
          // expandIcon={<Checkbox checked={expanded === "panel3"} />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className="choose-plan-header">
            <span>On-Premise</span>
            {/* <Checkbox checked={expanded === "panel3"} /> */}
            <FormControl>
              <RadioGroup
                aria-labelledby="demo-controlled-radio-buttons-group"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={handleChangeRadio}
              >
                <FormControlLabel
                  value="panel3"
                  control={<Radio />}
                  // label="Female"
                />
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
