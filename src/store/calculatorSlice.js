import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  noOfDays: 1,
  expanded: "panel1",
  isReset: false,
};

const calculatorSlice = createSlice({
  name: "calculatorSlice",
  initialState,
  reducers: {
    setNoOfDays: (state, action) => {
      state.noOfDays = action.payload;
    },
    setExpanded: (state, action) => {
      state.expanded = action.payload;
    },
    setIsReset: (state, action) => {
      state.isReset = action.payload;
    },
  },
});

export const { setNoOfDays, setExpanded, setIsReset } = calculatorSlice.actions;
export default calculatorSlice.reducer;
