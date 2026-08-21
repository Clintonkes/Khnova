import React from "react";
import { motion } from "framer-motion";
import { Scissors, Flower2, Sparkles, Trees, Droplets, Leaf, Check } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";

const HERO = "https://media.base44.com/images/public/6a5d5a3dd2e5eb4ee0df1b96/bc30b03e4_generated_image.png";

const SERVICES = [
  { n: "01", icon: Scissors, t: "Lawn Mowing & Maintenance", d: "Weekly and bi-weekly mowing with clean edging and blowing, tuned to Alabama's long growing season.", points: ["Weekly / bi-weekly cuts", "Edging & blowing", "Clean, even lines"], img: "https://media.base44.com/images/public/6a5d5a3dd2e5eb4ee0df1b96/1c9beb1d1_generated_image.png" },
  { n: "02", icon: Flower2, t: "Landscaping & Bed Care", d: "Mulch installation, shrub beds, plantings and bed maintenance that keep your yard looking polished.", points: ["Mulch installation", "Shrub & flower beds", "Plantings & refresh"], img: "https://media.base44.com/images/public/6a5d5a3dd2e5eb4ee0df1b96/bc30b03e4_generated_image.png" },
  { n: "03", icon: Sparkles, t: "Seasonal Clean-Up", d: "Spring and fall clean-ups, leaf and debris removal to keep your yard pristine all year.", points: ["Leaf removal", "Bed clearing", "Debris haul-off"], img: "https://media.base44.com/images/public/6a5d5a3dd2e5eb4ee0df1b96/5797068c3_generated_image.png" },
  { n: "04", icon: Trees, t: "Hedge & Shrub Trimming", d: "Shaping and pruning of hedges, shrubs and small trees for a neat, healthy landscape.", points: ["Hedge shaping", "Shrub pruning", "Size control"], img: "https://media.base44.com/images/public/6a5d5a3dd2e5eb4ee0df1b96/0ce5cc76c_generated_image.png" },
  { n: "05", icon: Droplets, t: "Aeration & Fertilization", d: "Core aeration and seasonal fertilization feeding for a thicker, healthier lawn.", points: ["Core aeration", "Seasonal feeding", "Soil health"], img: "https://media.base44.com/images/public/6a5d5a3dd2e5eb4ee0df1b96/765b29e15_generated_image.png" },
  { n: "06", icon: Leaf, t: "Leaf & Debris Removal", d: "Fall leaf collection and yard debris removal to keep your property clean and healthy.", points: ["Fall leaf collection", "Branch removal", "Full clean-up"], img: "https://media.base44.com/images/public/6a5d5a3dd2e5eb4ee0df1b96/1c9beb1d1_generated_image.png" },
];

export default function IbeServices() {
  const fadeUp = { hidden: { opacity: 0, y: 40 }, show: { opacity: 1, y: 0 } };
  return (
    <>
      <SectionHeader title="Our Services" subtitle="Full-service lawn care and landscaping for Centre, AL and the greater Cherokee County area." image={HERO} />
      <section className="bg-ibe-bone py-20">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-8 space-y-16">
          {SERVICES.map((s, idx) => (
            <motion.div key={s.t} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} variants={fadeUp} transition={{ duration: 0.6 }} className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center bg-ibe-cream rounded-2xl p-6 lg:p-8 border border-ibe-bark/5">
              <div className={`relative rounded-xl overflow-hidden aspect-[4/3] shadow-lg shadow-ibe-bark/10 ${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                <img src={s.img} alt={s.t} className="w-full h-full object-cover" />
                <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-knova-midnight grid place-items-center"><s.icon className="text-knova-cyan" size={22} /></div>
              </div>
              <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-lora text-knova-cyan/30 text-5xl font-bold leading-none">{s.n}</span>
                  <h3 className="font-lora text-knova-midnight text-3xl font-bold">{s.t}</h3>
                </div>
                <p className="text-ibe-bark/65 font-mulish text-lg leading-relaxed mb-5">{s.d}</p>
                <div className="grid sm:grid-cols-2 gap-x-6 gap-y-2">
                  {s.points.map((p) => (
                    <div key={p} className="flex items-center gap-2 text-ibe-bark/75 font-mulish"><span className="w-5 h-5 rounded-full bg-knova-midnight/15 grid place-items-center shrink-0"><Check className="text-knova-midnight" size={13} /></span>{p}</div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}