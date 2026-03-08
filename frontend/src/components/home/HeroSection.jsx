import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, GraduationCap, Shield } from 'lucide-react';
import { companyInfo, contactInfo } from '../../data/mock';
import { Button } from '../ui/button';

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${contactInfo.whatsapp}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Premium Layered Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        {/* Base warm black gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0b08] via-[#0a0a0a] to-[#0d0b08]" />
        
        {/* Strong gold radial glows */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_20%_30%,rgba(212,175,55,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_80%_70%,rgba(212,175,55,0.12)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_0%,rgba(212,175,55,0.10)_0%,transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_50%_100%,rgba(212,175,55,0.08)_0%,transparent_40%)]" />
        
        {/* Vignette effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgba(0,0,0,0.5)_100%)]" />
        
        {/* Top gold accent line */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-64 h-64 border border-[#d4af37]/20 rounded-full opacity-60" />
      <div className="absolute bottom-20 left-10 w-48 h-48 border border-[#d4af37]/15 rounded-full opacity-40" />
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[radial-gradient(circle,rgba(212,175,55,0.08)_0%,transparent_70%)]" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[radial-gradient(circle,rgba(212,175,55,0.06)_0%,transparent_70%)]" />

      <div
        ref={heroRef}
        className="relative z-10 max-w-7xl mx-auto px-6 py-32 md:py-40 opacity-0 translate-y-8 transition-all duration-1000 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
      >
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5 mb-8">
            <Shield size={16} className="text-[#d4af37]" />
            <span className="text-[#d4af37] text-sm font-medium">Trusted Since 2005</span>
          </div>

          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img
              src={companyInfo.logo}
              alt={companyInfo.name}
              className="h-32 w-32 md:h-40 md:w-40 object-contain rounded-full border-4 border-[#d4af37]/50 shadow-2xl shadow-[#d4af37]/20"
            />
          </div>

         <h1 className="text-[#faf8f5] text-3xl md:text-5xl lg:text-6xl font-serif font-bold leading-tight mb-6 max-w-4xl mx-auto">
  Perfect Services & Education – Education Consultancy, Tax & Government Services in Surat
</h1>

<h2 className="text-[#d4af37] font-serif text-xl md:text-2xl font-semibold tracking-wide mb-4">
  Trusted Since 2005 | Admission Guidance, Accounting, GST & Documentation Support
</h2>
          {/* Sub-headline */}
          <p className="text-[#faf8f5]/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            {companyInfo.subTagline}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button
              onClick={handleWhatsApp}
              size="lg"
              className="bg-[#d4af37] text-[#0a0a0a] hover:bg-[#c4a030] font-semibold px-8 py-6 text-lg shadow-lg shadow-[#d4af37]/20 transition-all duration-300 hover:shadow-xl hover:shadow-[#d4af37]/30"
            >
              <MessageCircle className="mr-2" size={20} />
              Contact Now
            </Button>
            <Link to="/education">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0a0a0a] font-semibold px-8 py-6 text-lg transition-all duration-300"
              >
                <GraduationCap className="mr-2" size={20} />
                Get Admission Guidance
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 text-[#faf8f5]/60 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#d4af37]" />
              <span>NAAC & UGC Recognized</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#d4af37]" />
              <span>Professional Tax Services</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#d4af37]" />
              <span>18+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#d4af37]/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-[#d4af37] rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
