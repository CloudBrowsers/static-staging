import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import SnackbarComp from "./Components/Snackbar/SnackbarComp";
import LandingPage from "./Pages/LandingPage/LandingPage";
import Trial from "./Pages/Trial/Trial";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/trial" element={<Trial />} />
      </Routes>
      <SnackbarComp />
    </div>
  );
}

export default App;
