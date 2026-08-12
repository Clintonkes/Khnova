import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HERO = "https://media.base44.com/images/public/6a5d5a3dd2e5eb4ee0df1b96/90e9253db_generated_image.png";

const STATS = [
  { n: "10+", l: "Years Local" },
  { n: "600+", l: "Lawns Serviced" },
  { n: "100%", l: "Satisfaction" },
];

export default function Hero() {
  const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };
  return (
    <section id="cm-top" className="bg-cm-oat pt-28 lg:pt-32 relative overflow-hidden">
      <div className="absolute top-20 -left-20 w-80 h-80 rounded-full bg-cm-rust/8 blur-3xl pointer-events-none" />
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8 text-center pt-8 pb-12 relative">
        <motion.span initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.6 }} className="inline-flex items-center gap-3 text-cm-rust font-inter text-sm font-semibold tracking-[0.25em] uppercase mb-5">
          <span className="w-8 h-px bg-cm-rust" /> Center Line, Michigan<span className="w-8 h-px bg-cm-rust" />
        </motion.span>
        <motion.h1 initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.7, delay: 0.1 }} className="font-bricolage text-cm-forest text-5xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[0.95] tracking-tight max-w-4xl mx-auto">
          Michigan lawns, <span className="text-cm-rust">kept with care.</span>
        </motion.h1>
        <motion.p initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.7, delay: 0.25 }} className="text-cm-ink/65 font-inter text-lg md:text-xl mt-6 max-w-2xl mx-auto leading-relaxed">
          Carmstrong LLC brings reliable, detail-driven lawncare to Center Line and the Metro Detroit area: mowing, edging, seasonal clean-ups, and full yard care you can count on.
        </motion.p>
        <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.7, delay: 0.4 }} className="flex flex-wrap justify-center gap-4 mt-9">
          <a href="#cm-quote" className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-cm-rust text-cm-cream font-inter font-semibold hover:bg-cm-forest transition shadow-lg shadow-cm-rust/20">
            <ArrowRight size={18} /> Get a Free Quote
          </a>
          <a href="#cm-services" className="inline-flex items-center gap-2 px-7 py-4 rounded-full border-2 border-cm-forest/15 text-cm-forest font-inter font-semibold hover:bg-cm-forest hover:text-cm-cream transition">
            Our Services
          </a>
        </motion.div>
      </div>
      <div className="relative max-w-[1320px] mx-auto px-6 lg:px-8 pb-24">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }} className="relative rounded-3xl overflow-hidden aspect-[21/9] shadow-2xl shadow-cm-forest/20">
          <img src={HERO} alt="Center Line lawncare" className="w-full h-full object-cover cm-kenburns" />
        </motion.div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 -mt-14 md:-mt-20 relative z-20 max-w-3xl mx-auto">
          {STATS.map((s, idx) => (
            <motion.div key={s.l} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.7 + idx * 0.1 }} className="bg-cm-forest rounded-2xl px-6 py-6 text-center shadow-xl shadow-cm-forest/20">
              <div className="font-bricolage text-cm-rust text-3xl md:text-4xl font-extrabold">{s.n}</div>
              <div className="text-cm-cream/70 font-inter text-xs uppercase tracking-wider mt-1">{s.l}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}