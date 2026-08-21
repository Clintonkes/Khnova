import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Check, ArrowRight, ArrowLeft, MapPin, Phone, Loader2 } from "lucide-react";
import SectionHeader from "@/components/SectionHeader";
import { apiPost } from "@/lib/api";

const HERO = "https://media.base44.com/images/public/6a5d5a3dd2e5eb4ee0df1b96/5797068c3_generated_image.png";

const STEPS = ["Property", "Services", "Schedule"];
const LOTS = [
  { label: "Small", desc: "Under ¼ acre" },
  { label: "Medium", desc: "¼ – ½ acre" },
  { label: "Large", desc: "½ – 1 acre" },
  { label: "Extra Large", desc: "1+ acre" },
];
const YARDS = ["Front Yard Only", "Front & Back", "Full Property"];
const SVCS = ["Weekly Mowing", "Bi-Weekly Mowing", "Landscaping & Beds", "Seasonal Clean-Up", "Hedge Trimming", "Aeration & Fertilization", "Leaf Removal", "Other"];
const SCHEDULES = ["ASAP", "Within 1–2 Weeks", "Within 3–4 Weeks", "Flexible"];

export default function IbeQuote() {
  const [step, setStep] = useState(1);
  const [done, setDone] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);
  const [d, setD] = useState({ address: "", lot: "", yard: "", gated: false, obstacles: "", services: [], schedule: "", name: "", phone: "", email: "" });
  const set = (k, v) => setD((s) => ({ ...s, [k]: v }));
  const toggleSvc = (s) => setD((p) => ({ ...p, services: p.services.includes(s) ? p.services.filter((x) => x !== s) : [...p.services, s] }));

  const s1ok = d.address && d.lot && d.yard;
  const s2ok = d.services.length > 0;
  const s3ok = d.name && d.phone && d.email && d.schedule;

  const next = () => (step === 1 ? s1ok && setStep(2) : step === 2 ? s2ok && setStep(3) : null);
  const submit = async (e) => {
    e.preventDefault();
    if (!s3ok) return;
    setSubmitting(true);
    setError(null);
    const notes = [
      `Yard: ${d.yard}`,
      d.gated ? "Fenced / locked gate access" : null,
      d.obstacles ? `Obstacles: ${d.obstacles}` : null,
      `Preferred start: ${d.schedule}`,
    ].filter(Boolean).join(" · ");
    const frequency = d.services.includes("Weekly Mowing")
      ? "weekly"
      : d.services.includes("Bi-Weekly Mowing")
      ? "bi-weekly"
      : "one-time";
    try {
      await apiPost("/api/bookings", {
        address: d.address,
        name: d.name,
        email: d.email,
        phone: d.phone,
        service: d.services.join(", "),
        frequency,
        lawn_size: d.lot,
        notes,
      });
      setDone(true);
    } catch {
      setError("Something went wrong submitting your request. Please try again or call us.");
    } finally {
      setSubmitting(false);
    }
  };
  const fade = { hidden: { opacity: 0, x: 20 }, show: { opacity: 1, x: 0 } };

  return (
    <>
      <SectionHeader title="Free Quote" subtitle="Get a fast, personalized estimate for your Centre or Cherokee County property — no obligation." image={HERO} />
      <section className="bg-ibe-bone py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {done ? (
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-ibe-cream rounded-2xl p-8 md:p-12 border border-ibe-bark/5 shadow-lg shadow-ibe-bark/5 text-center">
              <div className="w-16 h-16 rounded-full bg-knova-midnight mx-auto mb-5 flex items-center justify-center"><Check className="text-knova-cyan" size={30} /></div>
              <h2 className="font-lora text-knova-midnight text-3xl font-bold mb-2">Thanks, {d.name.split(" ")[0]}! Your quote is in.</h2>
              <p className="text-ibe-bark/70 font-mulish mb-8">We'll contact you at <span className="font-semibold">{d.phone}</span> or <span className="font-semibold">{d.email}</span> within one business day with your estimate.</p>
              <div className="text-left bg-ibe-bone rounded-xl p-6 border border-ibe-bark/5 max-w-md mx-auto space-y-2 font-mulish text-sm">
                <Row label="Address" value={d.address} />
                <Row label="Lot size" value={LOTS.find((l) => l.label === d.lot)?.desc || d.lot} />
                <Row label="Yard" value={d.yard} />
                <Row label="Services" value={d.services.join(", ")} />
                <Row label="Schedule" value={d.schedule} />
              </div>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                <Link to="/" className="px-6 py-3 rounded-full bg-knova-cyan text-ibe-bark font-mulish font-bold hover:bg-knova-midnight hover:text-ibe-cream transition">Back Home</Link>
                <Link to="/contact" className="px-6 py-3 rounded-full border-2 border-knova-midnight/30 text-knova-midnight font-mulish font-bold hover:bg-knova-midnight hover:text-ibe-cream transition">General Question?</Link>
              </div>
            </motion.div>
          ) : (
            <div className="bg-ibe-cream rounded-2xl p-6 md:p-9 border border-ibe-bark/5 shadow-lg shadow-ibe-bark/5">
              {/* progress */}
              <div className="flex items-center gap-2 mb-8">
                {STEPS.map((s, i) => (
                  <div key={s} className="flex-1">
                    <div className={`h-1.5 rounded-full transition ${step > i ? "bg-knova-midnight" : step === i + 1 ? "bg-knova-cyan" : "bg-ibe-bark/10"}`} />
                    <div className={`mt-2 font-mulish text-xs font-bold uppercase tracking-wider ${step > i ? "text-knova-midnight" : "text-ibe-bark/40"}`}>{i + 1}. {s}</div>
                  </div>
                ))}
              </div>

              {step === 1 && (
                <motion.div key="s1" initial="hidden" animate="show" variants={fade} className="space-y-6">
                  <h2 className="font-lora text-knova-midnight text-2xl font-bold">Tell us about your property</h2>
                  <div><Field label="Property Address"><input required value={d.address} onChange={(e) => set("address", e.target.value)} className="ib-input" placeholder="Address, City, MS" /></Field></div>
                  <div><Field label="Lot Size"><ChoiceGrid opts={LOTS} value={d.lot} onPick={(v) => set("lot", v)} /></Field></div>
                  <div><Field label="Yard to Service"><ChoiceGrid opts={YARDS.map((y) => ({ label: y }))} value={d.yard} onPick={(v) => set("yard", v)} /></Field></div>
                  <label className="flex items-center gap-3 cursor-pointer"><input type="checkbox" checked={d.gated} onChange={(e) => set("gated", e.target.checked)} className="w-5 h-5 accent-knova-midnight" /><span className="font-mulish text-ibe-bark">Fenced / locked gate access</span></label>
                  <div><Field label="Obstacles or notes (optional)"><textarea rows="2" value={d.obstacles} onChange={(e) => set("obstacles", e.target.value)} className="ib-input" placeholder="Sprinklers, pets, steep slope, etc." /></Field></div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div key="s2" initial="hidden" animate="show" variants={fade} className="space-y-6">
                  <h2 className="font-lora text-knova-midnight text-2xl font-bold">What services do you need?</h2>
                  <p className="text-ibe-bark/60 font-mulish -mt-3">Select all that apply.</p>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {SVCS.map((s) => {
                      const on = d.services.includes(s);
                      return (
                        <button type="button" key={s} onClick={() => toggleSvc(s)} className={`flex items-center gap-3 p-4 rounded-xl border text-left transition ${on ? "border-knova-midnight bg-knova-midnight/5" : "border-ibe-bark/15 bg-white hover:border-knova-midnight/40"}`}>
                          <span className={`w-6 h-6 rounded-md grid place-items-center shrink-0 ${on ? "bg-knova-midnight" : "bg-ibe-bark/10"}`}><Check className={on ? "text-knova-cyan" : "text-transparent"} size={14} /></span>
                          <span className="font-mulish font-semibold text-ibe-bark text-sm">{s}</span>
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div key="s3" initial="hidden" animate="show" variants={fade} className="space-y-6">
                  <h2 className="font-lora text-knova-midnight text-2xl font-bold">Schedule & contact</h2>
                  <div><Field label="Preferred Start"><ChoiceGrid opts={SCHEDULES.map((s) => ({ label: s }))} value={d.schedule} onPick={(v) => set("schedule", v)} /></Field></div>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field label="Name"><input required value={d.name} onChange={(e) => set("name", e.target.value)} className="ib-input" placeholder="Your name" /></Field>
                    <Field label="Phone"><input required type="tel" value={d.phone} onChange={(e) => set("phone", e.target.value)} className="ib-input" placeholder="(601) 555-0100" /></Field>
                  </div>
                  <div><Field label="Email"><input required type="email" value={d.email} onChange={(e) => set("email", e.target.value)} className="ib-input" placeholder="you@email.com" /></Field></div>
                  {error && <p className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p>}
                </motion.div>
              )}

              {/* nav buttons */}
              <div className="flex items-center justify-between mt-9 pt-6 border-t border-ibe-bark/10">
                {step > 1 ? <button type="button" onClick={() => setStep((s) => s - 1)} className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-knova-midnight font-mulish font-bold hover:bg-knova-midnight/5 transition"><ArrowLeft size={18} /> Back</button> : <span />}
                <button type="button" onClick={step === 3 ? submit : next} disabled={submitting || (step === 1 ? !s1ok : step === 2 ? !s2ok : !s3ok)} className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-mulish font-bold transition ${submitting || (step === 1 ? !s1ok : step === 2 ? !s2ok : !s3ok) ? "bg-ibe-bark/15 text-ibe-bark/40 cursor-not-allowed" : "bg-knova-cyan text-ibe-bark hover:bg-knova-midnight hover:text-ibe-cream"}`}>
                  {submitting ? <><Loader2 size={18} className="animate-spin" /> Submitting…</> : <>{step === 3 ? "Submit Request" : "Continue"} <ArrowRight size={18} /></>}
                </button>
              </div>
              <p className="text-center text-ibe-bark/50 font-mulish text-xs mt-5">No obligation · Free estimate · We respond within 1 business day</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

function Field({ label, children }) {
  return (<label className="block"><span className="block text-knova-midnight/60 text-xs font-mulish font-bold uppercase tracking-[0.15em] mb-2">{label}</span>{children}</label>);
}
function ChoiceGrid({ opts, value, onPick }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {opts.map((o) => {
        const active = value === o.label;
        return (
          <button type="button" key={o.label} onClick={() => onPick(o.label)} className={`text-left p-3 rounded-xl border transition ${active ? "border-knova-midnight bg-knova-midnight/5" : "border-ibe-bark/15 bg-white hover:border-knova-midnight/40"}`}>
            <div className="flex items-center justify-between mb-0.5"><span className="font-mulish font-semibold text-ibe-bark text-sm">{o.label}</span><span className={`w-5 h-5 rounded-full border-2 grid place-items-center ${active ? "border-knova-midnight bg-knova-midnight" : "border-ibe-bark/25"}`}>{active && <Check size={11} className="text-knova-cyan" />}</span></div>
            {o.desc && <p className="text-ibe-bark/55 text-xs font-mulish">{o.desc}</p>}
          </button>
        );
      })}
    </div>
  );
}
function Row({ label, value }) {
  return (<div className="flex justify-between gap-3 border-b border-ibe-bark/10 pb-1.5"><span className="text-ibe-bark/50">{label}</span><span className="font-semibold text-ibe-bark text-right">{value || "—"}</span></div>);
}