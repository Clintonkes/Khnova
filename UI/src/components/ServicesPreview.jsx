import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Scissors, Flower2, Sparkles, ArrowRight } from "lucide-react";

const SERVICES = [
  { n: "01", icon: Scissors, t: "Lawn Mowing & Maintenance", d: "Weekly & bi-weekly cuts with clean edging and blowing, tuned to Mississippi's long growing season.", img: "https://media.base44.com/images/public/6a5d5a3dd2e5eb4ee0df1b96/1c9beb1d1_generated_image.png" },
  { n: "02", icon: Flower2, t: "Landscaping & Bed Care", d: "Mulch installation, shrub beds, plantings and bed maintenance that keep your yard looking polished.", img: "https://media.base44.com/images/public/6a5d5a3dd2e5eb4ee0df1b96/bc30b03e4_generated_image.png" },
  { n: "03", icon: Sparkles, t: "Seasonal Clean-Up", d: "Spring and fall clean-ups, leaf and debris removal to keep your yard pristine all year.", img: "https://media.base44.com/images/public/6a5d5a3dd2e5eb4ee0df1b96/5797068c3_generated_image.png" },
];

export default function ServicesPreview() {
  const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };
  return (
    <section className="bg-ibe-cream py-24">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }}>
            <span className="text-ibe-spring font-mulish text-sm font-bold tracking-[0.25em] uppercase">What We Do</span>
            <h2 className="font-lora text-ibe-ever text-4xl md:text-5xl font-bold mt-3">Care for the whole yard.</h2>
          </motion.div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {SERVICES.map((s, idx) => (
            <motion.div key={s.t} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5, delay: idx * 0.08 }} className="group bg-ibe-bone rounded-2xl overflow-hidden border border-ibe-bark/5 hover:shadow-xl hover:shadow-ibe-bark/10 transition">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.t} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="w-11 h-11 rounded-xl bg-ibe-ever grid place-items-center"><s.icon className="text-ibe-spring" size={20} /></span>
                  <span className="font-lora text-ibe-cream text-2xl font-bold drop-shadow">{s.n}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-lora text-ibe-ever text-xl font-bold mb-2">{s.t}</h3>
                <p className="text-ibe-bark/65 font-mulish text-sm leading-relaxed">{s.d}</p>
                <Link to="/services" className="inline-flex items-center gap-1.5 mt-4 text-ibe-spring font-mulish text-sm font-bold group/link">
                  Learn more <ArrowRight size={15} className="group-hover/link:translate-x-1 transition" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}