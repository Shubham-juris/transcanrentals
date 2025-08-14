import React from "react";
import { Routes, Route } from "react-router-dom";
// import Home from "../page/Home";
import Contact from "../page/Contact";
import About from "../page/About";
import Services from "../page/Services";
import Fleet from "../page/Fleet";
import Pricing from "../page/Pricing";
import { ScrollToTop } from "../ScrollToTop";
import MaintenancePage from "../page/MaintenancePage";

const AppRoutes = () => {
  return (
    <main className="pt-20 min-h-screen">
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MaintenancePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/fleet" element={<Fleet />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </main>
  );
};

export default AppRoutes;
