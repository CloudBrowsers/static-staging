import React from "react";
import About from "../About/About";
import ContactUs from "../ContactUs/ContactUs";
import Home from "../Container/Home";
import Features from "../Features/Features";
import Offerings from "../Offerings/Offerings";
import Usage from "../Usage/Usage";

function LandingPage() {
  return (
    <div className="App">
      <Home />
      <About />
      <Offerings />
      <Features />
      <Usage />
      <ContactUs />
    </div>
  );
}

export default LandingPage;
