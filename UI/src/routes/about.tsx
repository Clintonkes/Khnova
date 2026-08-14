import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MapPin, CalendarCheck, BadgeDollarSign, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SectionHeader from "@/components/SectionHeader";
import CTASection from "@/components/CTASection";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About · Olson LLC" },
      { name: "description", content: "Olson LLC is a locally owned lawncare and landscaping company rooted in Henderson, Nevada, serving the Las Vegas Valley." },
    ],
  }),
  component: AboutPage,
});

const HERO = "https://media.base44.com/images/public/6a5d5a3dd2e5eb4ee0df1b96/9ed559465_generated_image.png";
const STORY = "https://media.base44.com/images/public/6a5d5a3dd2e5eb4ee0df1b96/bffeac372_generated_image.png";
const AREAS = ["Henderson", "Las Vegas", "Summerlin", "Green Valley", "Anthem", "Boulder City", "Enterprise", "Spring Valley"];

const VALUES = [
  { icon: Heart, t: "Desert Expertise", d: "Years working in the Vegas Valley taught us exactly what a yard needs to stay green through 110° summers." },
  { icon: CalendarCheck, t: "Reliability First", d: "We treat your schedule like our own. Dependable visits, clear communication, no missed appointments." },
  { icon: BadgeDollarSign, t: "Honest Work", d: "Fair, upfront pricing and work we stand behind. If it's not right, we make it right." },
];

function AboutPage() {
  const fadeUp = { hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } };
  return (
    <div className="min-h-screen bg-olson-sand font-outfit text-olson-ink">
      <Navbar />
      <main>
        <SectionHeader title="About Olson LLC" subtitle="Locally owned desert lawncare, built on reliability and honest work." image={HERO} />
        <section className="bg-olson-sand py-20">
          <div className="max-w-[1320px] mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }} className="rounded-2xl overflow-hidden aspect-[4/3] shadow-xl shadow-olson-ink/10">
                <img src={STORY} alt="Olson LLC" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6, delay: 0.1 }}>
                <span className="text-olson-clay font-outfit text-sm font-semibold tracking-[0.25em] uppercase">Our Story</span>
                <h2 className="font-spectral text-olson-cactus text-4xl md:text-5xl font-bold mt-3 leading-tight">Green lawns for the desert, since day one.</h2>
                <p className="text-olson-ink/70 font-outfit text-lg mt-5 leading-relaxed">Olson LLC is a locally owned lawncare and landscaping company rooted in Henderson, Nevada. We started with a simple goal: bring reliable, honest, desert-smart yard care to homeowners across the Las Vegas Valley.</p>
                <p className="text-olson-ink/70 font-outfit text-lg mt-4 leading-relaxed">From weekly mowing to xeriscape and irrigation, every job is handled with the same care and attention — because your yard is a reflection of us. We're proud to keep Henderson green, one property at a time.</p>
              </motion.div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-20">
              {VALUES.map((v, idx) => (
                <motion.div key={v.t} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.5, delay: idx * 0.1 }} className="bg-olson-cream rounded-2xl p-7 border border-olson-ink/5">
                  <div className="w-14 h-14 rounded-2xl bg-olson-clay/10 grid place-items-center mb-5"><v.icon className="text-olson-clay" size={26} /></div>
                  <h3 className="font-spectral text-olson-cactus text-2xl font-bold mb-2">{v.t}</h3>
                  <p className="text-olson-ink/65 font-outfit leading-relaxed">{v.d}</p>
                </motion.div>
              ))}
            </div>
            <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp} transition={{ duration: 0.6 }} className="bg-olson-cactus rounded-2xl p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6"><MapPin className="text-olson-clay" size={24} /><h3 className="font-spectral text-olson-cream text-3xl font-bold">Areas We Serve</h3></div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {AREAS.map((a) => <div key={a} className="flex items-center gap-2 text-olson-cream/85 font-outfit"><span className="w-1.5 h-1.5 rounded-full bg-olson-clay" />{a}</div>)}
              </div>
            </motion.div>
          </div>
        </section>
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
