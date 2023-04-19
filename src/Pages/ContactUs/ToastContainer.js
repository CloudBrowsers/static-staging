import * as React from "react";
import { Button, Alert } from "@mui/material";
import Snackbar from "@mui/material/Snackbar";

export default function ToastContainer({ open, setOpenSnackbar, successData }) {
  const handleClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <div>
      <Snackbar
        autoHideDuration={3000}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        open={open}
        onClose={handleClose}
        message="Something Went Wrong"
      >
        {successData ? (
          <Alert variant="filled" severity="success">
            your data submitted , soon we will get you
          </Alert>
        ) : (
          <Alert variant="filled" severity="error">
            Something went wrong
          </Alert>
        )}
      </Snackbar>
    </div>
  );
}
