import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "@/lib/khnova";

export default function ServicesPreview() {
  return (
    <section className="py-20 md:py-28 bg-knova-mist">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-knova-cyan font-dmsans font-semibold uppercase tracking-wider text-sm">What We Do</span>
          <h2 className="font-newsreader text-4xl md:text-5xl font-bold text-knova-midnight mt-2">Our Lawn Care Services</h2>
          <p className="mt-4 text-knova-slate text-lg">From weekly mowing to full seasonal cleanup, KH NOVA keeps your property looking its best all year.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="group bg-white rounded-2xl p-7 border border-knova-ink/8 hover:border-knova-cyan/50 hover:shadow-xl hover:shadow-knova-midnight/5 transition relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-knova-cyan scale-x-0 group-hover:scale-x-100 transition origin-left" />
                <div className="w-12 h-12 rounded-xl bg-knova-midnight grid place-items-center mb-5 group-hover:bg-knova-cyan transition"><Icon className="text-knova-cyan group-hover:text-knova-midnight" size={22} /></div>
                <h3 className="font-newsreader text-xl font-bold text-knova-midnight mb-2">{s.title}</h3>
                <p className="text-knova-slate text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            );
          })}
        </div>
        <div className="text-center mt-10"><Link to="/kh-nova/services" className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-knova-midnight text-knova-cream font-dmsans font-bold hover:bg-knova-cyan hover:text-knova-midnight transition">View All Services <ArrowRight size={18} /></Link></div>
      </div>
    </section>
  );
}