import React from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Scissors, Leaf, Droplets, Trees, ArrowRight } from "lucide-react";

const SERVICES = [
  { icon: Scissors, t: "Lawn Mowing", d: "Weekly & bi-weekly cuts tuned to Nevada's growing season.", img: "https://media.base44.com/images/public/6a5d5a3dd2e5eb4ee0df1b96/4be3caccb_generated_image.png" },
  { icon: Leaf, t: "Xeriscape & Turf", d: "Desert-smart landscaping, sod and drought-tolerant design.", img: "https://media.base44.com/images/public/6a5d5a3dd2e5eb4ee0df1b96/f4cf18d41_generated_image.png" },
  { icon: Droplets, t: "Irrigation & Sprinklers", d: "Installation, repair and tuning for efficient desert watering.", img: "https://media.base44.com/images/public/6a5d5a3dd2e5eb4ee0df1b96/7ecd16ab5_generated_image.png" },
  { icon: Trees, t: "Yard & Landscape Care", d: "Trimming, beds, weed control and full property upkeep.", img: "https://media.base44.com/images/public/6a5d5a3dd2e5eb4ee0df1b96/bffeac372_generated_image.png" },
];

export default function ServicesPreview() {
  const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };
  return (
    <section className="bg-olson-cream py-24">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }}>
            <span className="text-olson-clay font-outfit text-sm font-semibold tracking-[0.25em] uppercase">What We Do</span>
            <h2 className="font-spectral text-olson-cactus text-4xl md:text-5xl font-bold mt-3">Services for the desert yard.</h2>
          </motion.div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((s, idx) => (
            <motion.div key={s.t} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5, delay: idx * 0.08 }} className="group bg-olson-sand rounded-2xl overflow-hidden border border-olson-ink/5 hover:shadow-xl hover:shadow-olson-ink/10 transition">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={s.img} alt={s.t} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-4 left-4 w-11 h-11 rounded-full bg-olson-cream/90 backdrop-blur grid place-items-center"><s.icon className="text-olson-clay" size={20} /></div>
              </div>
              <div className="p-6">
                <h3 className="font-spectral text-olson-cactus text-xl font-bold mb-2">{s.t}</h3>
                <p className="text-olson-ink/65 font-outfit text-sm leading-relaxed">{s.d}</p>
                <Link to="/services" className="inline-flex items-center gap-1.5 mt-4 text-olson-clay font-outfit text-sm font-semibold group/link">
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
