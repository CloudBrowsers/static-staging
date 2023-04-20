import { Alert, Snackbar, TextField } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from "react";
import "./contactus.css";
import axios from "axios";
import { jira_api } from "../../utiles/constants";
import ToastContainer from "./ToastContainer";

const JIRA_API_ENDPOINT = jira_api;

const ContactUs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [message, setMessage] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [successData, setSuccessData] = useState(false);
  const [errorField, setErrorField] = useState(false);

  function createJiraIssue() {
    const headers = {
      "Content-Type": "application/json",
    };

    const data = {
      fields: {
        project: {
          key: "CUF",
        },
        issuetype: {
          name: "Lead",
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
                  text: `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}\nPhone No: ${phoneNo}\nMessage: ${message}`,
                },
              ],
            },
          ],
        },
      },
    };

    return axios.post(JIRA_API_ENDPOINT, data, {
      headers,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ firstName, lastName, email, phoneNo, message });
    if (!firstName || !lastName || !email || !phoneNo || !message) {
      setErrorField(true);
    } else {
      createJiraIssue()
        .then((response) => {
          setOpenSnackbar(true);
          setSuccessData(true);
        })
        .catch((error) => {
          setSuccessData(false);
          setOpenSnackbar(true);
        });
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneNo("");
      setMessage("");
    }
  }

  const showError = () => {
    return (
      <div>
        <Snackbar
          autoHideDuration={3000}
          onClose={() => setErrorField(false)}
          open={errorField}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        >
          <Alert variant="filled" severity="error">
            Please enter all values
          </Alert>
        </Snackbar>
      </div>
    );
  };

  return (
    <>
      <Container id="contact" data-aos="zoom-in">
        <div className="contact_box">
          <div className="top_secion" data-aos="fade-up">
            <h1 className="contact_text_h1">Schedule a call with us</h1>
            <p className="contact_text">
              To receive further information, please fill out the form below,
              and we'll be in touch with you shortly.
            </p>
          </div>
        </div>
        <div className="contact_section" data-aos="zoom-in">
          <form onSubmit={handleSubmit}>
            {showError()}
            <div className="textfield_section">
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                className="textField"
                type="text"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
                fullWidth
              />
              <TextField
                id="outlined-basic"
                label="Last Name"
                className="textField"
                type="text"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                fullWidth
              />
            </div>
            <div className="textfield_section_2">
              <TextField
                id="outlined-basic"
                label="Email Id"
                variant="outlined"
                className="textField"
                type="text"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                fullWidth
              />
              <TextField
                id="outlined-basic"
                label="Mobile Number"
                variant="outlined"
                className="textField"
                type="number"
                value={phoneNo}
                onChange={(event) => setPhoneNo(event.target.value)}
                fullWidth
              />
            </div>
            <div className="message_field">
              <TextField
                label="Message"
                variant="outlined"
                multiline
                rows={4}
                className="textField"
                type="text"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                fullWidth
              />
            </div>
            <div className="btn_section">
              <button type="submit" className="btn">
                Submit
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
