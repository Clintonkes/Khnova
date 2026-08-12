import React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const PROJECTS = [
  { name: "Center Line Home Lawn", area: "Center Line", img: "https://media.base44.com/images/public/6a5d5a3dd2e5eb4ee0df1b96/90e9253db_generated_image.png" },
  { name: "Curb Appeal & Beds", area: "Warren", img: "https://media.base44.com/images/public/6a5d5a3dd2e5eb4ee0df1b96/f160529d1_generated_image.png" },
  { name: "Fall Clean-Up", area: "Center Line", img: "https://media.base44.com/images/public/6a5d5a3dd2e5eb4ee0df1b96/1df56a226_generated_image.png" },
  { name: "Full Lawn Care", area: "Metro Detroit", img: "https://media.base44.com/images/public/6a5d5a3dd2e5eb4ee0df1b96/907b3e4fd_generated_image.png" },
];

export default function Work() {
  const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };
  const scroll = (dir) => {
    const el = document.getElementById("cm-carousel");
    if (el) el.scrollBy({ left: dir * (el.clientWidth * 0.8), behavior: "smooth" });
  };
  return (
    <section id="cm-work" className="bg-cm-sand py-24">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6 mb-12">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }} className="max-w-xl">
            <span className="text-cm-rust font-inter text-sm font-semibold tracking-[0.25em] uppercase">Selected Work</span>
            <h2 className="font-bricolage text-cm-forest text-4xl md:text-5xl font-extrabold mt-3">Yards we keep looking sharp.</h2>
          </motion.div>
          <div className="hidden md:flex gap-3 shrink-0">
            <button onClick={() => scroll(-1)} className="w-12 h-12 rounded-full border-2 border-cm-forest/15 text-cm-forest grid place-items-center hover:bg-cm-forest hover:text-cm-cream transition"><ChevronLeft size={20} /></button>
            <button onClick={() => scroll(1)} className="w-12 h-12 rounded-full border-2 border-cm-forest/15 text-cm-forest grid place-items-center hover:bg-cm-forest hover:text-cm-cream transition"><ChevronRight size={20} /></button>
          </div>
        </div>
        <div id="cm-carousel" className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-4 -mx-6 px-6">
          {PROJECTS.map((p, idx) => (
            <motion.div
              key={p.name}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative rounded-2xl overflow-hidden snap-start shrink-0 w-[78%] sm:w-[45%] lg:w-[32%] aspect-[3/4] shadow-lg shadow-cm-forest/10"
            >
              <img src={p.img} alt={p.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-cm-forest via-cm-forest/15 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-bricolage text-cm-cream text-2xl font-extrabold">{p.name}</h3>
                <p className="text-cm-rust font-inter text-sm">{p.area}, MI</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}