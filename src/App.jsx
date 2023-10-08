import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./components/Layout";
import Carear from "./pages/Carear";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carear" element={<Carear />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
