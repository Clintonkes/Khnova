import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Why from "@/components/Why";
import Work from "@/components/Work";
import Quote from "@/components/Quote";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Carmstrong LLC · Professional Lawn Care & Mowing in Center Line, MI" },
      { name: "description", content: "Reliable, professional lawn mowing, edging, trimming, and seasonal yard care in Center Line, Warren, and the Metro Detroit area. Free quotes." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="bg-cm-oat font-inter text-cm-ink">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Why />
        <Work />
        <Quote />
      </main>
      <Footer />
    </div>
  );
}
