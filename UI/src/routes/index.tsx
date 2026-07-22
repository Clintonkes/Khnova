import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav, SiteFooter, BUSINESS } from "@/components/site-layout";
import heroLawn from "@/assets/hero-lawn.jpg";
import mowingAction from "@/assets/mowing-action.jpg";
import {
  ArrowUpRight, Scissors, Sprout, Trees, Leaf, Wrench,
  Star, Phone, MapPin, Quote,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Alanrich LLC — Professional Lawn Care & Mowing in Groves, TX" },
      { name: "description", content: "Reliable, professional lawn mowing, edging, trimming, and seasonal yard care in Groves, Port Arthur, and the Golden Triangle. Free quotes." },
    ],
  }),
  component: Home,
});

const services = [
  { n: "01", icon: Scissors, title: "Precision Mowing", desc: "Weekly or bi-weekly cuts with commercial equipment. Sharp blades, alternating patterns, uniform height." },
  { n: "02", icon: Sprout, title: "Edging & Trimming", desc: "Crisp lines along walkways, driveways, and beds. Detailed string trimming around every obstacle." },
  { n: "03", icon: Leaf, title: "Yard Cleanup", desc: "Full-property leaf removal, debris haul-off, and post-storm resets that leave your yard spotless." },
  { n: "04", icon: Trees, title: "Hedge & Shrub Care", desc: "Architectural shaping, pruning, and health-focused maintenance for hedges and ornamentals." },
  { n: "05", icon: Sprout, title: "Fertilization & Weeds", desc: "Season-tuned feeding programs and targeted pre- and post-emergent weed control." },
  { n: "06", icon: Wrench, title: "Seasonal Care", desc: "Spring startup, summer heat management, and fall winterization built for Southeast Texas." },
];

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <SiteNav />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <WhyUs />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pt-16 pb-20 lg:grid-cols-12 lg:gap-12 lg:pt-24 lg:pb-28">
        <div className="lg:col-span-7">
          <div className="mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            <span className="h-px w-10 bg-primary" />
            Est. Groves, TX · Serving the Golden Triangle
          </div>
          <h1 className="font-display text-[3.25rem] font-light leading-[0.95] tracking-tight sm:text-7xl lg:text-[6.5rem]">
            The lawn,
            <br />
            <em className="italic text-primary">reimagined</em>
            <br />
            with intent.
          </h1>
          <p className="mt-10 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Alanrich LLC is a professional lawn care studio. We treat Southeast Texas yards like architecture — precise cuts, considered edges, and turf that reads as intentional.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              to="/book"
              className="group inline-flex items-center gap-3 rounded-none bg-primary px-8 py-4 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-all hover:bg-accent hover:text-accent-foreground"
            >
              Request a Quote
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <a href={BUSINESS.phoneHref} className="inline-flex items-center gap-2 text-sm font-semibold underline decoration-primary/40 decoration-1 underline-offset-8 hover:decoration-primary">
              <Phone className="size-4" /> {BUSINESS.phone}
            </a>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="relative">
            <img src={heroLawn} alt="Manicured lawn" width={900} height={1100} className="aspect-[4/5] w-full object-cover grayscale-[15%] contrast-105" />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-primary/20" />
            <div className="absolute -bottom-6 -left-6 hidden bg-background p-5 shadow-xl ring-1 ring-border sm:block">
              <div className="flex items-center gap-1 text-accent">
                {[0,1,2,3,4].map(i => <Star key={i} className="size-3.5 fill-current" />)}
              </div>
              <p className="mt-2 font-display text-2xl italic">5.0</p>
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Local rating</p>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-3 divide-x divide-border border-y border-border">
            {[
              { k: "200+", v: "Yards / week" },
              { k: "8yr", v: "Local crew" },
              { k: "24h", v: "Quote turnaround" },
            ].map(s => (
              <div key={s.v} className="px-4 py-5">
                <p className="font-display text-3xl font-light text-primary">{s.k}</p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["Weekly Mowing", "Precision Edging", "Yard Cleanup", "Hedge Care", "Fertilization", "Seasonal Programs", "Free Estimates"];
  return (
    <section className="border-b border-border bg-secondary/40 py-4 overflow-hidden">
      <div className="flex animate-[marquee_35s_linear_infinite] gap-12 whitespace-nowrap">
        {[...items, ...items, ...items].map((t, i) => (
          <span key={i} className="font-display text-2xl italic text-muted-foreground">
            {t} <span className="ml-12 text-primary">✦</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0) } to { transform: translateX(-33.333%) } }`}</style>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">§ 01 — Services</span>
          </div>
          <div className="lg:col-span-7">
            <h2 className="font-display text-5xl font-light leading-[1] tracking-tight md:text-6xl">
              A full studio of <em className="italic text-primary">lawn craft</em>, under one roof.
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 border-t border-border md:grid-cols-2 lg:grid-cols-3">
          {services.map(({ n, icon: Icon, title, desc }) => (
            <article
              key={title}
              className="group relative border-b border-border p-8 transition-colors hover:bg-secondary/40 md:[&:nth-child(2n)]:border-l lg:[&:nth-child(2n)]:border-l-0 lg:[&:not(:nth-child(3n+1))]:border-l"
            >
              <div className="flex items-start justify-between">
                <span className="font-display text-sm font-semibold tracking-widest text-muted-foreground">{n}</span>
                <Icon className="size-5 text-primary/70" />
              </div>
              <h3 className="mt-16 font-display text-3xl font-light tracking-tight">{title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              <Link to="/book" className="mt-8 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-primary opacity-0 transition-opacity group-hover:opacity-100">
                Book service <ArrowUpRight className="size-3.5" />
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  const points = [
    "Consistent, professional crew — no revolving door.",
    "Commercial-grade equipment maintained to precision.",
    "Detailed edging, trimming, and blow-off included on every visit.",
    "Transparent pricing with no hidden fees.",
    "Fully licensed and insured for your peace of mind.",
    "Locally owned and operated in Groves, TX.",
  ];
  return (
    <section className="border-y border-border bg-secondary/30 py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-12 lg:items-center">
        <div className="relative lg:col-span-5">
          <img
            src={mowingAction}
            alt="Alanrich crew mowing with commercial equipment"
            width={1600}
            height={1000}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-accent/30" />
        </div>
        <div className="lg:col-span-7">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">§ 02 — The Studio</span>
          <h2 className="mt-6 font-display text-5xl font-light leading-[1.05] tracking-tight md:text-6xl">
            We treat your yard like <em className="italic text-accent">architecture</em>.
          </h2>
          <p className="mt-8 max-w-lg text-muted-foreground">
            Alanrich was built on one idea: show up when we say we will, do the job right, and leave every property looking magazine-ready.
          </p>
          <ul className="mt-10 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {points.map((p, i) => (
              <li key={p} className="flex items-start gap-3 border-t border-border/70 pt-4">
                <span className="font-display text-xs text-primary">0{i + 1}</span>
                <span className="text-sm leading-snug">{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", title: "Request a quote", desc: "Share your address and service needs. We respond same-day with a firm price." },
    { n: "02", title: "Confirm your schedule", desc: "Pick weekly, bi-weekly, or one-time. We lock a recurring day of the week." },
    { n: "03", title: "We show up on time", desc: "Uniformed crew, sharp equipment, precise cut. Every visit, every time." },
    { n: "04", title: "Enjoy a perfect lawn", desc: "Photos and invoice sent digitally. No door-knocking, no surprises." },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">§ 03 — Process</span>
            <h2 className="mt-6 font-display text-5xl font-light leading-[1.05] tracking-tight md:text-6xl">
              Four steps. <em className="italic text-primary">No friction.</em>
            </h2>
          </div>
          <ol className="lg:col-span-7">
            {steps.map((s, i) => (
              <li key={s.n} className="grid grid-cols-[auto_1fr_auto] items-start gap-6 border-t border-border py-8 first:border-t-0 lg:first:border-t">
                <span className="font-display text-4xl font-light text-primary">{s.n}</span>
                <div>
                  <h4 className="font-display text-2xl font-normal">{s.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
                <span className="hidden text-xs uppercase tracking-widest text-muted-foreground md:block">Step {i + 1}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const q = [
    { quote: "Best lawn service we've ever hired. Yard looks incredible and they never miss a week.", name: "Sarah M.", role: "Homeowner · Groves" },
    { quote: "Professional, fast, and detail-obsessed. My property manager loves the consistency.", name: "David R.", role: "Property Owner · Port Arthur" },
    { quote: "Alanrich transformed our overgrown yard in one visit. Highly recommend.", name: "Jessica T.", role: "Homeowner · Port Neches" },
  ];
  return (
    <section className="border-y border-border bg-card py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <Quote className="size-10 text-primary" />
        <blockquote className="mt-8 font-display text-4xl font-light leading-[1.15] tracking-tight md:text-6xl">
          “Best lawn service we've ever hired. The yard looks{" "}
          <em className="italic text-primary">incredible</em>, and they never miss a week.”
        </blockquote>
        <footer className="mt-10 flex flex-wrap items-center justify-between gap-6 border-t border-border pt-8">
          <div>
            <p className="font-display text-lg">Sarah M.</p>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">Homeowner · Groves, TX</p>
          </div>
          <div className="flex items-center gap-1 text-accent">
            {[0,1,2,3,4].map(i => <Star key={i} className="size-4 fill-current" />)}
          </div>
        </footer>
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {q.slice(1).map((item) => (
            <figure key={item.name} className="border-t border-border pt-8">
              <blockquote className="font-display text-xl italic leading-snug text-muted-foreground">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-4">
                <p className="text-sm font-semibold">{item.name}</p>
                <p className="text-xs uppercase tracking-widest text-muted-foreground">{item.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-primary">§ 04 — Begin</span>
            <h2 className="mt-6 font-display text-6xl font-light leading-[0.95] tracking-tight md:text-8xl">
              Ready for a lawn <br />you're <em className="italic text-accent">proud of?</em>
            </h2>
            <p className="mt-8 max-w-xl text-muted-foreground">
              Free estimate within 24 hours. Weekly service typically starts within days. No contracts, no pressure.
            </p>
          </div>
          <div className="flex flex-col gap-4 lg:col-span-4 lg:items-end">
            <Link to="/book" className="group inline-flex w-full items-center justify-between gap-4 border border-primary bg-primary px-8 py-5 text-sm font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-accent hover:border-accent hover:text-accent-foreground lg:w-auto">
              Book Service <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
            <Link to="/contact" className="group inline-flex w-full items-center justify-between gap-4 border border-border px-8 py-5 text-sm font-bold uppercase tracking-widest transition-colors hover:border-primary hover:text-primary lg:w-auto">
              Ask a Question <ArrowUpRight className="size-4" />
            </Link>
            <div className="mt-6 space-y-2 text-sm text-muted-foreground lg:text-right">
              <p className="flex items-center gap-2 lg:justify-end"><Phone className="size-4 text-primary" /> {BUSINESS.phone}</p>
              <p className="flex items-center gap-2 lg:justify-end"><MapPin className="size-4 text-primary" /> Groves, TX</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
