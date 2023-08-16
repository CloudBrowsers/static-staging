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

const DialogBox = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [trialData, setTrialData] = useState({
    ns: "",
    email: "",
  });
  const [loading, setLoading] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setTrialData({
      ns: "",
      email: "",
    });
  };

  const changeTrialData = (e) => {
    setTrialData({ ...trialData, [e.target.id]: e.target.value });
  };

  const freeTrialApi = async () => {
    try {
      setLoading(true);
      const { email, ns } = trialData;
      if (!ns || !email) {
        throw new Error("Please enter all params");
      }
      const resposne = await axios.post(
        "https://stg.cloudifytests.com/send-invite-mail/",
        {
          email: trialData.email,
          org_name: trialData.ns,
        }
      );
      console.log(resposne.data);
      dispatch(
        toggleSnackbar({
          snackbarToggler: true,
          snackbarMessage: "Please check your email!!",
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
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <>
      <Button className="links" onClick={handleClickOpen}>
        Free Trial
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle textAlign={"center"}>Free Trial</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="ns"
            label="Organisation Name"
            type="email"
            fullWidth
            variant="outlined"
            value={trialData.ns}
            onChange={changeTrialData}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="outlined"
            value={trialData.email}
            onChange={changeTrialData}
          />
        </DialogContent>
        <DialogContent>
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
              {loading ? "Please wait!!" : "Want Free Trial!!"}
            </Button>
          </DialogActions>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default DialogBox;
