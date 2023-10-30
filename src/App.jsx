import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import Careers from "./pages/Careers";
import AboutUs from "./pages/AboutUs";
import OurServices from "./pages/OurServices";
import Contactus from "./pages/Contactus";
import OrderTranslation from "./pages/OrderTranslation";
import OrderTranscription from "./OrderTranscription";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact-us" element={<Contactus />} />
        <Route path="/order-translation" element={<OrderTranslation />} />
        <Route path="/order-transcription" element={<OrderTranscription />} />
      </Routes>
      {/* <Footer className="absolute bottom-0 w-full bg-gray-300 p-4" /> */}
    </BrowserRouter>
  );
}

export default App;
