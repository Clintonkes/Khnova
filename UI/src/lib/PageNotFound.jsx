import React from "react";
import { Link } from "react-router-dom";
import NovaMark from "@/components/NovaMark";

export default function PageNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-ibe-bone text-center px-6">
      <span className="w-14 h-14 rounded-xl bg-knova-midnight grid place-items-center mb-6"><NovaMark className="text-knova-cyan" size={26} /></span>
      <h1 className="font-lora text-knova-midnight text-5xl font-bold">404</h1>
      <p className="text-ibe-bark/65 font-mulish text-lg mt-3 mb-8">That page doesn't exist.</p>
      <Link to="/" className="px-6 py-3 rounded-full bg-knova-cyan text-ibe-bark font-mulish font-bold hover:bg-knova-midnight hover:text-ibe-cream transition">Back Home</Link>
    </div>
  );
}
