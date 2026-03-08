import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { governmentServices, accountingServices, contactInfo } from '../data/mock';
import { Button } from '../components/ui/button';
import {
  FileCheck,
  Calculator,
  Receipt,
  CreditCard,
  BookOpen,
  Heart,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Shield
} from 'lucide-react';

const iconMap = {
  FileCheck,
  Calculator,
  Receipt,
  CreditCard,
  BookOpen,
  Heart
};

const ServicesPage = () => {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const [selectedService, setSelectedService] = useState(null);

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

    [heroRef, servicesRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const handleWhatsApp = (service = '') => {
    const message = service
      ? `Hello, I'm interested in ${service}. Please provide more information.`
      : "Hello, I'm interested in your services. Please provide more information.";
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const benefits = [
    "Professional Tax Services",
    "18+ Years of Expertise",
    "100% Accuracy Guaranteed",
    "On-Time Submission",
    "Transparent Pricing",
    "Personal Assistance"
  ];

  return (
    <div className="min-h-screen relative">
      {/* Global Premium Background */}
      <div className="fixed inset-0 bg-[#0a0a0a] -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d0b08] via-[#0a0a0a] to-[#0d0b08]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_20%_30%,rgba(212,175,55,0.14)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_80%_70%,rgba(212,175,55,0.10)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(212,175,55,0.06)_0%,transparent_60%)]" />
      </div>
      
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(212,175,55,0.08)_0%,transparent_50%)]" />

          <div
            ref={heroRef}
            className="relative z-10 max-w-7xl mx-auto px-6 opacity-0 translate-y-8 transition-all duration-1000 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
          >
            <div className="text-center mb-12">
              <span className="text-[#d4af37] text-sm font-semibold tracking-widest uppercase mb-4 block">
                Professional Services
              </span>
              <h1 className="text-[#faf8f5] text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                Accounting & Tax Services
              </h1>
              <p className="text-[#faf8f5]/70 text-lg max-w-3xl mx-auto">
                {accountingServices.headline}
              </p>
            </div>

            {/* Benefits Bar */}
            <div className="flex flex-wrap items-center justify-center gap-6 mt-12">
              {benefits.slice(0, 3).map((benefit, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle size={18} className="text-[#d4af37]" />
                  <span className="text-[#faf8f5]/80 text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-[#0f0f0f]">
          <div
            ref={servicesRef}
            className="max-w-7xl mx-auto px-6 opacity-0 translate-y-8 transition-all duration-1000 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {governmentServices.map((service, index) => {
                const IconComponent = iconMap[service.icon];
                return (
                  <div
                    key={service.id}
                    className={`group relative p-8 rounded-2xl bg-[#1a1a1a]/50 border transition-all duration-500 cursor-pointer ${
                      selectedService === service.id
                        ? 'border-[#d4af37] shadow-xl shadow-[#d4af37]/10'
                        : 'border-[#d4af37]/10 hover:border-[#d4af37]/40'
                    }`}
                    onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {/* Icon */}
                    <div className="w-16 h-16 rounded-xl bg-[#d4af37]/10 flex items-center justify-center mb-6 group-hover:bg-[#d4af37]/20 transition-colors duration-300">
                      {IconComponent && <IconComponent className="text-[#d4af37]" size={32} />}
                    </div>

                    {/* Content */}
                    <h3 className="text-[#faf8f5] text-xl font-semibold mb-3 group-hover:text-[#d4af37] transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-[#faf8f5]/60 text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    {/* CTA */}
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleWhatsApp(service.title);
                      }}
                      variant="outline"
                      className="w-full border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0a0a0a]"
                    >
                      Enquire Now
                      <ArrowRight className="ml-2" size={16} />
                    </Button>

                    {/* Hover Accent */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#d4af37]/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-[#0a0a0a]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-[#d4af37] text-sm font-semibold tracking-widest uppercase mb-4 block">
                  Why Choose Us
                </span>
                <h2 className="text-[#faf8f5] text-3xl md:text-4xl font-serif font-bold mb-6">
                  Trusted by Thousands
                </h2>
                <p className="text-[#faf8f5]/70 text-lg leading-relaxed mb-8">
                  With over 18 years of experience in accounting and government documentation services, 
                  we have built a reputation for accuracy, reliability, and customer satisfaction.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle size={18} className="text-[#d4af37] flex-shrink-0" />
                      <span className="text-[#faf8f5]/80 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Trust Badge */}
              <div className="relative">
                <div className="bg-[#1a1a1a] border-2 border-[#d4af37]/30 rounded-2xl p-8 md:p-12 text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[#d4af37]/10 border-4 border-[#d4af37] flex items-center justify-center">
                    <Shield size={48} className="text-[#d4af37]" />
                  </div>

                  <h3 className="text-[#d4af37] font-serif text-2xl font-bold mb-2">
                    Professional & Trusted
                  </h3>
                  <p className="text-[#faf8f5]/60 mb-6">
                    All our services are conducted with accuracy and as per regulations
                  </p>

                  <Button
                    onClick={() => handleWhatsApp()}
                    className="bg-[#d4af37] text-[#0a0a0a] hover:bg-[#c4a030]"
                  >
                    <MessageCircle className="mr-2" size={18} />
                    Get Free Consultation
                  </Button>
                </div>

                {/* Decorative */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border border-[#d4af37]/20 rounded-full" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
