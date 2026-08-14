import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, CalendarCheck, BadgeDollarSign } from "lucide-react";

const easeOut = (x) => 1 - Math.pow(1 - x, 3);

function Stat({ value, suffix, label, dark }) {
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
      <div className="font-spectral text-olson-clay text-4xl md:text-5xl font-bold">{n}{suffix}</div>
      <div className={`font-outfit text-xs uppercase tracking-wider mt-2 ${dark ? "text-olson-cream/70" : "text-olson-ink/60"}`}>{label}</div>
    </div>
  );
}

const VALUES = [
  { icon: MapPin, t: "Locally Owned in Henderson", d: "We know the Vegas Valley climate and what keeps a yard green in the desert heat." },
  { icon: CalendarCheck, t: "Reliable Schedules", d: "Dependable weekly and bi-weekly visits. We show up on time, every time." },
  { icon: BadgeDollarSign, t: "Honest Pricing", d: "Clear, upfront quotes with no surprises. Quality desert lawncare at a fair rate." },
];

export default function Why() {
  const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };
  return (
    <section className="bg-olson-cactus py-24">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <Stat value={12} suffix="+" label="Years Local" dark />
          <Stat value={850} suffix="+" label="Yards Serviced" dark />
          <Stat value={48} suffix="" label="Hr Response" dark />
          <Stat value={100} suffix="%" label="Satisfaction" dark />
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {VALUES.map((v, idx) => (
            <motion.div key={v.t} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5, delay: idx * 0.1 }} className="bg-olson-cream/5 border border-olson-cream/15 rounded-2xl p-7">
              <div className="w-14 h-14 rounded-2xl bg-olson-clay/20 grid place-items-center mb-5"><v.icon className="text-olson-clay" size={26} /></div>
              <h3 className="font-spectral text-olson-cream text-2xl font-bold mb-2">{v.t}</h3>
              <p className="text-olson-cream/75 font-outfit leading-relaxed">{v.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}