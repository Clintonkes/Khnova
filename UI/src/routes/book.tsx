import { createFileRoute, Link } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BUSINESS } from "@/components/site-layout";
import { useState } from "react";
import { z } from "zod";
import { apiPost } from "@/lib/api";
import { ArrowRight, CheckCircle2, Mail, MapPin, Phone, Loader2 } from "lucide-react";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Get a Free Quote · Olson LLC" },
      { name: "description", content: "Request a free, no-obligation lawncare quote in Henderson, NV and the Las Vegas Valley. We respond within one business day." },
      { property: "og:title", content: "Get a Free Quote · Olson LLC" },
      { property: "og:description", content: "Free desert lawncare quotes within one business day." },
    ],
  }),
  component: BookPage,
});

const OPTIONS = [
  "Weekly Mowing", "Bi-Weekly Mowing", "One-Time Cut", "Xeriscape & Turf",
  "Irrigation & Sprinklers", "Seasonal Clean-Up", "Landscape Care", "Not sure, recommend for me",
];

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  phone: z.string().trim().min(7, "Enter a valid phone").max(30),
  address: z.string().trim().min(5, "Enter service address").max(200),
  service: z.string().min(1, "Choose a service"),
  lawn_size: z.string().max(60).optional().or(z.literal("")),
  preferred_date: z.string().optional().or(z.literal("")),
  notes: z.string().max(1000).optional().or(z.literal("")),
});

function BookPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Please check your entries.");
      return;
    }
    setStatus("submitting");
    const payload = {
      ...parsed.data,
      lawn_size: parsed.data.lawn_size || null,
      preferred_date: parsed.data.preferred_date || null,
      notes: parsed.data.notes || null,
    };
    try {
      await apiPost("/api/bookings", payload);
    } catch {
      setStatus("error");
      setError("We couldn't submit your request. Please try again or email us.");
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
            <span className="text-xs font-bold uppercase tracking-widest text-olson-clay font-outfit">Free Quote</span>
            <h1 className="mt-3 font-spectral text-4xl font-bold tracking-tight text-olson-cactus md:text-6xl">
              Get a free quote in 24 hours.
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-olson-ink/65">
              Fill out the form and we'll respond same day with a firm price for your Henderson or Las Vegas property.
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="mx-auto grid max-w-[1320px] gap-10 px-6 lg:grid-cols-[1fr_1.4fr] lg:px-8">
            <aside className="space-y-6">
              <div className="rounded-3xl border border-olson-ink/5 bg-olson-cream p-8">
                <h3 className="font-spectral text-lg font-bold text-olson-cactus">Reach us directly</h3>
                <ul className="mt-6 space-y-4 text-sm">
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 size-5 text-olson-clay" />
                    <a href={`tel:${BUSINESS.phone.replace(/[^\d+]/g, "")}`} className="font-semibold hover:text-olson-clay">{BUSINESS.phone}</a>
                  </li>
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 size-5 text-olson-clay" />
                    <a href={`mailto:${BUSINESS.email}`} className="font-semibold hover:text-olson-clay break-all">{BUSINESS.email}</a>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 size-5 text-olson-clay" />
                    <span className="text-olson-ink/65">{BUSINESS.address}</span>
                  </li>
                </ul>
              </div>
              <div className="rounded-3xl bg-olson-cactus p-8 text-olson-cream">
                <h3 className="font-spectral text-lg font-bold">What happens next</h3>
                <ol className="mt-6 space-y-4 text-sm text-olson-cream/80">
                  {["We review your details", "Send you a firm quote in 24h", "Confirm a recurring schedule", "First service within days"].map((s, i) => (
                    <li key={s} className="flex items-start gap-3">
                      <span className="grid size-6 shrink-0 place-items-center rounded-full bg-olson-clay text-xs font-bold text-olson-cream">{i + 1}</span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>

            <div>
              {status === "success" ? (
                <div className="rounded-3xl border border-olson-clay/20 bg-olson-cream p-10 text-center shadow-xl">
                  <CheckCircle2 className="mx-auto size-16 text-olson-clay" />
                  <h2 className="mt-6 font-spectral text-3xl font-bold text-olson-cactus">Request received!</h2>
                  <p className="mt-3 text-olson-ink/65">
                    Thanks. We'll reach out within 24 hours with your quote.
                  </p>
                  <div className="mt-8 flex flex-wrap justify-center gap-3">
                    <button onClick={() => setStatus("idle")} className="rounded-full border border-olson-ink/15 px-6 py-3 text-sm font-bold hover:bg-olson-sand">
                      Request another
                    </button>
                    <Link to="/" className="rounded-full bg-olson-clay px-6 py-3 text-sm font-bold text-olson-cream">Back home</Link>
                  </div>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="rounded-3xl border border-olson-ink/5 bg-olson-cream p-8 shadow-xl md:p-10">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Full name" name="name" required placeholder="Jane Doe" />
                    <Field label="Phone" name="phone" type="tel" required placeholder="(702) 555-0100" />
                  </div>
                  <div className="mt-5">
                    <Field label="Email" name="email" type="email" required placeholder="you@example.com" />
                  </div>
                  <div className="mt-5">
                    <Field label="Property address" name="address" required placeholder="Street, City, NV" />
                  </div>
                  <div className="mt-5 grid gap-5 sm:grid-cols-2">
                    <div>
                      <Label>Service needed *</Label>
                      <select name="service" required defaultValue="" className="ol-input mt-1.5">
                        <option value="" disabled>Choose a service…</option>
                        {OPTIONS.map((s) => <option key={s}>{s}</option>)}
                      </select>
                    </div>
                    <Field label="Lawn size (approx.)" name="lawn_size" placeholder="e.g. 1/4 acre" />
                  </div>
                  <div className="mt-5">
                    <Field label="Preferred start date" name="preferred_date" type="date" />
                  </div>
                  <div className="mt-5">
                    <Label>Notes for our crew</Label>
                    <textarea name="notes" rows={4} placeholder="Gate code, pet info, problem areas…" className="ol-input mt-1.5 resize-none" />
                  </div>
                  {error && <p className="mt-4 rounded-lg bg-olson-clay/10 px-4 py-3 text-sm text-olson-clay">{error}</p>}
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-olson-clay px-8 py-4 text-sm font-bold text-olson-cream shadow-lg shadow-olson-ink/10 transition-all hover:-translate-y-0.5 hover:bg-olson-cactus disabled:opacity-60 disabled:hover:translate-y-0"
                  >
                    {status === "submitting" ? <><Loader2 className="size-4 animate-spin" /> Submitting…</> : <>Request my free quote <ArrowRight className="size-4" /></>}
                  </button>
                  <p className="mt-4 text-center text-xs text-olson-ink/50">
                    By submitting, you agree to be contacted about your quote. No spam, ever.
                  </p>
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

function Label({ children }: { children: React.ReactNode }) {
  return <label className="block text-xs font-bold uppercase tracking-widest text-olson-ink/50 font-outfit">{children}</label>;
}
function Field({ label, name, type = "text", placeholder, required }: { label: string; name: string; type?: string; placeholder?: string; required?: boolean }) {
  return (
    <div>
      <Label>{label}{required && " *"}</Label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        className="ol-input mt-1.5"
      />
    </div>
  );
}
