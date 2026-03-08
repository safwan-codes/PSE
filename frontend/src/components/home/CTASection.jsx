import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { contactInfo, companyInfo } from '../../data/mock';
import { Button } from '../ui/button';

const CTASection = () => {
  const sectionRef = useRef(null);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${contactInfo.whatsapp}`, '_blank');
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-[#0f0f0f]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d0b08] via-[#0f0f0f] to-[#0d0b08]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_100%_at_50%_50%,rgba(212,175,55,0.15)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_30%_70%,rgba(212,175,55,0.10)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_30%,rgba(212,175,55,0.10)_0%,transparent_50%)]" />
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />

      <div
        ref={sectionRef}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center opacity-0 translate-y-8 transition-all duration-1000 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
      >
        {/* Gujarati Tagline */}
        <p className="text-[#d4af37] text-xl md:text-2xl font-semibold mb-6">
          {companyInfo.gujaratiPunchLine}
        </p>

        <h2 className="text-[#faf8f5] text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
          Ready to Start Your Journey?
        </h2>

        <p className="text-[#faf8f5]/70 text-lg max-w-2xl mx-auto mb-10">
          Whether you need education guidance or government documentation services, 
          we're here to help you every step of the way.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button
            onClick={handleWhatsApp}
            size="lg"
            className="bg-[#d4af37] text-[#0a0a0a] hover:bg-[#c4a030] font-semibold px-8 py-6 text-lg shadow-lg shadow-[#d4af37]/20"
          >
            <MessageCircle className="mr-2" size={20} />
            WhatsApp Now
          </Button>
          <a href={`tel:${contactInfo.phones[0]}`}>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0a0a0a] font-semibold px-8 py-6 text-lg"
            >
              <Phone className="mr-2" size={20} />
              Call Us
            </Button>
          </a>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap items-center justify-center gap-6">
          <Link
            to="/education"
            className="flex items-center gap-2 text-[#faf8f5]/70 hover:text-[#d4af37] transition-colors"
          >
            Get Admission Guidance
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/services"
            className="flex items-center gap-2 text-[#faf8f5]/70 hover:text-[#d4af37] transition-colors"
          >
            Explore Services
            <ArrowRight size={16} />
          </Link>
          <Link
            to="/contact"
            className="flex items-center gap-2 text-[#faf8f5]/70 hover:text-[#d4af37] transition-colors"
          >
            Visit Our Office
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
