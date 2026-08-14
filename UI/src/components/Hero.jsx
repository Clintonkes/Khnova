import React from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";

const HERO = "https://media.base44.com/images/public/6a5d5a3dd2e5eb4ee0df1b96/9ed559465_generated_image.png";

export default function Hero() {
  const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <img src={HERO} alt="Henderson NV lawncare" className="absolute inset-0 w-full h-full object-cover ol-kenburns" />
      <div className="absolute inset-0 bg-gradient-to-r from-olson-ink/90 via-olson-ink/60 to-olson-ink/20" />
      <div className="relative max-w-[1320px] mx-auto px-6 lg:px-8 w-full py-32">
        <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.7 }} className="max-w-2xl">
          <span className="inline-flex items-center gap-3 text-olson-clay font-outfit text-sm font-semibold tracking-[0.25em] uppercase mb-5">
            <span className="w-8 h-px bg-olson-clay" /> Henderson, Nevada · Lawncare<span className="w-8 h-px bg-olson-clay" />
          </span>
          <h1 className="font-spectral text-olson-cream text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight">
            Desert lawns,<br /><span className="text-olson-clay">kept green.</span>
          </h1>
          <p className="text-olson-cream/80 font-outfit text-lg md:text-xl mt-6 max-w-xl leading-relaxed">
            Olson LLC brings reliable, desert-smart lawncare to Henderson and the Las Vegas Valley — mowing, xeriscape, irrigation and full yard care built for the Nevada climate.
          </p>
          <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.7, delay: 0.2 }} className="flex flex-wrap gap-4 mt-9">
            <Link to="/book" className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-olson-clay text-olson-cream font-outfit font-semibold hover:bg-olson-cactus transition shadow-lg shadow-olson-ink/30">
              <ArrowRight size={18} /> Get a Free Quote
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 px-7 py-4 rounded-full border-2 border-olson-cream/30 text-olson-cream font-outfit font-semibold hover:bg-olson-cream hover:text-olson-ink transition">
              Our Services
            </Link>
          </motion.div>
          <div className="flex flex-wrap items-center gap-6 mt-9 text-olson-cream/80 font-outfit">
            <a href="tel:+17024162662" className="flex items-center gap-2 hover:text-olson-clay"><Phone size={16} className="text-olson-clay" />+1 (702) 416-2662</a>
            <a href="mailto:olsonnllc@proton.me" className="hover:text-olson-clay">olsonnllc@proton.me</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}