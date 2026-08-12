import React from "react";
import { Link } from "@tanstack/react-router";
import { Leaf, MapPin, Mail } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";

export default function Footer() {
  return (
    <footer className="bg-cm-ink text-cm-cream/70 pt-16 pb-8">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-9 h-9 rounded-full bg-cm-rust grid place-items-center"><Leaf className="text-cm-cream" size={18} /></span>
            <span className="font-bricolage text-cm-cream text-xl font-extrabold">Carmstrong</span>
            <span className="font-inter text-cm-cream/60 text-[10px] tracking-[0.3em] uppercase border-l border-cm-cream/30 pl-2">LLC</span>
          </div>
          <p className="font-inter max-w-sm">Reliable, detail-driven lawncare serving Center Line and the Metro Detroit area. Honest work, fair pricing, yards kept sharp on every visit.</p>
        </div>
        <div>
          <h4 className="font-bricolage text-cm-cream text-lg font-extrabold mb-4">Contact</h4>
          <ul className="space-y-3 font-inter text-sm">
            <li className="flex items-start gap-3"><MapPin className="text-cm-rust mt-0.5 shrink-0" size={16} /><span>8314 Dale Uppr, Center Line,<br />MI 48015</span></li>
            <li><a href="mailto:carmstrong@proton.me" className="flex items-center gap-3 hover:text-cm-rust break-all"><Mail size={16} />carmstrong@proton.me</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bricolage text-cm-cream text-lg font-extrabold mb-4">Services</h4>
          <ul className="space-y-2 font-inter text-sm">
            <li><button type="button" onClick={() => scrollToSection("cm-services")} className="bg-transparent border-0 p-0 cursor-pointer hover:text-cm-rust">Lawn Mowing</button></li>
            <li><button type="button" onClick={() => scrollToSection("cm-services")} className="bg-transparent border-0 p-0 cursor-pointer hover:text-cm-rust">Precision Edging</button></li>
            <li><button type="button" onClick={() => scrollToSection("cm-services")} className="bg-transparent border-0 p-0 cursor-pointer hover:text-cm-rust">Seasonal Clean-Up</button></li>
            <li><button type="button" onClick={() => scrollToSection("cm-services")} className="bg-transparent border-0 p-0 cursor-pointer hover:text-cm-rust">Yard & Landscape Care</button></li>
          </ul>
          <button type="button" onClick={() => scrollToSection("cm-quote")} className="inline-block mt-5 px-5 py-2.5 rounded-full bg-cm-rust border-0 cursor-pointer text-cm-cream font-inter font-semibold text-sm hover:bg-cm-cream hover:text-cm-ink transition">Free Quote</button>
        </div>
      </div>
      <div className="border-t border-cm-cream/10 mt-12 pt-6 max-w-[1320px] mx-auto px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-3 font-inter text-xs text-cm-cream/50">
        <span>© {new Date().getFullYear()} Carmstrong LLC. All rights reserved.</span>
        <span>Center Line · Warren · Metro Detroit, MI</span>
        <Link to="/admin" className="hover:text-cm-rust">Staff Login</Link>
      </div>
    </footer>
  );
}