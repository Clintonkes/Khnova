import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav, SiteFooter } from "@/components/site-layout";
import { Scissors, Sprout, Trees, Leaf, Wrench, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Alanrich LLC" },
      { name: "description", content: "Professional lawn mowing, edging, trimming, cleanup, and seasonal care in Groves, TX." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Scissors, title: "Precision Mowing", desc: "Weekly or bi-weekly cuts with commercial equipment. Sharp blades, alternating patterns, uniform height." },
  { icon: Sprout, title: "Edging & Trimming", desc: "Crisp lines along walkways, driveways, and beds. Detailed string trimming around every obstacle." },
  { icon: Leaf, title: "Yard Cleanup", desc: "Full-property leaf removal, debris haul-off, and post-storm resets that leave your yard spotless." },
  { icon: Trees, title: "Hedge & Shrub Care", desc: "Architectural shaping, pruning, and health-focused maintenance for hedges and ornamentals." },
  { icon: Sprout, title: "Fertilization & Weeds", desc: "Season-tuned feeding programs and targeted pre- and post-emergent weed control." },
  { icon: Wrench, title: "Seasonal Care", desc: "Spring startup, summer heat management, and fall winterization built for Southeast Texas." },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SiteNav />
      <main>
        <section className="border-b border-primary/10 bg-gradient-to-b from-secondary/40 to-transparent py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-6">
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Services</span>
            <h1 className="mt-3 font-display text-4xl font-extrabold tracking-tight md:text-6xl">
              A full studio of lawn craft.
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Everything your property needs — from precision mowing to seasonal care — under one roof.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ icon: Icon, title, desc }) => (
              <article key={title} className="rounded-3xl border border-primary/10 bg-card p-8">
                <Icon className="size-8 text-primary" />
                <h3 className="mt-6 font-display text-2xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </article>
            ))}
          </div>
          <div className="mx-auto mt-12 max-w-7xl px-6 text-center">
            <Link to="/book" className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground">
              Get a Free Quote <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
