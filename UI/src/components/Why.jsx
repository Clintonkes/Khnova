import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, CalendarCheck, BadgeDollarSign } from "lucide-react";

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
      <div className="font-lora text-ibe-spring text-4xl md:text-5xl font-bold">{n}{suffix}</div>
      <div className="font-mulish text-xs uppercase tracking-wider mt-2 text-ibe-cream/70">{label}</div>
    </div>
  );
}

const VALUES = [
  { icon: MapPin, t: "Madison Owned & Operated", d: "Family-owned and locally rooted — we know Mississippi lawns and what keeps them lush all season." },
  { icon: CalendarCheck, t: "Dependable Schedules", d: "Weekly and bi-weekly visits you can set your watch to. We show up on time, every time." },
  { icon: BadgeDollarSign, t: "Fair, Honest Pricing", d: "Clear, upfront quotes with no surprises. Quality yard care at a fair, honest rate." },
];

export default function Why() {
  const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };
  return (
    <section className="bg-ibe-ever py-24">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <Stat value={15} suffix="+" label="Years Local" />
          <Stat value={600} suffix="+" label="Lawns Served" />
          <Stat value={48} suffix="" label="Hr Response" />
          <Stat value={100} suffix="%" label="Satisfaction" />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {VALUES.map((v, idx) => (
            <motion.div key={v.t} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5, delay: idx * 0.1 }} className="bg-ibe-cream/5 border border-ibe-cream/15 rounded-2xl p-7">
              <div className="w-14 h-14 rounded-2xl bg-ibe-spring/20 grid place-items-center mb-5"><v.icon className="text-ibe-spring" size={26} /></div>
              <h3 className="font-lora text-ibe-cream text-2xl font-bold mb-2">{v.t}</h3>
              <p className="text-ibe-cream/75 font-mulish leading-relaxed">{v.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}