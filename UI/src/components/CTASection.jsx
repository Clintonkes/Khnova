import React from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };
  return (
    <section className="bg-olson-clay py-20">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }} className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div>
            <h2 className="font-spectral text-olson-cream text-3xl md:text-4xl font-bold leading-tight">Ready for a greener yard?</h2>
            <p className="text-olson-cream/80 font-outfit mt-3 max-w-lg">Get a free, no-obligation quote for your Henderson or Las Vegas property today.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link to="/book" className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-olson-cactus text-olson-cream font-outfit font-semibold hover:bg-olson-ink transition"><ArrowRight size={18} /> Get a Free Quote</Link>
            <a href="tel:+17024162662" className="inline-flex items-center gap-2 px-7 py-4 rounded-full border-2 border-olson-cream/40 text-olson-cream font-outfit font-semibold hover:bg-olson-cream hover:text-olson-clay transition"><Phone size={18} /> (702) 416-2662</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
