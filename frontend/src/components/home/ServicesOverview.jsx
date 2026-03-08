import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, FileCheck, Calculator, GraduationCap, BookOpen } from 'lucide-react';
import { Button } from '../ui/button';

const services = [
  {
    id: 1,
    title: "Accounting & Tax Services",
    description: "GST Registration, Income Tax, PAN Card, Passport & more documentation services.",
    icon: FileCheck,
    link: "/services"
  },
  {
    id: 2,
    title: "Tax Filing Services",
    description: "Computerized accounting and complete tax filing with accuracy and compliance.",
    icon: Calculator,
    link: "/services"
  },
  {
    id: 3,
    title: "Education Guidance",
    description: "Admissions in NAAC & UGC recognized universities with study-from-home options.",
    icon: GraduationCap,
    link: "/education"
  },
  {
    id: 4,
    title: "Distance Education",
    description: "Complete support for distance learning courses in English, Hindi & Gujarati.",
    icon: BookOpen,
    link: "/education"
  }
];

const ServicesOverview = () => {
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

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0d0b08] via-[#0a0a0a] to-[#0d0b08]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_10%_20%,rgba(212,175,55,0.12)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_90%_80%,rgba(212,175,55,0.10)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(212,175,55,0.06)_0%,transparent_60%)]" />
      </div>
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#d4af37]/40 to-transparent" />

      <div
        ref={sectionRef}
        className="relative z-10 max-w-7xl mx-auto px-6 opacity-0 translate-y-8 transition-all duration-1000 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#d4af37] text-sm font-semibold tracking-widest uppercase mb-4 block">
            What We Offer
          </span>
          <h2 className="text-[#faf8f5] text-3xl md:text-4xl font-serif font-bold mb-4">
            Our Professional Services
          </h2>
          <p className="text-[#faf8f5]/60 max-w-2xl mx-auto">
            Comprehensive solutions for your education and government documentation needs under one roof.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative p-8 rounded-2xl bg-[#1a1a1a]/50 border border-[#d4af37]/10 hover:border-[#d4af37]/40 transition-all duration-500 hover:shadow-xl hover:shadow-[#d4af37]/5"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-[#d4af37]/10 flex items-center justify-center mb-6 group-hover:bg-[#d4af37]/20 transition-colors duration-300">
                <service.icon className="text-[#d4af37]" size={28} />
              </div>

              {/* Content */}
              <h3 className="text-[#faf8f5] text-xl font-semibold mb-3 group-hover:text-[#d4af37] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-[#faf8f5]/60 text-sm leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Link */}
              <Link
                to={service.link}
                className="inline-flex items-center text-[#d4af37] text-sm font-medium hover:gap-3 gap-2 transition-all duration-300"
              >
                Learn More
                <ArrowRight size={16} />
              </Link>

              {/* Hover Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-[#d4af37]/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/services">
            <Button
              variant="outline"
              size="lg"
              className="border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0a0a0a] transition-all duration-300"
            >
              View All Services
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
