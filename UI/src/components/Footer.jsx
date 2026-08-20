import React from "react";
import { Link } from "react-router-dom";
import { Leaf, MapPin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ibe-ever text-ibe-cream/70 pt-16 pb-8">
      <div className="max-w-[1320px] mx-auto px-6 lg:px-8 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5 mb-4">
            <span className="w-9 h-9 rounded-lg bg-ibe-spring grid place-items-center"><Leaf className="text-ibe-bark" size={18} /></span>
            <span className="leading-tight">
              <span className="font-lora text-ibe-cream text-lg font-bold block">I&B Evergreen</span>
              <span className="font-mulish text-[9px] tracking-[0.3em] uppercase text-ibe-cream/60">LLC · Madison MS</span>
            </span>
          </div>
          <p className="font-mulish max-w-sm">Lush, healthy lawns and dependable landscaping for Madison and the greater metro-Jackson area. Family-owned, year-round care that keeps your yard evergreen.</p>
        </div>
        <div>
          <h4 className="font-lora text-ibe-cream text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 font-mulish text-sm">
            <li><a href="tel:+16013311246" className="flex items-center gap-3 hover:text-ibe-spring"><Phone size={16} className="text-ibe-spring" />+1 (601) 331-1246</a></li>
            <li><a href="mailto:ibevergreenllc@proton.me" className="flex items-center gap-3 hover:text-ibe-spring break-all"><Mail size={16} className="text-ibe-spring" />ibevergreenllc@proton.me</a></li>
            <li className="flex items-start gap-3"><MapPin size={16} className="text-ibe-spring mt-0.5 shrink-0" /><span>132 Millhouse Dr, Madison,<br />MS 39110</span></li>
          </ul>
        </div>
        <div>
          <h4 className="font-lora text-ibe-cream text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 font-mulish text-sm">
            <li><Link to="/ibe-evergreen/services" className="hover:text-ibe-spring">Services</Link></li>
            <li><Link to="/ibe-evergreen/about" className="hover:text-ibe-spring">About Us</Link></li>
            <li><Link to="/ibe-evergreen/quote" className="hover:text-ibe-spring">Free Quote</Link></li>
            <li><Link to="/ibe-evergreen" className="hover:text-ibe-spring">Home</Link></li>
          </ul>
          <Link to="/ibe-evergreen/quote" className="inline-block mt-5 px-5 py-2.5 rounded-full bg-ibe-spring text-ibe-bark font-mulish font-bold text-sm hover:bg-ibe-cream transition">Get a Quote</Link>
        </div>
      </div>
      <div className="border-t border-ibe-cream/10 mt-12 pt-6 max-w-[1320px] mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between gap-3 font-mulish text-xs text-ibe-cream/50">
        <span>© {new Date().getFullYear()} I&B Evergreen LLC. All rights reserved.</span>
        <span>Serving Madison · Ridgeland · Jackson · Brandon · Flowood · Gluckstadt</span>
      </div>
    </footer>
  );
}