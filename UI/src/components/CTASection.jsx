import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };
  return (
    <section className="bg-ibe-ever py-20">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }} className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left bg-ibe-cream/5 border border-ibe-cream/15 rounded-3xl p-10 md:p-12">
          <div>
            <h2 className="font-lora text-ibe-cream text-3xl md:text-4xl font-bold leading-tight">Ready for a healthier lawn?</h2>
            <p className="text-ibe-cream/80 font-mulish mt-3 max-w-lg">Get a free, no-obligation quote for your Madison or metro-Jackson property today.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link to="/ibe-evergreen/quote" className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-ibe-spring text-ibe-bark font-mulish font-bold hover:bg-ibe-cream transition"><ArrowRight size={18} /> Get a Free Quote</Link>
            <a href="tel:+16013311246" className="inline-flex items-center gap-2 px-7 py-4 rounded-full border-2 border-ibe-cream/40 text-ibe-cream font-mulish font-bold hover:bg-ibe-cream hover:text-ibe-ever transition"><Phone size={18} /> (601) 331-1246</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}