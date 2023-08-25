import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import SnackbarComp from "./Components/Snackbar/SnackbarComp";
import LandingPage from "./Pages/LandingPage/LandingPage";
import LoadingPage from "./Pages/LoadingPage/LoadingPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/loading/:id" element={<LoadingPage />} />
        <Route path="*" element={<LoadingPage />} />
      </Routes>
      <SnackbarComp />
    </div>
  );
}

export default App;
