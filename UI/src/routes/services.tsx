import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";
import { Scissors, Leaf, Droplets, Trees, Sprout, Wrench } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services · Olson LLC" },
      { name: "description", content: "Professional lawn mowing, xeriscape, irrigation, and desert landscape care in Henderson and the Las Vegas Valley." },
    ],
  }),
  component: ServicesPage,
});

const HERO = "https://media.base44.com/images/public/6a5d5a3dd2e5eb4ee0df1b96/9ed559465_generated_image.png";

const services = [
  { icon: Scissors, title: "Lawn Mowing", desc: "Weekly or bi-weekly cuts with commercial equipment, tuned to Nevada's growing season and heat." },
  { icon: Leaf, title: "Xeriscape & Turf", desc: "Desert-smart landscaping, sod installation, and drought-tolerant design built for the valley." },
  { icon: Droplets, title: "Irrigation & Sprinklers", desc: "Installation, repair, and seasonal tuning for efficient, water-wise desert irrigation." },
  { icon: Trees, title: "Yard & Landscape Care", desc: "Hedge trimming, bed management, and weed control for a healthy, polished property." },
  { icon: Sprout, title: "Seasonal Clean-Up", desc: "Spring and fall clean-ups, debris haul-off, and resets that keep your yard looking sharp." },
  { icon: Wrench, title: "Property Maintenance", desc: "Ongoing upkeep programs tailored to your schedule, from a single cut to full-season care." },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-olson-sand font-outfit text-olson-ink">
      <Navbar />
      <main>
        <SectionHeader
          title="A full studio of desert lawn craft."
          subtitle="Everything your property needs, from precision mowing to xeriscape design, under one roof."
          image={HERO}
        />

        <section className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1320px] gap-8 px-6 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
            {services.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="rounded-2xl border border-olson-ink/5 bg-olson-cream p-8">
                <Icon className="size-8 text-olson-clay" />
                <h3 className="mt-6 font-spectral text-2xl font-bold text-olson-cactus">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-olson-ink/65">{desc}</p>
              </article>
            ))}
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
