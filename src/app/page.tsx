import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/sections/Hero";
import ScrollStory from "@/components/sections/ScrollStory";
import ProductShowcase from "@/components/sections/ProductShowcase";
import Benefits from "@/components/sections/Benefits";
import Specs from "@/components/sections/Specs";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <SmoothScroll>
      <div className="grain" />
      <Navbar />
      <main>
        <Hero />
        <ScrollStory />
        <ProductShowcase />
        <Benefits />
        <Specs />
        <CTA />
      </main>
      <Footer />
    </SmoothScroll>
  );
}
