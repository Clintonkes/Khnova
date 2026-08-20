import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Sprout, Menu, X, Phone } from "lucide-react";
import { KH } from "@/lib/khnova";

const links = [
  { to: "/kh-nova", label: "Home", end: true },
  { to: "/kh-nova/services", label: "Services" },
  { to: "/kh-nova/about", label: "About" },
  { to: "/kh-nova/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-knova-mist/95 backdrop-blur border-b border-knova-ink/10">
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <Link to="/kh-nova" className="flex items-center gap-2.5">
            <span className="w-10 h-10 rounded-lg bg-knova-cyan grid place-items-center"><Sprout className="text-knova-midnight" size={22} /></span>
            <span className="leading-none">
              <span className="block font-newsreader text-xl font-bold text-knova-midnight tracking-tight">KH NOVA</span>
              <span className="block font-dmsans text-[10px] uppercase tracking-[0.2em] text-knova-slate">Lawn Care LLC</span>
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => <NavLink key={l.to} to={l.to} end={l.end} className={({ isActive }) => `px-4 py-2 font-dmsans text-sm font-medium rounded-full transition ${isActive ? "text-knova-midnight bg-knova-cyan/15" : "text-knova-ink hover:text-knova-midnight"}`}>{l.label}</NavLink>)}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <a href={`tel:${KH.phoneRaw}`} className="font-dmsans text-sm font-semibold text-knova-midnight flex items-center gap-1.5"><Phone size={15} /> {KH.phone}</a>
            <Link to="/kh-nova/quote" className="px-5 py-2.5 rounded-full bg-knova-cyan text-knova-midnight font-dmsans text-sm font-bold hover:bg-knova-midnight hover:text-knova-cyan transition">Free Quote</Link>
          </div>
          <button className="md:hidden p-2 text-knova-midnight" onClick={() => setOpen((o) => !o)} aria-label="Menu">{open ? <X size={24} /> : <Menu size={24} />}</button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-knova-mist border-t border-knova-ink/10 px-5 py-4 space-y-1">
          {links.map((l) => <NavLink key={l.to} to={l.to} end={l.end} onClick={() => setOpen(false)} className={({ isActive }) => `block px-4 py-3 rounded-lg font-dmsans font-medium ${isActive ? "bg-knova-cyan/15 text-knova-midnight" : "text-knova-ink"}`}>{l.label}</NavLink>)}
          <a href={`tel:${KH.phoneRaw}`} className="block px-4 py-3 font-dmsans font-semibold text-knova-midnight">Call {KH.phone}</a>
          <Link to="/kh-nova/quote" onClick={() => setOpen(false)} className="block text-center px-4 py-3 rounded-full bg-knova-cyan text-knova-midnight font-dmsans font-bold">Get a Free Quote</Link>
        </div>
      )}
    </header>
  );
}