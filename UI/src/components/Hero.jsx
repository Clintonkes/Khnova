import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";

const HERO = "https://media.base44.com/images/public/6a5d5a3dd2e5eb4ee0df1b96/0ce5cc76c_generated_image.png";

export default function Hero() {
  const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };
  const STATS = [{ n: "15+", l: "Years Local" }, { n: "600+", l: "Lawns Served" }, { n: "100%", l: "Family Owned" }];
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <img src={HERO} alt="Madison MS lawncare" className="absolute inset-0 w-full h-full object-cover ib-kenburns" />
      <div className="absolute inset-0 bg-gradient-to-b from-ibe-ever/85 via-ibe-ever/65 to-ibe-ever/85" />
      <div className="relative max-w-[1320px] mx-auto px-6 lg:px-8 w-full py-32 text-center">
        <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.7 }} className="max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-3 text-ibe-spring font-mulish text-sm font-bold tracking-[0.25em] uppercase mb-5">
            <span className="w-8 h-px bg-ibe-spring" /> Madison, Mississippi · Lawncare<span className="w-8 h-px bg-ibe-spring" />
          </span>
          <h1 className="font-lora text-ibe-cream text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.98] tracking-tight">
            Lush lawns,<br /><span className="text-ibe-spring">rooted in Madison.</span>
          </h1>
          <p className="text-ibe-cream/80 font-mulish text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
            I&B Evergreen LLC brings dependable, year-round lawn care and landscaping to Madison and the greater metro-Jackson area — mowing, beds, clean-ups and full property upkeep.
          </p>
          <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.7, delay: 0.2 }} className="flex flex-wrap justify-center gap-4 mt-9">
            <Link to="/ibe-evergreen/quote" className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-ibe-spring text-ibe-bark font-mulish font-bold hover:bg-ibe-cream transition shadow-lg shadow-ibe-bark/30">
              <ArrowRight size={18} /> Get a Free Quote
            </Link>
            <Link to="/ibe-evergreen/services" className="inline-flex items-center gap-2 px-7 py-4 rounded-full border-2 border-ibe-cream/30 text-ibe-cream font-mulish font-bold hover:bg-ibe-cream hover:text-ibe-ever transition">
              Our Services
            </Link>
          </motion.div>
          <div className="flex flex-wrap justify-center items-center gap-6 mt-9 text-ibe-cream/80 font-mulish">
            <a href="tel:+16013311246" className="flex items-center gap-2 hover:text-ibe-spring"><Phone size={16} className="text-ibe-spring" />+1 (601) 331-1246</a>
            <a href="mailto:ibevergreenllc@proton.me" className="hover:text-ibe-spring">ibevergreenllc@proton.me</a>
          </div>
        </motion.div>
      </div>
      <div className="relative max-w-[1320px] mx-auto px-6 lg:px-8 w-full -mt-10">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6, delay: 0.3 }} className="grid grid-cols-3 gap-4 bg-ibe-cream/10 backdrop-blur-md border border-ibe-cream/20 rounded-2xl p-5 md:p-7 max-w-2xl mx-auto">
          {STATS.map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-lora text-ibe-spring text-3xl md:text-4xl font-bold">{s.n}</div>
              <div className="font-mulish text-ibe-cream/70 text-[11px] md:text-xs uppercase tracking-wider mt-1">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}