import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import BeforeAfter from "@/components/BeforeAfter";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import HowItWorks from "@/components/HowItWorks";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <BeforeAfter />
        <Services />
        <Gallery />
        <HowItWorks />
        <Booking />
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}
