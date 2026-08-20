import React from "react";
import { Link } from "react-router-dom";
import { Sprout, Phone, MapPin, Clock } from "lucide-react";
import { KH, SERVICES, AREAS } from "@/lib/khnova";

export default function Footer() {
  return (
    <footer className="bg-knova-midnight text-knova-cream/80 font-dmsans">
      <div className="max-w-7xl mx-auto px-5 lg:px-8 py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-10 h-10 rounded-lg bg-knova-cyan grid place-items-center"><Sprout className="text-knova-midnight" size={22} /></span>
            <span className="font-newsreader text-xl font-bold text-knova-cream">KH NOVA</span>
          </div>
          <p className="text-sm leading-relaxed text-knova-cream/60 max-w-xs mb-4">{KH.tagline}. Reliable, professional mowing and lawn maintenance for Centre, AL and Cherokee County.</p>
          <a href={`tel:${KH.phoneRaw}`} className="inline-flex items-center gap-2 font-semibold text-knova-cyan"><Phone size={16} /> {KH.phone}</a>
        </div>
        <div>
          <h4 className="font-newsreader text-lg font-bold text-knova-cream mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            {SERVICES.slice(0, 6).map((s) => <li key={s.title}><Link to="/kh-nova/services" className="hover:text-knova-cyan transition">{s.title}</Link></li>)}
          </ul>
        </div>
        <div>
          <h4 className="font-newsreader text-lg font-bold text-knova-cream mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/kh-nova" className="hover:text-knova-cyan">Home</Link></li>
            <li><Link to="/kh-nova/services" className="hover:text-knova-cyan">Services</Link></li>
            <li><Link to="/kh-nova/about" className="hover:text-knova-cyan">About</Link></li>
            <li><Link to="/kh-nova/contact" className="hover:text-knova-cyan">Contact</Link></li>
            <li><Link to="/kh-nova/quote" className="hover:text-knova-cyan">Free Quote</Link></li>
            <li><Link to="/admin" className="text-knova-cream/40 hover:text-knova-cyan">Admin</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-newsreader text-lg font-bold text-knova-cream mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2.5"><MapPin size={16} className="text-knova-cyan mt-0.5 shrink-0" /><span>{KH.address}</span></li>
            <li className="flex gap-2.5"><Phone size={16} className="text-knova-cyan mt-0.5 shrink-0" /><a href={`tel:${KH.phoneRaw}`} className="hover:text-knova-cyan">{KH.phone}</a></li>
            <li className="flex gap-2.5"><Clock size={16} className="text-knova-cyan mt-0.5 shrink-0" /><span>{KH.hours}</span></li>
            <li className="flex gap-2.5"><MapPin size={16} className="text-knova-cyan mt-0.5 shrink-0" /><span className="text-knova-cream/60">Serving: {AREAS.slice(0, 4).join(", ")} & more</span></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-knova-cream/10">
        <div className="max-w-7xl mx-auto px-5 lg:px-8 py-5 flex flex-col sm:flex-row justify-between gap-2 text-xs text-knova-cream/50">
          <span>© {new Date().getFullYear()} KH NOVA LLC. All rights reserved.</span>
          <span>Centre, AL · Licensed & Insured</span>
        </div>
      </div>
    </footer>
  );
}