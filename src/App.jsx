import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Careers from "./pages/Careers";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route path="/about-us" element={<AboutUs />} /> */}
        {/* <Route path="/our-services" element={<OurServices />} /> */}
        <Route path="/careers" element={<Careers />} />
        {/* <Route path="/contact-us" element={<ContactUs />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
