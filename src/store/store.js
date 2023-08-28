import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import calculatorSlice from "./calculatorSlice";

const store = configureStore({
  reducer: {
    appSlice: appSlice,
    calculatorSlice: calculatorSlice,
  },
});

export default store;
