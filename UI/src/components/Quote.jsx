import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, MapPin, Mail } from "lucide-react";

const OPTIONS = [
  "Weekly Mowing", "Bi-Weekly Mowing", "One-Time Cut", "Edging & Trimming",
  "Spring Clean-Up", "Fall Clean-Up", "Landscape Care",
];

export default function Quote() {
  const [done, setDone] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", address: "", service: OPTIONS[0], notes: "" });
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const submit = (e) => { e.preventDefault(); setDone(true); };
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
          {done ? (
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
              <Field label="Property Address">
                <input required value={form.address} onChange={(e) => set("address", e.target.value)} className="cm-input" placeholder="Address, City, MI" />
              </Field>
              <Field label="Service">
                <select value={form.service} onChange={(e) => set("service", e.target.value)} className="cm-input">
                  {OPTIONS.map((s) => <option key={s}>{s}</option>)}
                </select>
              </Field>
              <div className="md:col-span-2">
                <Field label="Notes (optional)">
                  <textarea rows="3" value={form.notes} onChange={(e) => set("notes", e.target.value)} className="cm-input" placeholder="Lot size, gates, anything we should know…" />
                </Field>
              </div>
              <div className="md:col-span-2">
                <button type="submit" className="w-full md:w-auto px-10 py-4 rounded-full bg-cm-rust text-cm-cream font-inter font-semibold hover:bg-cm-forest transition">Request My Free Quote</button>
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