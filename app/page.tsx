import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Beyond from "@/components/Beyond";
import Why from "@/components/Why";
import Transparency from "@/components/Transparency";
import HowItWorks from "@/components/HowItWorks";
import Reminders from "@/components/Reminders";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import PhotoBreak from "@/components/PhotoBreak";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { createPageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/site";

export const metadata = createPageMetadata({
  title: SITE.tagline,
  description: SITE.description,
  path: "/",
});

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Beyond />
        <PhotoBreak
          src="/dubai/skyline.jpg"
          alt="Dubai skyline at dusk"
          title="From first documents to every renewal."
          description="Launching in Dubai or keeping licences, visas, and corporate records current — Renew-It handles the full paperwork cycle. Clear pricing, local compliance expertise, and one team from setup through every renewal."
          ctaHref="#contact"
          ctaLabel="Get my renewal quote"
          fullWidth
          short
          position="center 40%"
        />
        <Why />
        <Transparency />
        <HowItWorks />
        <Reminders />
        <FAQ />
        <ContactSection />
        <Footer />
      </main>
      <WhatsAppFloat />
    </>
  );
}
