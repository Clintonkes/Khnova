import React, { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, CalendarCheck, Handshake } from "lucide-react";

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
      <div className="font-bricolage text-cm-rust text-4xl md:text-5xl font-extrabold">{n}{suffix}</div>
      <div className="text-cm-cream/70 font-inter text-xs uppercase tracking-wider mt-2">{label}</div>
    </div>
  );
}

const PROMISES = [
  { icon: MapPin, t: "Locally Owned", d: "Based in Center Line, MI. We know Metro Detroit lawns and the seasons that shape them." },
  { icon: CalendarCheck, t: "Dependable Schedules", d: "Reliable weekly and bi-weekly visits. We show up when we say we will, every time." },
  { icon: Handshake, t: "Fair Upfront Pricing", d: "Honest quotes with no surprises. Quality work at a fair price, guaranteed on every visit." },
];

export default function Why() {
  const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };
  return (
    <section id="cm-why" className="bg-cm-oat py-24">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={fadeUp} transition={{ duration: 0.6 }} className="bg-cm-forest rounded-3xl p-8 md:p-12 grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <Stat value={10} suffix="+" label="Years Local" />
          <Stat value={600} suffix="+" label="Lawns Serviced" />
          <Stat value={48} suffix="" label="Hr Response" />
          <Stat value={100} suffix="%" label="Satisfaction" />
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {PROMISES.map((p, idx) => (
            <motion.div
              key={p.t}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-cm-cream border border-cm-forest/8 rounded-2xl p-7"
            >
              <div className="w-14 h-14 rounded-2xl bg-cm-rust/10 grid place-items-center mb-5">
                <p.icon className="text-cm-rust" size={26} />
              </div>
              <h3 className="font-bricolage text-cm-forest text-2xl font-extrabold mb-2">{p.t}</h3>
              <p className="text-cm-ink/65 font-inter leading-relaxed">{p.d}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}