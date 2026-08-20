import React from "react";
import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import Why from "@/components/Why";
import WorkPreview from "@/components/WorkPreview";
import CTASection from "@/components/CTASection";

export default function IbeHome() {
  return (
    <>
      <Hero />
      <ServicesPreview />
      <Why />
      <WorkPreview />
      <CTASection />
    </>
  );
}