import { createFileRoute, Link } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BUSINESS } from "@/components/site-layout";
import { useState } from "react";
import { z } from "zod";
import { apiPost } from "@/lib/api";
import { ArrowRight, CheckCircle2, Mail, MapPin, Clock, Loader2 } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact · Olson LLC Lawncare" },
      { name: "description", content: "Questions, feedback, or a special request for Olson LLC lawncare in Henderson, NV? Reach out and we'll respond fast." },
      { property: "og:title", content: "Contact · Olson LLC" },
      { property: "og:description", content: "Reach our desert lawncare team in Henderson, NV." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(160),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  subject: z.string().trim().min(2).max(120),
  message: z.string().trim().min(5, "Please provide a short message").max(1500),
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const parsed = schema.safeParse(Object.fromEntries(new FormData(e.currentTarget)));
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check your entries.");
      return;
    }
    setStatus("submitting");
    try {
      await apiPost("/api/contacts", {
        ...parsed.data,
        phone: parsed.data.phone || null,
      });
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again or email us.");
      return;
    }
    setStatus("success");
    (e.target as HTMLFormElement).reset();
  }

  return (
    <div className="min-h-screen bg-olson-sand font-outfit text-olson-ink">
      <Navbar />
      <main>
        <section className="border-b border-olson-ink/10 bg-gradient-to-b from-olson-stone/30 to-transparent py-16 md:py-24">
          <div className="mx-auto max-w-[1320px] px-6 lg:px-8">
            <span className="text-xs font-bold uppercase tracking-widest text-olson-clay font-outfit">Contact</span>
            <h1 className="mt-3 font-spectral text-4xl font-bold tracking-tight text-olson-cactus md:text-6xl">
              We'd love to hear from you.
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-olson-ink/65">
              Have a general question, feedback, or a special request? Send us a message below and we'll get back to you within one business day.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1320px] gap-10 px-6 lg:grid-cols-2 lg:px-8">
            <div className="space-y-6">
              {[
                { icon: Mail, label: "Email", value: BUSINESS.email, href: `mailto:${BUSINESS.email}` },
                { icon: MapPin, label: "Address", value: BUSINESS.address },
                { icon: Clock, label: "Hours", value: "Mon–Sat · 7:00 AM – 6:00 PM" },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4 rounded-2xl border border-olson-ink/5 bg-olson-cream p-6">
                  <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-olson-clay/10 text-olson-clay">
                    <Icon className="size-5" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-bold uppercase tracking-widest text-olson-ink/50">{label}</p>
                    {href ? (
                      <a href={href} className="mt-1 block font-spectral text-lg font-bold break-words hover:text-olson-clay">{value}</a>
                    ) : (
                      <p className="mt-1 font-spectral text-lg font-bold break-words">{value}</p>
                    )}
                  </div>
                </div>
              ))}
              <div className="rounded-3xl bg-olson-cactus p-8 text-olson-cream">
                <h3 className="font-spectral text-lg font-bold">Ready for a quote instead?</h3>
                <p className="mt-2 text-sm text-olson-cream/70">Skip the general message: request a free lawncare quote and we'll respond within 24 hours.</p>
                <Link to="/book" className="mt-5 inline-flex items-center gap-2 rounded-full bg-olson-clay px-6 py-3 text-sm font-bold text-olson-cream">
                  Get a Free Quote <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            <div>
              {status === "success" ? (
                <div className="rounded-3xl border border-olson-clay/20 bg-olson-cream p-10 text-center shadow-xl">
                  <CheckCircle2 className="mx-auto size-16 text-olson-clay" />
                  <h2 className="mt-6 font-spectral text-3xl font-bold text-olson-cactus">Message sent!</h2>
                  <p className="mt-3 text-olson-ink/65">We'll get back to you within one business day.</p>
                  <button onClick={() => setStatus("idle")} className="mt-8 rounded-full border border-olson-ink/15 px-6 py-3 text-sm font-bold hover:bg-olson-sand">Send another</button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="rounded-3xl border border-olson-ink/5 bg-olson-cream p-8 shadow-xl md:p-10">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <FieldC label="Name *" name="name" placeholder="Your name" required />
                    <FieldC label="Phone" name="phone" type="tel" placeholder="Optional" />
                  </div>
                  <div className="mt-5">
                    <FieldC label="Email *" name="email" type="email" placeholder="you@example.com" required />
                  </div>
                  <div className="mt-5">
                    <FieldC label="Subject *" name="subject" placeholder="What's this about?" required />
                  </div>
                  <div className="mt-5">
                    <label className="block text-xs font-bold uppercase tracking-widest text-olson-ink/50 font-outfit">Message *</label>
                    <textarea name="message" rows={6} required placeholder="Tell us how we can help…" className="ol-input mt-1.5 resize-none" />
                  </div>
                  {error && <p className="mt-4 rounded-lg bg-olson-clay/10 px-4 py-3 text-sm text-olson-clay">{error}</p>}
                  <button type="submit" disabled={status === "submitting"} className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-olson-clay px-8 py-4 text-sm font-bold text-olson-cream shadow-lg shadow-olson-ink/10 transition-all hover:-translate-y-0.5 hover:bg-olson-cactus disabled:opacity-60">
                    {status === "submitting" ? <><Loader2 className="size-4 animate-spin" /> Sending…</> : <>Send Message <ArrowRight className="size-4" /></>}
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function FieldC({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <label className="block text-xs font-bold uppercase tracking-widest text-olson-ink/50 font-outfit">{label}</label>
      <input name={name} type={type} placeholder={placeholder} required={required} className="ol-input mt-1.5" />
    </div>
  );
}
