import React from "react";

const ITEMS = ["Lawn Mowing", "Precision Edging", "Hedge Trimming", "Seasonal Clean-Up", "Mulch & Beds", " Weed Control", "Fall Cleanup", "Lawn Care"];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="bg-cm-forest py-4 overflow-hidden">
      <div className="flex w-max animate-cm-marquee">
        {row.map((it, idx) => (
          <span key={idx} className="flex items-center gap-4 px-8 font-bricolage text-cm-cream text-lg md:text-xl italic whitespace-nowrap">
            {it}<span className="w-1.5 h-1.5 rounded-full bg-cm-rust" />
          </span>
        ))}
      </div>
    </div>
  );
}