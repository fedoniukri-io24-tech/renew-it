import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <ContactSection />
      <Footer />
    </main>
  );
}
