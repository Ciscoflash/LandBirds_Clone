import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";
import Main from "./Main";
import Home from "../pages/Home";

const Layout = () => {
  return (
    <div className="">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
};

export default Layout;
