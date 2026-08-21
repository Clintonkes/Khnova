import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, CalendarCheck, BadgeDollarSign } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import NovaMark from "@/components/NovaMark";
import { AREAS } from "@/lib/khnova";

const HERO = "https://media.base44.com/images/public/6a5d5a3dd2e5eb4ee0df1b96/0ce5cc76c_generated_image.png";

const easeOut = (x) => 1 - Math.pow(1 - x, 3);

function Stat({ value, suffix, label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf;
    const start = performance.now();
    const dur = 1600;
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      setN(Math.floor(easeOut(p) * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);
  return (
    <div ref={ref} className="text-center">
      <div className="font-lora text-knova-cyan text-4xl md:text-5xl font-bold">{n}{suffix}</div>
      <div className="font-mulish text-xs uppercase tracking-wider mt-2 text-ibe-cream/70">{label}</div>
    </div>
  );
}

const VALUES = [
  { icon: MapPin, t: "Centre Owned & Operated", d: "Family-owned and locally rooted — we know Alabama lawns and what keeps them lush all season." },
  { icon: CalendarCheck, t: "Dependable Schedules", d: "Weekly and bi-weekly visits you can set your watch to. We show up on time, every time." },
  { icon: BadgeDollarSign, t: "Fair, Honest Pricing", d: "Clear, upfront quotes with no surprises. Quality yard care at a fair, honest rate." },
];

export default function IbeAbout() {
  const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };
  return (
    <>
      <SectionHeader title="About Us" subtitle="Family-owned lawn care, rooted in Centre, Alabama." image={HERO} />

      <section className="bg-ibe-cream py-20">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-14 items-center">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }}>
            <span className="text-knova-cyan font-mulish text-sm font-bold tracking-[0.25em] uppercase">Our Story</span>
            <h2 className="font-lora text-knova-midnight text-3xl md:text-4xl font-bold mt-3 mb-5">Eight years of keeping Centre green.</h2>
            <div className="space-y-4 text-ibe-bark/70 font-mulish text-lg leading-relaxed">
              <p>KH NOVA LLC started as a single mower and a handful of neighbors who needed a lawn crew they could trust. Eight years later we're still family-owned, still local, and still showing up on time — now caring for over 200 lawns across Centre, AL and Cherokee County.</p>
              <p>We know how Alabama's long growing season, humidity, and clay soil treat a yard, because we've been working in it since day one. That local know-how shapes every mow, bed, and clean-up we do.</p>
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg shadow-ibe-bark/10">
            <img src="https://media.base44.com/images/public/6a5d5a3dd2e5eb4ee0df1b96/1c9beb1d1_generated_image.png" alt="KH NOVA crew at work" className="w-full h-full object-cover" />
            <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-knova-midnight grid place-items-center"><NovaMark className="text-knova-cyan" size={22} /></div>
          </motion.div>
        </div>
      </section>

      <section className="bg-knova-midnight py-24">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <Stat value={8} suffix="+" label="Years Local" />
            <Stat value={200} suffix="+" label="Lawns Served" />
            <Stat value={24} suffix="" label="Hr Quote Turnaround" />
            <Stat value={100} suffix="%" label="Satisfaction" />
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {VALUES.map((v, idx) => (
              <motion.div key={v.t} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5, delay: idx * 0.1 }} className="bg-ibe-cream/5 border border-ibe-cream/15 rounded-2xl p-7">
                <div className="w-14 h-14 rounded-2xl bg-knova-cyan/20 grid place-items-center mb-5"><v.icon className="text-knova-cyan" size={26} /></div>
                <h3 className="font-lora text-ibe-cream text-2xl font-bold mb-2">{v.t}</h3>
                <p className="text-ibe-cream/75 font-mulish leading-relaxed">{v.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ibe-bone py-20">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-8 text-center">
          <span className="text-knova-cyan font-mulish text-sm font-bold tracking-[0.25em] uppercase">Where We Work</span>
          <h2 className="font-lora text-knova-midnight text-3xl md:text-4xl font-bold mt-3 mb-10">Proudly serving Cherokee County.</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {AREAS.map((a) => (
              <span key={a} className="px-5 py-2.5 rounded-full bg-ibe-cream border border-ibe-bark/10 font-mulish font-semibold text-ibe-bark">{a}</span>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
