import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import { useDispatch } from "react-redux";
import { toggleSnackbar } from "../../store/appSlice";
import {
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import "../Navbar/navbar.css";
import { free_trial_api } from "../../utiles/constants";

const employessArray = [
  "Self-employed",
  "1-10 employees",
  "11-50 employees",
  "51-200 employees",
  "201-500 employees",
  "501-1000 employees",
  "1001-5000 employees",
  "5001-10,000 employees",
  "10,001+ employees",
];

const industryArray = [
  "Technology",
  "Healthcare",
  "Finance",
  "E-commerce",
  "Education",
  "Real Estate",
  "Marketing and Advertising",
  "Hospitality and Tourism",
  "Manufacturing",
  "Retail",
  "Nonprofit/NGO",
  "Entertainment and Media",
  "Automotive",
  "Energy and Utilities",
  "Government and Public Services",
  "Consulting",
  "Agriculture",
  "Construction",
  "Transportation and Logistics",
  "Fitness and Wellness",
];

const Label = ({ text, important }) => (
  <div>
    {text}
    {important && <span style={{ color: "red" }}> *</span>}
  </div>
);

const DialogBox = ({ isActive }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [trialData, setTrialData] = useState({
    full_name: "",
    org_name: "",
    contact_number: "",
    email: "",
    company_name: "",
    no_of_employees: "",
    industry: "",
    description: "",
  });
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTrialData({
      full_name: "",
      org_name: "",
      contact_number: "",
      email: "",
      company_name: "",
      no_of_employees: "",
      industry: "",
      description: "",
    });
    setError(false);
  };

  const changeTrialData = (e) => {
    let key = e.target.name ? e.target.name : e.target.id;
    setTrialData({ ...trialData, [key]: e.target.value });
  };

  const freeTrialApi = async () => {
    try {
      setLoading(true);
      const {
        company_name,
        contact_number,
        description,
        email,
        full_name,
        industry,
        no_of_employees,
        org_name,
      } = trialData;
      if (!email || !full_name || !org_name) {
        setError(true);
        throw new Error(`Please enter manditory fields`);
      }
      const resposne = await axios.post(free_trial_api, trialData);
      console.log(resposne.data);
      dispatch(
        toggleSnackbar({
          snackbarToggler: true,
          snackbarMessage:
            "A verification email is sent to you. Please check your email and complete your registration process",
          snackbarType: "success",
        })
      );
      handleClose();
    } catch (error) {
      console.log(error.response);
      dispatch(
        toggleSnackbar({
          snackbarToggler: true,
          snackbarMessage: error.response
            ? error.response.data.message
            : error.message,
          snackbarType: "error",
        })
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {isActive ? (
        <div onClick={handleClickOpen} style={{ color: "black !important" }}>
          Free Trial
        </div>
      ) : (
        <Button className={"links"} onClick={handleClickOpen}>
          Free Trial
        </Button>
      )}

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle
          textAlign={"center"}
          fontWeight={"bold"}
          fontStyle={"italic"}
        >
          Register for 7 Days Trial
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                style={{
                  margin: "0.5rem 0",
                }}
                label={<Label text={"Full Name"} important={true} />}
                variant="outlined"
                className="textField InputName"
                type="text"
                id="full_name"
                value={trialData.full_name}
                onChange={changeTrialData}
                fullWidth
                error={error && !trialData.full_name}
                helperText={
                  error && !trialData.full_name && "Please enter full mame"
                }
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                style={{
                  margin: "10px 0",
                }}
                id="email"
                value={trialData.email}
                onChange={changeTrialData}
                label={<Label text={"Email"} important={true} />}
                variant="outlined"
                className="textField InputName"
                type="text"
                fullWidth
                error={error && !trialData.email}
                helperText={
                  error && !trialData.email && "Please enter your email address"
                }
              />
            </Grid>
            <Grid item xs={12} sm={12}>
              <TextField
                style={{
                  margin: "10px 0",
                }}
                id="org_name"
                value={trialData.org_name}
                onChange={changeTrialData}
                label={<Label text={"Domain Name"} important={true} />}
                variant="outlined"
                className="textField InputName"
                type="text"
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      .cloudifytests.com
                    </InputAdornment>
                  ),
                }}
                error={error && !trialData.org_name}
                helperText={
                  error && !trialData.org_name && "Please enter domain name"
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                style={{
                  margin: "10px 0",
                }}
                id="company_name"
                value={trialData.company_name}
                onChange={changeTrialData}
                label={<Label text={"Company Name"} important={false} />}
                variant="outlined"
                className="textField InputName"
                type="text"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth className="textField InputName">
                <InputLabel id="demo-simple-select-label">
                  Number of Employees
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="no_of_employees"
                  value={trialData.no_of_employees}
                  label={
                    <Label text={"Number of Employees"} important={false} />
                  }
                  onChange={changeTrialData}
                >
                  {employessArray.map((employees) => (
                    <MenuItem key={employees} value={employees}>
                      {employees}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={12}>
              <FormControl fullWidth className="textField InputName">
                <InputLabel id="demo-simple-select-label">Industry</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="industry"
                  value={trialData.industry}
                  label={<Label text={"Industry"} important={false} />}
                  onChange={changeTrialData}
                  MenuProps={{ PaperProps: { sx: { maxHeight: 250 } } }}
                >
                  {industryArray.map((industry) => (
                    <MenuItem key={industry} value={industry}>
                      {industry}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <TextField
                label={
                  <Label
                    text={"Tell us more about what you're looking to achieve"}
                    important={false}
                  />
                }
                variant="outlined"
                multiline
                rows={4}
                className="textFieldMessage"
                type="text"
                id="description"
                value={trialData.description}
                onChange={changeTrialData}
                fullWidth
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogContent
          style={{
            overflow: "hidden",
            borderTop: "1px solid gray",
            padding: "10px 24px 24px 24px",
          }}
        >
          <DialogActions style={{ paddingRight: 0 }}>
            <Button
              variant="outlined"
              onClick={handleClose}
              style={{ textTransform: "capitalize" }}
            >
              Cancel
            </Button>
            <Button
              variant="outlined"
              onClick={freeTrialApi}
              disabled={loading}
              style={{ textTransform: "capitalize" }}
            >
              {loading ? "Please wait..." : "Submit"}
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DialogBox;
