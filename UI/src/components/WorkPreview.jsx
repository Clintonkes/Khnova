import React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import { SERVICES, IMAGES } from "@/lib/khnova";

export default function KhnServices() {
  return (
    <>
      <SectionHeader title="Our Services" subtitle="Professional lawn care and mowing services tailored to your property in Centre, AL and Cherokee County." image={IMAGES.hero} />
      <section className="py-20 md:py-28 bg-knova-mist">
        <div className="max-w-7xl mx-auto px-5 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {SERVICES.map((s, i) => { const Icon = s.icon; return (
              <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: (i % 2) * 0.1 }} className="bg-white rounded-2xl p-7 border border-knova-ink/8 flex gap-5">
                <div className="shrink-0 w-14 h-14 rounded-xl bg-knova-midnight grid place-items-center"><Icon className="text-knova-cyan" size={24} /></div>
                <div>
                  <h3 className="font-newsreader text-xl font-bold text-knova-midnight mb-1.5">{s.title}</h3>
                  <p className="text-knova-slate text-sm mb-3">{s.desc}</p>
                  <ul className="flex flex-wrap gap-x-5 gap-y-1.5">{s.points.map((p) => <li key={p} className="flex items-center gap-1.5 text-sm text-knova-ink"><Check size={15} className="text-knova-cyan" /> {p}</li>)}</ul>
                </div>
              </motion.div>
            ); })}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}