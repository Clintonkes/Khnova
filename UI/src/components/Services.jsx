import React from "react";
import { motion } from "framer-motion";
import { Scissors, Leaf, Snowflake, TreePine, ArrowRight } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";

const SERVICES = [
  { n: "01", icon: Scissors, t: "Lawn Mowing", d: "Weekly or bi-weekly cuts with clean, even lines tuned to Michigan's growing season.", img: "https://media.base44.com/images/public/6a5d5a3dd2e5eb4ee0df1b96/907b3e4fd_generated_image.png" },
  { n: "02", icon: Leaf, t: "Precision Edging", d: "Crisp edging along beds, walks and driveways: the finish that makes a yard look complete.", img: "https://media.base44.com/images/public/6a5d5a3dd2e5eb4ee0df1b96/f160529d1_generated_image.png" },
  { n: "03", icon: Snowflake, t: "Seasonal Clean-Up", d: "Spring and fall clean-ups, leaf removal and bed clearing to keep your yard pristine year-round.", img: "https://media.base44.com/images/public/6a5d5a3dd2e5eb4ee0df1b96/1df56a226_generated_image.png" },
  { n: "04", icon: TreePine, t: "Yard & Landscape Care", d: "Hedge trimming, mulch, bed management and weed control for a healthy, polished landscape.", img: "https://media.base44.com/images/public/6a5d5a3dd2e5eb4ee0df1b96/90e9253db_generated_image.png" },
];

export default function Services() {
  const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } };
  return (
    <section id="cm-services" className="bg-cm-oat py-24">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} variants={fadeUp} transition={{ duration: 0.6 }} className="max-w-2xl mb-16">
          <span className="text-cm-rust font-inter text-sm font-semibold tracking-[0.25em] uppercase">What We Do</span>
          <h2 className="font-bricolage text-cm-forest text-4xl md:text-5xl font-extrabold mt-3">Full-service yard care.</h2>
        </motion.div>
        <div className="space-y-16 md:space-y-24">
          {SERVICES.map((s, idx) => (
            <motion.div
              key={s.t}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              transition={{ duration: 0.6 }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            >
              <div className={`relative rounded-2xl overflow-hidden aspect-[4/3] shadow-xl shadow-cm-forest/10 group ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                <img src={s.img} alt={s.t} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute top-5 left-5 w-12 h-12 rounded-full bg-cm-cream/90 backdrop-blur grid place-items-center">
                  <s.icon className="text-cm-rust" size={22} />
                </div>
              </div>
              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <span className="font-bricolage text-cm-rust/40 text-6xl font-extrabold leading-none">{s.n}</span>
                <h3 className="font-bricolage text-cm-forest text-3xl md:text-4xl font-extrabold mt-3">{s.t}</h3>
                <p className="text-cm-ink/65 font-inter text-lg mt-4 max-w-md leading-relaxed">{s.d}</p>
                <button type="button" onClick={() => scrollToSection("cm-quote")} className="inline-flex items-center gap-2 mt-6 bg-transparent border-0 cursor-pointer text-cm-rust font-inter font-semibold group">
                  Get a quote <ArrowRight size={18} className="group-hover:translate-x-1 transition" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}