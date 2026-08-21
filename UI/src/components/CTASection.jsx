import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import { motion } from "framer-motion";
import { KH } from "@/lib/khnova";

export default function CTASection() {
  return (
    <section className="py-16 bg-knova-cyan relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="font-newsreader text-3xl md:text-4xl font-bold text-knova-midnight">Ready for a lawn you'll love?</h2>
          <p className="mt-2 text-knova-midnight/80 font-dmsans text-lg">Get a free, no-obligation quote — most lawns priced within 24 hours.</p>
        </motion.div>
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <Link to="/quote" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-knova-midnight text-knova-cyan font-dmsans font-bold hover:bg-knova-cream hover:text-knova-midnight transition"><ArrowRight size={18} /> Get a Free Quote</Link>
          <a href={`tel:${KH.phoneRaw}`} className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border-2 border-knova-midnight text-knova-midnight font-dmsans font-bold hover:bg-knova-midnight hover:text-knova-cyan transition"><Phone size={18} /> Call Us</a>
        </div>
      </div>
    </section>
  );
}