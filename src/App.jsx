import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import viteLogo from "/vite.svg";
import "./App.css";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Careers from "./pages/Careers";
import AboutUs from "./pages/AboutUs";
import OurServices from "./pages/OurServices";
import OrderTranslation from "./pages/OrderTranslation";
import OrderTranscription from "./pages/OrderTranscription";
import OrderAnnotation from "./pages/OrderAnnotation";
import OrderCopywriting from "./pages/OrderCopywriting";
import OrderContentwriting from "./pages/OrderContentwriting";
import OrderSubtitlingCaption from "./pages/OrderSubtitlingCaption";
import OrderDesign from "./pages/OrderDesign";
import OrderLocalization from "./pages/OrderLocalization";
import ServicesWrapper from "./components/ServicesWrapper";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/order-translation" element={<OrderTranslation />} />
        <Route path="/order-transcription" element={<OrderTranscription />} />
        <Route path="/order-annotation" element={<OrderAnnotation />} />
        <Route path="/order-copywriting" element={<OrderCopywriting />} />
        <Route
          path="/order-subtitling/captioning"
          element={<OrderSubtitlingCaption />}
        />
        <Route
          path="/order-content-writing"
          element={<OrderContentwriting />}
        />
        <Route path="/order-design" element={<OrderDesign />} />
        <Route path="/order-localization" element={<OrderLocalization />} />
        {/* servicesPage */}
        <Route
          path="/services/translation"
          element={
            <ServicesWrapper
              serviceName={"Translation"}
              content={
                "A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba.A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba. The farmers will make more money. Your lunch will not be imported, cassava garri ewa and ehhh ehhhhnn. The farmer will make money, the dinner would be cassava, eba, ewa and everything."
              }
            />
          }
        />
        <Route
          path="/services/transcription"
          element={
            <ServicesWrapper
              serviceName={"Transcription"}
              content={
                "A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba.A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba. The farmers will make more money. Your lunch will not be imported, cassava garri ewa and ehhh ehhhhnn. The farmer will make money, the dinner would be cassava, eba, ewa and everything."
              }
            />
          }
        />
        <Route
          path="/services/annotation"
          element={
            <ServicesWrapper
              serviceName={"Annotation"}
              content={
                "A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba.A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba. The farmers will make more money. Your lunch will not be imported, cassava garri ewa and ehhh ehhhhnn. The farmer will make money, the dinner would be cassava, eba, ewa and everything."
              }
            />
          }
        />
        <Route
          path="/services/copywriting"
          element={
            <ServicesWrapper
              serviceName={"Copywriting"}
              content={
                "A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba.A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba. The farmers will make more money. Your lunch will not be imported, cassava garri ewa and ehhh ehhhhnn. The farmer will make money, the dinner would be cassava, eba, ewa and everything."
              }
            />
          }
        />
        <Route
          path="/services/subtitling-and-captioning"
          element={
            <ServicesWrapper
              serviceName={"Subtitling/Captioning"}
              content={
                "A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba.A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba. The farmers will make more money. Your lunch will not be imported, cassava garri ewa and ehhh ehhhhnn. The farmer will make money, the dinner would be cassava, eba, ewa and everything."
              }
            />
          }
        />
        <Route
          path="/services/content-writing"
          element={
            <ServicesWrapper
              serviceName={"Content Writing"}
              content={
                "A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba.A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba. The farmers will make more money. Your lunch will not be imported, cassava garri ewa and ehhh ehhhhnn. The farmer will make money, the dinner would be cassava, eba, ewa and everything."
              }
            />
          }
        />
        <Route
          path="/services/design"
          element={
            <ServicesWrapper
              serviceName={"Design"}
              content={
                "A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba.A town hall different from bala blu, blue blu bulaba. broom broom broom brooooooooom. Bala blu blue blu bulaba. The farmers will make more money. Your lunch will not be imported, cassava garri ewa and ehhh ehhhhnn. The farmer will make money, the dinner would be cassava, eba, ewa and everything."
              }
            />
          }
        />
      </Routes>
      {/* <Footer className="absolute bottom-0 w-full bg-gray-300 p-4" /> */}
    </BrowserRouter>
  );
}

export default App;
