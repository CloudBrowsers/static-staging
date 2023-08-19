import React, { useState, useEffect } from "react";
import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import { Alert } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { toggleSnackbar } from "../../store/appSlice";

function TransitionLeft(props) {
  return <Slide {...props} direction="left" />;
}

const SnackbarComp = () => {
  const dispatch = useDispatch();
  const snackbarData = useSelector((state) => {
    return state.appSlice.snackbarData;
  });
  const [transition, setTransition] = useState(undefined);

  useEffect(() => {
    if (snackbarData.snackbarToggler) {
      setTransition(() => TransitionLeft);
    }
  }, [snackbarData.snackbarToggler]);

  const handleClose = () => {
    dispatch(
      toggleSnackbar({
        snackbarToggler: false,
        snackbarMessage: "",
        snackbarType: "error",
      })
    );
  };

  return (
    <>
      <Snackbar
        open={snackbarData.snackbarToggler}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        onClose={handleClose}
        TransitionComponent={transition}
        key={transition ? transition.name : ""}
        style={{ maxWidth: "21rem" }}
      >
        <Alert
          onClose={handleClose}
          severity={snackbarData.snackbarType}
          sx={{ width: "100%" }}
        >
          {snackbarData.snackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
};

export default SnackbarComp;
