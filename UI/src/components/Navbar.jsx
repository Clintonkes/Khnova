import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Leaf } from "lucide-react";

const LINKS = [
  { l: "Home", to: "/ibe-evergreen" },
  { l: "Services", to: "/ibe-evergreen/services" },
  { l: "About", to: "/ibe-evergreen/about" },
  { l: "Contact", to: "/ibe-evergreen/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const loc = useLocation();
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 40);
    f();
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, [loc.pathname]);
  useEffect(() => { setOpen(false); }, [loc.pathname]);

  return (
    <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "bg-ibe-bone/95 backdrop-blur-md py-3 shadow-lg shadow-ibe-bark/5" : "py-5 bg-transparent"}`}>
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8 flex items-center justify-between">
        <Link to="/ibe-evergreen" className="flex items-center gap-2.5">
          <span className="w-9 h-9 rounded-lg bg-ibe-ever grid place-items-center"><Leaf className="text-ibe-spring" size={19} /></span>
          <span className="leading-tight">
            <span className={`font-lora text-lg font-bold tracking-tight block ${scrolled ? "text-ibe-ever" : "text-ibe-cream"}`}>I&B Evergreen</span>
            <span className={`font-mulish text-[9px] tracking-[0.3em] uppercase ${scrolled ? "text-ibe-bark/50" : "text-ibe-cream/60"}`}>LLC · Madison MS</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {LINKS.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === "/ibe-evergreen"} className={({ isActive }) => `text-sm font-medium transition ${isActive ? "text-ibe-spring" : scrolled ? "text-ibe-bark/70 hover:text-ibe-ever" : "text-ibe-cream/85 hover:text-ibe-spring"}`}>
              {l.l}
            </NavLink>
          ))}
          <Link to="/ibe-evergreen/quote" className="px-5 py-2.5 rounded-full bg-ibe-spring text-ibe-bark font-mulish font-bold text-sm hover:bg-ibe-ever hover:text-ibe-cream transition">Free Quote</Link>
        </nav>
        <button className={`md:hidden ${scrolled ? "text-ibe-bark" : "text-ibe-cream"}`} onClick={() => setOpen(!open)}>{open ? <X size={24} /> : <Menu size={24} />}</button>
      </div>
      {open && (
        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} className="md:hidden bg-ibe-ever border-t border-ibe-spring/30 overflow-hidden">
          <div className="px-6 py-4 flex flex-col gap-4">
            {LINKS.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === "/ibe-evergreen"} className={({ isActive }) => `py-2 ${isActive ? "text-ibe-spring" : "text-ibe-cream/85"}`}>{l.l}</NavLink>
            ))}
            <Link to="/ibe-evergreen/quote" className="text-center px-5 py-3 rounded-full bg-ibe-spring text-ibe-bark font-mulish font-bold">Free Quote</Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}