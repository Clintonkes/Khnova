import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Leaf } from "lucide-react";

const LINKS = [
  { l: "Services", h: "#cm-services" },
  { l: "Why Us", h: "#cm-why" },
  { l: "Work", h: "#cm-work" },
  { l: "Quote", h: "#cm-quote" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    f();
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-cm-forest/95 backdrop-blur-md py-3 shadow-lg" : "py-5 bg-transparent"}`}>
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8 flex items-center justify-between">
        <a href="#cm-top" className="flex items-center gap-2">
          <span className="w-9 h-9 rounded-full bg-cm-rust grid place-items-center"><Leaf className="text-cm-cream" size={18} /></span>
          <span className={`font-bricolage text-xl font-extrabold tracking-tight ${scrolled ? "text-cm-cream" : "text-cm-forest"}`}>Carmstrong</span>
          <span className={`font-inter text-[10px] tracking-[0.3em] uppercase border-l pl-2 ${scrolled ? "text-cm-cream/60 border-cm-cream/30" : "text-cm-forest/50 border-cm-forest/30"}`}>LLC</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <a key={l.h} href={l.h} className={`text-sm font-medium transition ${scrolled ? "text-cm-cream/80 hover:text-cm-rust" : "text-cm-ink/70 hover:text-cm-rust"}`}>{l.l}</a>
          ))}
          <a href="#cm-quote" className="px-5 py-2.5 rounded-full bg-cm-rust text-cm-cream font-semibold text-sm hover:bg-cm-forest transition">Free Quote</a>
        </nav>
        <button className={`md:hidden ${scrolled ? "text-cm-cream" : "text-cm-forest"}`} onClick={() => setOpen(!open)}>{open ? <X size={24} /> : <Menu size={24} />}</button>
      </div>
      {open && (
        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="md:hidden bg-cm-forest border-t border-cm-rust/20 overflow-hidden">
          <div className="px-6 py-4 flex flex-col gap-4">
            {LINKS.map((l) => (
              <a key={l.h} href={l.h} onClick={() => setOpen(false)} className="text-cm-cream/85 py-2">{l.l}</a>
            ))}
            <a href="#cm-quote" onClick={() => setOpen(false)} className="text-center px-5 py-3 rounded-full bg-cm-rust text-cm-cream font-semibold">Free Quote</a>
          </div>
        </motion.div>
      )}
    </header>
  );
}