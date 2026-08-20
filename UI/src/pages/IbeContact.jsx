import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, Loader2, CheckCircle2 } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { apiPost } from "@/lib/api";

const HERO = "https://media.base44.com/images/public/6a5d5a3dd2e5eb4ee0df1b96/765b29e15_generated_image.png";

const INFO = [
  { icon: Phone, label: "Phone", value: "+1 (601) 331-1246", href: "tel:+16013311246" },
  { icon: Mail, label: "Email", value: "ibevergreenllc@proton.me", href: "mailto:ibevergreenllc@proton.me" },
  { icon: MapPin, label: "Address", value: "132 Millhouse Dr, Madison, MS 39110", href: null },
  { icon: Clock, label: "Hours", value: "Mon–Sat · 7:00 AM – 6:00 PM", href: null },
];

export default function IbeContact() {
  const [form, setForm] = useState({ name: "", phone: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null);
  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));
  const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };

  async function onSubmit(e) {
    e.preventDefault();
    setError(null);
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in your name, email, and message.");
      return;
    }
    setStatus("submitting");
    try {
      await apiPost("/api/contacts", {
        name: form.name,
        email: form.email,
        phone: form.phone || null,
        subject: form.subject || null,
        message: form.message,
      });
      setStatus("success");
    } catch {
      setStatus("error");
      setError("Something went wrong. Please try again or call us.");
    }
  }

  return (
    <>
      <SectionHeader title="Contact Us" subtitle="Questions, feedback, or a special request? Reach out and we'll respond within one business day." image={HERO} />
      <section className="bg-ibe-bone py-20">
        <div className="max-w-[1320px] mx-auto px-6 lg:px-8 grid lg:grid-cols-5 gap-10">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }} className="lg:col-span-3">
            <h2 className="font-lora text-ibe-ever text-3xl font-bold mb-2">Send Us a Message</h2>
            <p className="text-ibe-bark/65 font-mulish mb-8">We'll get back to you within one business day.</p>
            <div className="bg-ibe-cream rounded-2xl p-7 md:p-9 border border-ibe-bark/5 shadow-lg shadow-ibe-bark/5">
              {status === "success" ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-ibe-ever mx-auto mb-5 flex items-center justify-center"><CheckCircle2 className="text-ibe-spring" size={30} /></div>
                  <h3 className="font-lora text-ibe-ever text-2xl font-bold mb-2">Message sent!</h3>
                  <p className="text-ibe-bark/70 font-mulish mb-6">We'll get back to you within one business day.</p>
                  <button onClick={() => { setStatus("idle"); setForm({ name: "", phone: "", email: "", subject: "", message: "" }); }} className="rounded-full border border-ibe-bark/15 px-6 py-3 text-sm font-mulish font-bold hover:bg-ibe-bone transition">Send another</button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="grid md:grid-cols-2 gap-5">
                  <Field label="Name *"><input required value={form.name} onChange={(e) => set("name", e.target.value)} className="ib-input" placeholder="Your name" /></Field>
                  <Field label="Phone"><input type="tel" value={form.phone} onChange={(e) => set("phone", e.target.value)} className="ib-input" placeholder="Optional" /></Field>
                  <Field label="Email *"><input required type="email" value={form.email} onChange={(e) => set("email", e.target.value)} className="ib-input" placeholder="you@email.com" /></Field>
                  <Field label="Subject"><input value={form.subject} onChange={(e) => set("subject", e.target.value)} className="ib-input" placeholder="What's this about?" /></Field>
                  <div className="md:col-span-2"><Field label="Message *"><textarea rows="5" required value={form.message} onChange={(e) => set("message", e.target.value)} className="ib-input resize-none" placeholder="Tell us how we can help…" /></Field></div>
                  {error && <p className="md:col-span-2 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
                  <div className="md:col-span-2">
                    <button type="submit" disabled={status === "submitting"} className="inline-flex w-full items-center justify-center gap-2 px-8 py-4 rounded-full bg-ibe-spring text-ibe-bark font-mulish font-bold hover:bg-ibe-ever hover:text-ibe-cream transition disabled:opacity-60">
                      {status === "submitting" ? <><Loader2 size={18} className="animate-spin" /> Sending…</> : <><Send size={18} /> Send Message</>}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="lg:col-span-2">
            <h2 className="font-lora text-ibe-ever text-3xl font-bold mb-2">Get In Touch</h2>
            <p className="text-ibe-bark/65 font-mulish mb-8">Reach us directly — we're happy to help.</p>
            <div className="space-y-4">
              {INFO.map((i) => (
                <div key={i.label} className="bg-ibe-cream rounded-2xl p-6 border border-ibe-bark/5 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-ibe-ever/10 grid place-items-center shrink-0"><i.icon className="text-ibe-ever" size={22} /></div>
                  <div>
                    <div className="text-ibe-bark/50 font-mulish text-xs uppercase tracking-wider">{i.label}</div>
                    {i.href ? <a href={i.href} className="text-ibe-ever font-mulish font-semibold hover:text-ibe-spring break-all">{i.value}</a> : <div className="text-ibe-bark font-mulish font-semibold">{i.value}</div>}
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-ibe-ever rounded-2xl p-6 mt-4 text-ibe-cream/85 font-mulish text-sm">
              <div className="font-lora text-ibe-cream text-lg font-bold mb-2">Service Areas</div>
              Serving Madison, Ridgeland, Jackson, Brandon, Flowood, Gluckstadt and the surrounding metro-Jackson area.
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function Field({ label, children }) {
  return (
    <label className="block">
      <span className="block text-ibe-ever/60 text-xs font-mulish font-bold uppercase tracking-[0.15em] mb-2">{label}</span>
      {children}
    </label>
  );
}
