import React, { useEffect, useRef } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { founderInfo, companyInfo, stats } from '../data/mock';
import { Award, CheckCircle, Users, Target, Heart, Shield, Clock, Star } from 'lucide-react';

const AboutPage = () => {
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  const valuesRef = useRef(null);

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

    [heroRef, contentRef, valuesRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const values = [
    { icon: Shield, title: "Trust", description: "Building lasting relationships through transparency and reliability" },
    { icon: Target, title: "Accuracy", description: "Precise and error-free documentation services" },
    { icon: Clock, title: "Experience", description: "18+ years of dedicated service excellence" },
    { icon: Heart, title: "Care", description: "Personal attention to every client's unique needs" }
  ];

  const milestones = [
    { year: "2005", title: "Founded", description: "Started with a vision to simplify education and documentation" },
    { year: "2010", title: "Expansion", description: "Expanded services to multiple universities" },
    { year: "2015", title: "1000 Students", description: "Crossed milestone of guiding 10,000 students" },
    { year: "2023", title: "Digital Services", description: "Launched online consultation and support" }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Global Premium Background */}
      <div className="fixed inset-0 bg-[#0a0a0a] -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0b08] via-[#0a0a0a] to-[#0d0b08]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_30%_20%,rgba(212,175,55,0.12)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_60%_at_70%_80%,rgba(212,175,55,0.10)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_90%_40%,rgba(212,175,55,0.08)_0%,transparent_50%)]" />
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
            <div className="text-center mb-16">
              <span className="text-[#d4af37] text-sm font-semibold tracking-widest uppercase mb-4 block">
                Our Story
              </span>
              <h1 className="text-[#faf8f5] text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                About {companyInfo.shortName}
              </h1>
              <p className="text-[#faf8f5]/70 text-lg max-w-2xl mx-auto">
                {companyInfo.signatureLine}
              </p>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-20 bg-[#0f0f0f]">
          <div
            ref={contentRef}
            className="max-w-7xl mx-auto px-6 opacity-0 translate-y-8 transition-all duration-1000 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Founder Card */}
              <div className="relative">
                <div className="bg-[#1a1a1a] border-2 border-[#d4af37]/30 rounded-2xl p-8 md:p-12">
                  <div className="text-center">
                    {/* Avatar with actual image */}
                    <div className="w-32 h-32 mx-auto mb-6 rounded-full border-4 border-[#d4af37] overflow-hidden">
                      <img 
                        src={founderInfo.image} 
                        alt={founderInfo.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <h3 className="text-[#d4af37] font-serif text-2xl font-bold mb-2">
                      {founderInfo.name}
                    </h3>
                    <p className="text-[#faf8f5] text-lg mb-1">{founderInfo.qualifications}</p>
                    <p className="text-[#faf8f5]/60 mb-6">Founder & Director</p>

                    <div className="border-t border-[#d4af37]/20 pt-6">
                      <div className="flex items-center justify-center gap-2 mb-4">
                        <Award size={20} className="text-[#d4af37]" />
                        <span className="text-[#d4af37] font-semibold">{founderInfo.experience} Experience</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Decorative */}
                <div className="absolute -top-4 -right-4 w-24 h-24 border border-[#d4af37]/20 rounded-full" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-[#d4af37]/20 rounded-full" />
              </div>

              {/* Story Content */}
              <div>
                <h2 className="text-[#faf8f5] text-3xl md:text-4xl font-serif font-bold mb-6">
                  Our Journey of Excellence
                </h2>
                <p className="text-[#faf8f5]/70 text-lg leading-relaxed mb-8">
                  {founderInfo.story}
                </p>
                <p className="text-[#faf8f5]/70 text-lg leading-relaxed mb-8">
                  Our commitment to quality and transparency has made us a trusted name among students, 
                  parents, and professionals seeking reliable education and documentation services.
                </p>

                {/* Key Highlights */}
                <div className="grid grid-cols-2 gap-4">
                  {stats.slice(0, 4).map((stat) => (
                    <div key={stat.id} className="flex items-center gap-3">
                      <CheckCircle size={18} className="text-[#d4af37] flex-shrink-0" />
                      <span className="text-[#faf8f5]/80 text-sm">{stat.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-[#0a0a0a]">
          <div
            ref={valuesRef}
            className="max-w-7xl mx-auto px-6 opacity-0 translate-y-8 transition-all duration-1000 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
          >
            <div className="text-center mb-16">
              <span className="text-[#d4af37] text-sm font-semibold tracking-widest uppercase mb-4 block">
                What We Stand For
              </span>
              <h2 className="text-[#faf8f5] text-3xl md:text-4xl font-serif font-bold">
                Our Core Values
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group p-8 rounded-2xl bg-[#1a1a1a]/50 border border-[#d4af37]/10 hover:border-[#d4af37]/40 transition-all duration-500 text-center"
                >
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#d4af37]/10 flex items-center justify-center mb-6 group-hover:bg-[#d4af37]/20 transition-colors">
                    <value.icon className="text-[#d4af37]" size={32} />
                  </div>
                  <h3 className="text-[#faf8f5] text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-[#faf8f5]/60 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-[#0f0f0f]">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <span className="text-[#d4af37] text-sm font-semibold tracking-widest uppercase mb-4 block">
                Our Journey
              </span>
              <h2 className="text-[#faf8f5] text-3xl md:text-4xl font-serif font-bold">
                Milestones
              </h2>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-[#d4af37]/20" />

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Dot */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#d4af37] border-4 border-[#0f0f0f]" />

                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'
                  }`}>
                    <div className="bg-[#1a1a1a]/50 border border-[#d4af37]/20 rounded-xl p-6">
                      <span className="text-[#d4af37] font-bold text-xl">{milestone.year}</span>
                      <h3 className="text-[#faf8f5] font-semibold text-lg mt-2">{milestone.title}</h3>
                      <p className="text-[#faf8f5]/60 text-sm mt-1">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
