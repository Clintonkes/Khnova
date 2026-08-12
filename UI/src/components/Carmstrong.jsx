import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Marquee from "./Marquee";
import Services from "./Services";
import Why from "./Why";
import Work from "./Work";
import Quote from "./Quote";
import Footer from "./Footer";

export default function Carmstrong() {
  return (
    <div className="bg-cm-oat font-inter text-cm-ink">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Why />
        <Work />
        <Quote />
      </main>
      <Footer />
    </div>
  );
}