import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Image } from "@/components/ui/image";
import { IMAGES } from "@/lib/khnova";
import NovaMark from "@/components/NovaMark";

const stats = [["8+", "Years"], ["200+", "Lawns Served"], ["5★", "Rated"], ["100%", "Local"]];

export default function Hero() {
  return (
    <section className="relative h-[88vh] min-h-[600px] overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Image src={IMAGES.hero} fittingType="fill" className="w-full h-full kn-kenburns" />
        <div className="absolute inset-0 bg-gradient-to-br from-knova-midnight/90 via-knova-midnight/65 to-knova-midnight/30" />
      </div>
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 w-full">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-2xl pb-28">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-knova-cyan/15 border border-knova-cyan/30 text-knova-cyan text-xs font-dmsans font-semibold uppercase tracking-wider mb-6">
            <NovaMark size={14} /> Centre, Alabama's Premier Lawn Care
          </div>
          <h1 className="font-newsreader text-5xl md:text-6xl lg:text-7xl font-bold text-knova-cream leading-[1.05]">Mowing & Lawn Care, <span className="text-knova-cyan">Done Right.</span></h1>
          <p className="mt-6 text-lg md:text-xl text-knova-cream/80 max-w-xl">KH NOVA LLC delivers reliable, professional mowing and lawn maintenance across Centre, AL and Cherokee County — crisp cuts, healthy turf, and a yard you'll be proud of.</p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link to="/kh-nova/quote" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-knova-cyan text-knova-midnight font-dmsans font-bold hover:bg-knova-cream transition group">Get a Free Quote <ArrowRight size={18} className="group-hover:translate-x-1 transition" /></Link>
            <Link to="/kh-nova/services" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-knova-cream/30 text-knova-cream font-dmsans font-bold hover:bg-knova-cream/10 transition">Our Services</Link>
          </div>
        </motion.div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 bg-knova-midnight/40 backdrop-blur-sm border-t border-knova-cream/10">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 grid grid-cols-2 md:grid-cols-4 divide-x divide-knova-cream/10">
          {stats.map(([n, l]) => (
            <div key={l} className="py-5 text-center"><div className="font-newsreader text-3xl font-bold text-knova-cyan">{n}</div><div className="font-dmsans text-xs uppercase tracking-wider text-knova-cream/70">{l}</div></div>
          ))}
        </div>
      </div>
    </section>
  );
}