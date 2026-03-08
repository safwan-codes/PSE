import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import ServicesOverview from '../components/home/ServicesOverview';
import AboutPreview from '../components/home/AboutPreview';
import TestimonialsSection from '../components/home/TestimonialsSection';
import CTASection from '../components/home/CTASection';

const HomePage = () => {
  return (
    <div className="min-h-screen relative">
      {/* Global Premium Background */}
      <div className="fixed inset-0 bg-[#0a0a0a] -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0b08] via-[#0a0a0a] to-[#0d0b08]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_150%_100%_at_50%_0%,rgba(212,175,55,0.10)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_0%_50%,rgba(212,175,55,0.08)_0%,transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_100%_50%,rgba(212,175,55,0.08)_0%,transparent_40%)]" />
      </div>
      
      <Header />
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesOverview />
        <AboutPreview />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
