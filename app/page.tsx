import React from 'react';
import Navbar from './components/Navbar';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Hero from './components/Hero';
import Statistics from './components/Statistics';
import AboutSection from './components/AboutSection';
import Services from './components/Services';
import Features from './components/Features';
import Pricing from './components/Pricing';
import HowItWorks from './components/HowItWorks';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Clients from './components/Clients';
import FAQ from './components/FAQ';
import CtaBanner from './components/CtaBanner';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      
      <main>
        <Hero />
        <Statistics />
        <AboutSection />
        <Services />
        <Features />
        <Pricing />
        <HowItWorks />
        <Gallery />
        <Testimonials />
        <Clients />
        <FAQ />
        <CtaBanner />
        <ContactSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
