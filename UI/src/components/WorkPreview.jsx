import React from "react";
import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

const SHOTS = [
  "https://media.base44.com/images/public/6a5d5a3dd2e5eb4ee0df1b96/4be3caccb_generated_image.png",
  "https://media.base44.com/images/public/6a5d5a3dd2e5eb4ee0df1b96/f4cf18d41_generated_image.png",
  "https://media.base44.com/images/public/6a5d5a3dd2e5eb4ee0df1b96/7ecd16ab5_generated_image.png",
  "https://media.base44.com/images/public/6a5d5a3dd2e5eb4ee0df1b96/bffeac372_generated_image.png",
];

export default function WorkPreview() {
  const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };
  return (
    <section className="bg-olson-sand py-24">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }} className="max-w-xl">
            <span className="text-olson-clay font-outfit text-sm font-semibold tracking-[0.25em] uppercase">Recent Work</span>
            <h2 className="font-spectral text-olson-cactus text-4xl md:text-5xl font-bold mt-3">Yards we keep green.</h2>
          </motion.div>
          <Link to="/book" className="inline-flex items-center gap-2 text-olson-clay font-outfit font-semibold group shrink-0">
            Get your free quote <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
          </Link>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {SHOTS.map((img, idx) => (
            <motion.div key={idx} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5, delay: idx * 0.08 }} className="group relative rounded-2xl overflow-hidden aspect-[3/4] shadow-lg shadow-olson-ink/10">
              <img src={img} alt="Olson work" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-olson-ink/50 to-transparent opacity-0 group-hover:opacity-100 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}