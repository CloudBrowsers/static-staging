import React from "react";
import About from "../About/About";
import ContactUs from "../ContactUs/ContactUs";
import Home from "../Container/Home";
import Features from "../Features/Features";
import Offerings from "../Offerings/Offerings";
import Usage from "../Usage/Usage";
import Footer from "../../Pages/Footer/Footer";
import CalculatorModule from "../Calculator/NewClaculator/CalculatorModule";
import Navbar from "../../Components/Navbar/Navbar";

function LandingPage() {
  return (
    <>
      <Navbar />
      <div>
        <Home />
        <About />
        <Offerings />
        <Features />
        <Usage />
        <CalculatorModule />
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;
