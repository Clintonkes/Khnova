import { createFileRoute } from "@tanstack/react-router";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesPreview from "@/components/ServicesPreview";
import Why from "@/components/Why";
import WorkPreview from "@/components/WorkPreview";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Olson LLC · Desert Lawncare & Landscaping in Henderson, NV" },
      { name: "description", content: "Reliable, desert-smart lawn mowing, xeriscape, irrigation, and yard care in Henderson, Las Vegas, and the surrounding Vegas Valley. Free quotes." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="bg-olson-sand font-outfit text-olson-ink">
      <Navbar />
      <main>
        <Hero />
        <ServicesPreview />
        <Why />
        <WorkPreview />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
