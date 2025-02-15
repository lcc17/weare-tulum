import { useState } from "react";
import { Routes, Route } from "react-router";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Facilitators from "./Facilitators";
import Payment from "./Payment";
import Footer from "./Footer";
import Location from "./Location";
import ThankYou from "./ThankYou";

export default function LandingPage() {
  const [language, setLanguage] = useState("es");

  return (
    <div className="bg-gray-900 text-white font-sans">
      <Navbar language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <Location language={language} />
      <Facilitators language={language} />
      <Payment language={language} />
      <Footer language={language} />
      <Routes>
      <Route path="/gracias" element={<ThankYou language={language} />} />
      </Routes>
    </div>
  );
}
