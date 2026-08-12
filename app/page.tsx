import React from 'react';
import Navbar from './components/tsx/Navbar';
import FloatingWhatsApp from './components/tsx/FloatingWhatsApp';
import Hero from './components/tsx/Hero';
import Statistics from './components/tsx/Statistics';
import AboutSection from './components/tsx/AboutSection';
import Services from './components/tsx/Services';
import Features from './components/tsx/Features';
import Pricing from './components/tsx/Pricing';
import HowItWorks from './components/tsx/HowItWorks';
import Gallery from './components/tsx/Gallery';
import Testimonials from './components/tsx/Testimonials';
import Clients from './components/tsx/Clients';
import FAQ from './components/tsx/FAQ';
import CtaBanner from './components/tsx/CtaBanner';
import ContactSection from './components/tsx/ContactSection';
import Footer from './components/tsx/Footer';

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
