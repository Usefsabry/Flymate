// import { useState, useEffect } from "react";
import "../styles/home.css";
import Hero from "../components/Hero";
import FlightSearch from "../components/FlightSearch";
import FeaturedFlights from "../components/FeaturedFlights";
import WhyChooseUs from "../components/WhyChooseUs";
import Services from "../components/ServicesC";
import AboutUsSec from "../components/AboutUsSec";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Preloader from "../components/Preloader";


 function Home() {


  return (
    <>
    <Preloader />
      <Navbar/>
    <Hero/>
    <FlightSearch/>
    <FeaturedFlights/>
    <WhyChooseUs/>
    <Services/>
    <AboutUsSec/>
    <Footer/>
    </>
  );
}

export default Home;