import React from "react";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Pages/Footer/Footer";
import LandingPage from "./Pages/LandingPage/LandingPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;
