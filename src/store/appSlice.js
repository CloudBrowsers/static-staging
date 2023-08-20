import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  snackbarData: {
    snackbarToggler: false,
    snackbarMessage: "",
    snackbarType: "error",
  },
};

const appSlice = createSlice({
  name: "appSlice",
  initialState,
  reducers: {
    toggleSnackbar: (state, action) => {
      state.snackbarData.snackbarToggler = action.payload.snackbarToggler;
      state.snackbarData.snackbarMessage = action.payload.snackbarMessage;
      state.snackbarData.snackbarType = action.payload.snackbarType;
    },
    closeSnackbar: (state, action) => {
      state.snackbarData.snackbarToggler = action.payload.snackbarToggler;
    },
  },
});

export const { toggleSnackbar, closeSnackbar } = appSlice.actions;
export default appSlice.reducer;
