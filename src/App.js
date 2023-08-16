import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import SnackbarComp from "./Components/Snackbar/SnackbarComp";
import LandingPage from "./Pages/LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <SnackbarComp />
    </div>
  );
}

export default App;
