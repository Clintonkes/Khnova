import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";

export default function SectionHeader({ title, subtitle, image }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image src={image} fittingType="fill" className="w-full h-full kn-kenburns" />
        <div className="absolute inset-0 bg-gradient-to-br from-knova-midnight/90 via-knova-midnight/75 to-knova-navy/80" />
      </div>
      <div className="relative max-w-7xl mx-auto px-5 lg:px-8 py-20 md:py-28 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <nav className="flex justify-center items-center gap-2 text-knova-cream/60 text-xs font-dmsans uppercase tracking-wider mb-4">
            <Link to="/kh-nova" className="hover:text-knova-cyan">Home</Link><span className="text-knova-cyan">/</span><span className="text-knova-cream">{title}</span>
          </nav>
          <h1 className="font-newsreader text-4xl md:text-5xl font-bold text-knova-cream leading-tight">{title}</h1>
          {subtitle && <p className="mt-4 max-w-2xl mx-auto text-knova-cream/75 text-lg">{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  );
}