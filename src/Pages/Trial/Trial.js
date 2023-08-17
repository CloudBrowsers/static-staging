import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleSnackbar } from "../../store/appSlice";
import "./Trial.css";

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

const descriptionArray = [
  "Search Engine (Google, Yahoo,etc.)",
  "Recommended by friend or colleague",
  "Social Media",
  "Blog or publication",
  "Other",
];

const Trial = () => {
  const dispatch = useDispatch();
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

  const [loading, setLoading] = useState(false);

  const changeTrialData = (e) => {
    let key = e.target.name ? e.target.name : e.target.id;
    setTrialData({ ...trialData, [key]: e.target.value });
  };

  const freeTrialApi = async () => {
    console.log(trialData);
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
      if (
        !company_name ||
        !contact_number ||
        !description ||
        !email ||
        !full_name ||
        !industry ||
        !no_of_employees ||
        !org_name
      ) {
        throw new Error("Please enter all params");
      }
      const resposne = await axios.post(
        "https://stg.cloudifytests.com/send-invite-mail/",
        trialData
      );
      console.log(resposne.data);
      dispatch(
        toggleSnackbar({
          snackbarToggler: true,
          snackbarMessage: "Please check your email!!",
          snackbarType: "success",
        })
      );
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
    <div className="trial_container">
      <div className="trial_box">
        <div className="trial_header">
          <span>Free Trial</span>
        </div>
        <div className="trial_body">
          <Grid container spacing={2} padding={"2rem"}>
            <Grid item xs={12} sm={6}>
              <TextField
                style={{
                  marginBottom: "10px",
                }}
                label="Full Name"
                variant="outlined"
                className="textField InputName"
                type="text"
                id="full_name"
                value={trialData.full_name}
                onChange={changeTrialData}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                style={{
                  marginBottom: "10px",
                }}
                id="org_name"
                value={trialData.org_name}
                onChange={changeTrialData}
                label="Organization Name"
                variant="outlined"
                className="textField InputName"
                type="text"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                style={{
                  marginBottom: "10px",
                }}
                id="contact_number"
                value={trialData.contact_number}
                onChange={changeTrialData}
                label="Contact Number"
                variant="outlined"
                className="textField InputName"
                type="text"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                style={{
                  marginBottom: "10px",
                }}
                id="email"
                value={trialData.email}
                onChange={changeTrialData}
                label="Email"
                variant="outlined"
                className="textField InputName"
                type="text"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                style={{
                  marginBottom: "10px",
                }}
                id="company_name"
                value={trialData.company_name}
                onChange={changeTrialData}
                label="Company Name"
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
                  label="Number of Employees"
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
            <Grid item xs={12}>
              <FormControl fullWidth className="textField InputName">
                <InputLabel id="demo-simple-select-label">Industry</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="industry"
                  value={trialData.industry}
                  label="Industry"
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
              <FormControl fullWidth className="textField InputName">
                <InputLabel id="demo-simple-select-label">
                  How you got to know about us
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  name="description"
                  value={trialData.description}
                  label="How you got to know about us"
                  onChange={changeTrialData}
                >
                  {descriptionArray.map((description) => (
                    <MenuItem key={description} value={description}>
                      {description}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <div className="btn_section">
                <button
                  className="btn"
                  disabled={loading}
                  onClick={freeTrialApi}
                  style={{ opacity: loading ? 0.8 : 1 }}
                >
                  {loading ? "Please Wait!!" : "Want Free Trial!!"}
                </button>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Trial;
