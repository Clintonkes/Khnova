import React from "react";
import { Link } from "@tanstack/react-router";
import { Sprout, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-olson-ink text-olson-cream/70 pt-16 pb-8">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-9 h-9 rounded-full bg-olson-clay grid place-items-center"><Sprout className="text-olson-cream" size={18} /></span>
            <span className="font-spectral text-olson-cream text-xl font-bold">Olson</span>
            <span className="font-outfit text-[10px] tracking-[0.3em] uppercase border-l border-olson-cream/30 pl-2 text-olson-cream/60">LLC</span>
          </div>
          <p className="font-outfit max-w-sm">Desert-smart lawncare and landscaping serving Henderson and the greater Las Vegas Valley. Green lawns, honest work, reliable schedules — year-round.</p>
        </div>
        <div>
          <h4 className="font-spectral text-olson-cream text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 font-outfit text-sm">
            <li><a href="tel:+17024162662" className="flex items-center gap-3 hover:text-olson-clay"><Phone size={16} className="text-olson-clay" />+1 (702) 416-2662</a></li>
            <li><a href="mailto:olsonnllc@proton.me" className="flex items-center gap-3 hover:text-olson-clay break-all"><Mail size={16} className="text-olson-clay" />olsonnllc@proton.me</a></li>
            <li className="flex items-start gap-3"><MapPin size={16} className="text-olson-clay mt-0.5 shrink-0" /><span>1827 Adonis Ave, Henderson,<br />NV 89074</span></li>
          </ul>
        </div>
        <div>
          <h4 className="font-spectral text-olson-cream text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 font-outfit text-sm">
            <li><Link to="/services" className="hover:text-olson-clay">Services</Link></li>
            <li><Link to="/about" className="hover:text-olson-clay">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-olson-clay">Contact</Link></li>
            <li><Link to="/" className="hover:text-olson-clay" activeOptions={{ exact: true }}>Home</Link></li>
          </ul>
          <Link to="/book" className="inline-block mt-5 px-5 py-2.5 rounded-full bg-olson-clay text-olson-cream font-outfit font-semibold text-sm hover:bg-olson-cactus transition">Get a Free Quote</Link>
        </div>
      </div>
      <div className="border-t border-olson-cream/10 mt-12 pt-6 max-w-[1320px] mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between gap-3 font-outfit text-xs text-olson-cream/50">
        <span>© {new Date().getFullYear()} Olson LLC. All rights reserved.</span>
        <span className="flex flex-wrap items-center gap-x-4 gap-y-1">
          Serving Henderson · Las Vegas · Summerlin · Green Valley · Anthem
          <Link to="/admin" className="hover:text-olson-clay">Staff Login</Link>
        </span>
      </div>
    </footer>
  );
}