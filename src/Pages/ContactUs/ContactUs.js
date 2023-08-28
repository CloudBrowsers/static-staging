import { Alert, Snackbar, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import "./contactus.css";
import axios from "axios";
import { jira_api } from "../../utiles/constants";
import ToastContainer from "./ToastContainer";
import { useDispatch } from "react-redux";
import { toggleSnackbar } from "../../store/appSlice";

const JIRA_API_ENDPOINT = jira_api;

const ContactUs = (props) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [message, setMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [successData, setSuccessData] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneNoError, setPhoneNoError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const nameRegex = /^[a-zA-Z]+$/;
  const emailRegex = /\S+@\S+\.\S+/;
  const phoneRegex = /^\d{10}$/;

  async function createJiraIssue() {
    setLoading(true);
    const headers = {
      "Content-Type": "application/json",
    };

    const data = {
      fields: {
        project: {
          key: "CUF",
        },
        summary: "CloudifyTests",
        description: {
          type: "doc",
          version: 1,
          content: [
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone No: ${phoneNo}\nMessage: ${message}${
                    props.sliderValues.number >= 1000
                      ? `\nAutomation Execution duration per day: ${props.sliderValues.day}\nNumber of parallel session execution: ${props.sliderValues.number}\nAverage session duration per session: ${props.sliderValues.session}\nNumber of days: ${props.noOfDays}\nTotal Session count per day: ${props.totalDaySession}\nTotal Hourly usage per day: ${props.totalHourlySession}\nTotal cost: ${props.totalCost}`
                      : ""
                  }`,
                },
              ],
            },
          ],
        },
        issuetype: {
          id: "10017",
        },
      },
    };
    return await axios.post(JIRA_API_ENDPOINT, data, {
      headers,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let hasError = false;

    if (firstName === "" || !nameRegex.test(firstName)) {
      setFirstNameError(true);
      hasError = true;
    } else {
      setFirstNameError(false);
    }

    if (lastName === "" || !nameRegex.test(lastName)) {
      setLastNameError(true);
      hasError = true;
    } else {
      setLastNameError(false);
    }

    if (email === "" || !emailRegex.test(email)) {
      setEmailError(true);
      hasError = true;
    } else {
      setEmailError(false);
    }

    if (phoneNo === "" || !phoneRegex.test(phoneNo)) {
      setPhoneNoError(true);
      hasError = true;
    } else {
      setPhoneNoError(false);
    }

    if (message === "") {
      setMessageError(true);
      hasError = true;
    } else {
      setMessageError(false);
    }
    if (!hasError) {
      createJiraIssue()
        .then((response) => {
          console.log(response.data);
          setIsFormSubmitted(true);
          dispatch(
            toggleSnackbar({
              snackbarToggler: true,
              snackbarMessage:
                "Thank you for your query, we will contact you soon",
              snackbarType: "success",
            })
          );
        })
        .catch((error) => {
          dispatch(
            toggleSnackbar({
              snackbarToggler: true,
              snackbarMessage: "Something went wrong",
              snackbarType: "error",
            })
          );
        })
        .finally(() => {
          setLoading(false);
        });

      // reset form fields
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneNo("");
      setMessage("");
    }
  }

  return (
    <>
      <Container id="contact">
        <div className="contact_box">
          <div className="top_secion">
            <div className="contact-us-heading">
              Schedule a call with us now!
            </div>
            {isFormSubmitted ? (
              <div className="paragraph-text">
                Your response has been sent. We will get back to you shortly.
              </div>
            ) : (
              <div className="paragraph-contact-us">
                To receive further information, please fill out the form below,
                and we'll be in touch with you shortly.
              </div>
            )}
          </div>
        </div>
        <div className="contact_section" data-aos="fade-down">
          <form onSubmit={handleSubmit}>
            <div className="textfield_section">
              <TextField
                style={{
                  marginBottom: "10px",
                }}
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                className="textField InputName"
                type="text"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                error={firstNameError}
                helperText={
                  firstNameError ? "Please enter your First Name" : ""
                }
                fullWidth
              />
              <TextField
                id="outlined-basic"
                label="Last Name"
                className="textField"
                type="text"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                error={lastNameError}
                helperText={lastNameError ? "Please enter your Last Name" : ""}
                fullWidth
              />
            </div>
            <div className="textfield_section_2">
              <TextField
                style={{
                  marginBottom: "10px",
                }}
                id="outlined-basic"
                label="Email Id"
                variant="outlined"
                className="textField"
                type="text"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
                onBlur={(event) => {
                  const enteredEmail = event.target.value;
                  if (!emailRegex.test(enteredEmail)) {
                    setEmailError(true);
                  } else {
                    setEmailError(false);
                  }
                }}
                error={emailError}
                helperText={emailError ? "Please enter valid Email Id" : ""}
                fullWidth
              />
              <TextField
                id="outlined-basic"
                label="Mobile Number"
                variant="outlined"
                className="textField"
                type="text"
                onChange={(event) => {
                  const input = event.target.value.replace(/\D/g, ""); // Remove non-digit characters
                  setPhoneNo(input);

                  if (!input.match(/^\d+$/) || input.length !== 10) {
                    setPhoneNoError(true);
                  } else {
                    setPhoneNoError(false);
                  }
                }}
                value={phoneNo}
                error={phoneNoError}
                helperText={phoneNoError ? "Please enter valid Mobile No." : ""}
                fullWidth
              />
            </div>
            <div className="message_field">
              <TextField
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                className="textFieldMessage"
                type="text"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                error={messageError}
                helperText={messageError ? "Please enter a Message" : ""}
                fullWidth
              />
            </div>
            <div className="btn_section">
              <button
                disabled={loading}
                type="submit"
                className={`btn ${loading && "btn-loading"}`}
              >
                {loading ? "Please wait..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </Container>
      <ToastContainer
        open={openSnackbar}
        setOpenSnackbar={setOpenSnackbar}
        successData={successData}
      />
    </>
  );
};

export default ContactUs;
