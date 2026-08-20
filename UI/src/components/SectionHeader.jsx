import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

export default function SectionHeader({ title, subtitle, image }) {
  return (
    <section className="relative pt-36 pb-16 overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover ib-kenburns" />
      <div className="absolute inset-0 bg-ibe-ever/80" />
      <div className="relative max-w-[1320px] mx-auto px-6 lg:px-8 text-center">
        <nav className="flex items-center justify-center gap-2 text-ibe-cream/60 font-mulish text-sm mb-4">
          <Link to="/" className="hover:text-ibe-spring">Home</Link>
          <ChevronRight size={14} />
          <span className="text-ibe-spring">{title}</span>
        </nav>
        <h1 className="font-lora text-ibe-cream text-4xl md:text-6xl font-bold tracking-tight">{title}</h1>
        {subtitle && <p className="text-ibe-cream/80 font-mulish text-lg mt-4 max-w-2xl mx-auto">{subtitle}</p>}
      </div>
    </section>
  );
}