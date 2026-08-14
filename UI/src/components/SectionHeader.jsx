import React from "react";
import { motion } from "framer-motion";

export default function SectionHeader({ title, subtitle, image }) {
  const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };
  return (
    <section className="relative flex min-h-[46vh] items-center overflow-hidden">
      {image && (
        <>
          <img src={image} alt={title} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-olson-ink/90 via-olson-ink/70 to-olson-ink/40" />
        </>
      )}
      {!image && <div className="absolute inset-0 bg-olson-ink" />}
      <div className="relative mx-auto w-full max-w-[1320px] px-6 py-24 lg:px-8">
        <motion.div initial="hidden" animate="show" variants={fadeUp} transition={{ duration: 0.6 }} className="max-w-2xl">
          <h1 className="font-spectral text-olson-cream text-4xl font-bold leading-tight md:text-6xl">{title}</h1>
          {subtitle && <p className="mt-4 max-w-xl font-outfit text-lg text-olson-cream/80 leading-relaxed">{subtitle}</p>}
        </motion.div>
      </div>
    </section>
  );
}
