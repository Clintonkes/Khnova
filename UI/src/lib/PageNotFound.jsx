import React from "react";
import { Link } from "react-router-dom";
import { Sprout } from "lucide-react";

export default function PageNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-ibe-bone text-center px-6">
      <span className="w-14 h-14 rounded-xl bg-ibe-ever grid place-items-center mb-6"><Sprout className="text-ibe-spring" size={26} /></span>
      <h1 className="font-lora text-ibe-ever text-5xl font-bold">404</h1>
      <p className="text-ibe-bark/65 font-mulish text-lg mt-3 mb-8">That page doesn't exist.</p>
      <Link to="/" className="px-6 py-3 rounded-full bg-ibe-spring text-ibe-bark font-mulish font-bold hover:bg-ibe-ever hover:text-ibe-cream transition">Back Home</Link>
    </div>
  );
}
