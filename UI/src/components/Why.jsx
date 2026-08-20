import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Clock, Award, MapPin } from "lucide-react";

const features = [
  { icon: ShieldCheck, title: "Licensed & Insured", desc: "Fully insured and professional — your property is in safe hands every visit." },
  { icon: Clock, title: "Reliable Weekly Service", desc: "On-time, scheduled mowing so your lawn never misses a cut." },
  { icon: Award, title: "Pro-Grade Equipment", desc: "Sharp blades and commercial mowers for a clean, healthy cut every time." },
  { icon: MapPin, title: "Locally Owned", desc: "Based in Centre, AL — we treat every lawn like it's our own." },
];
const stats = [["8+", "Years in Business"], ["200+", "Lawns Serviced"], ["5.0", "Star Reviews"], ["100%", "Satisfaction"]];

export default function Why() {
  return (
    <section className="py-20 md:py-28 bg-knova-midnight text-knova-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-knova-cyan font-dmsans font-semibold uppercase tracking-wider text-sm">Why KH NOVA</span>
          <h2 className="font-newsreader text-4xl md:text-5xl font-bold mt-2">The Standard for Lawn Care in Centre</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-14">
          {stats.map(([n, l]) => <motion.div key={l} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="text-center border-l-2 border-knova-cyan/30 pl-4"><div className="font-newsreader text-4xl md:text-5xl font-bold text-knova-cyan">{n}</div><div className="font-dmsans text-xs uppercase tracking-wider text-knova-cream/60 mt-1">{l}</div></motion.div>)}
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => { const Icon = f.icon; return (
            <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="bg-knova-navy/60 border border-knova-cream/10 rounded-2xl p-6 hover:border-knova-cyan/40 transition">
              <div className="w-11 h-11 rounded-lg bg-knova-cyan/15 grid place-items-center mb-4"><Icon className="text-knova-cyan" size={20} /></div>
              <h3 className="font-newsreader text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-knova-cream/70 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ); })}
        </div>
      </div>
    </section>
  );
}