import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, MapPin, Mail, Loader2 } from "lucide-react";
import { apiPost } from "@/lib/api";

const OPTIONS = [
  "Weekly Mowing", "Bi-Weekly Mowing", "One-Time Cut", "Edging & Trimming",
  "Spring Clean-Up", "Fall Clean-Up", "Landscape Care",
];

export default function Quote() {
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", phone: "", address: "", service: OPTIONS[0], notes: "" });
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  async function submit(e) {
    e.preventDefault();
    setError(null);
    setStatus("submitting");
    try {
      await apiPost("/api/bookings", {
        name: form.name,
        email: form.email,
        phone: form.phone,
        address: form.address,
        service: form.service,
        notes: form.notes || null,
      });
    } catch {
      setStatus("idle");
      setError("Something went wrong. Please try again or email us.");
      return;
    }
    setStatus("success");
  }

  const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };

  return (
    <section id="cm-quote" className="bg-cm-forest py-24">
      <div className="max-w-[1000px] mx-auto px-6 lg:px-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} transition={{ duration: 0.6 }} className="text-center mb-8">
          <span className="text-cm-rust font-inter text-sm font-semibold tracking-[0.25em] uppercase">Free Quote</span>
          <h2 className="font-bricolage text-cm-cream text-4xl md:text-5xl font-extrabold mt-3 leading-tight">Let's care for your yard.</h2>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mt-6 font-inter text-cm-cream/80">
            <span className="flex items-center gap-2"><MapPin className="text-cm-rust" size={16} />8314 Dale Uppr, Center Line, MI 48015</span>
            <a href="mailto:carmstrong@proton.me" className="flex items-center gap-2 hover:text-cm-rust"><Mail className="text-cm-rust" size={16} />carmstrong@proton.me</a>
          </div>
        </motion.div>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} variants={fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="bg-cm-cream rounded-3xl p-7 md:p-9 shadow-2xl shadow-cm-ink/30">
          {status === "success" ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 rounded-full bg-cm-rust mx-auto mb-5 flex items-center justify-center"><Check className="text-cm-cream" size={30} /></div>
              <h3 className="font-bricolage text-cm-forest text-2xl font-extrabold mb-2">Thank you, {form.name || "neighbor"}!</h3>
              <p className="text-cm-ink/70 font-inter">We'll reach out within one business day to schedule your free quote.</p>
            </div>
          ) : (
            <form onSubmit={submit} className="grid md:grid-cols-2 gap-5">
              <Field label="Name">
                <input required value={form.name} onChange={(e) => set("name", e.target.value)} className="cm-input" placeholder="Your name" />
              </Field>
              <Field label="Email">
                <input required type="email" value={form.email} onChange={(e) => set("email", e.target.value)} className="cm-input" placeholder="you@email.com" />
              </Field>
              <Field label="Phone">
                <input required type="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} className="cm-input" placeholder="(586) 555-0000" />
              </Field>
              <Field label="Property Address">
                <input required value={form.address} onChange={(e) => set("address", e.target.value)} className="cm-input" placeholder="Address, City, MI" />
              </Field>
              <div className="md:col-span-2">
                <Field label="Service">
                  <select value={form.service} onChange={(e) => set("service", e.target.value)} className="cm-input">
                    {OPTIONS.map((s) => <option key={s}>{s}</option>)}
                  </select>
                </Field>
              </div>
              <div className="md:col-span-2">
                <Field label="Notes (optional)">
                  <textarea rows="3" value={form.notes} onChange={(e) => set("notes", e.target.value)} className="cm-input" placeholder="Lot size, gates, anything we should know…" />
                </Field>
              </div>
              {error && <p className="md:col-span-2 rounded-lg bg-cm-rust/10 px-4 py-3 text-sm text-cm-rust">{error}</p>}
              <div className="md:col-span-2">
                <button type="submit" disabled={status === "submitting"} className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-full bg-cm-rust text-cm-cream font-inter font-semibold hover:bg-cm-forest transition disabled:opacity-60">
                  {status === "submitting" ? <><Loader2 className="animate-spin" size={18} /> Submitting…</> : "Request My Free Quote"}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-cm-forest/60 text-xs font-inter font-semibold uppercase tracking-[0.15em] mb-2">{label}</span>
      {children}
    </label>
  );
}
