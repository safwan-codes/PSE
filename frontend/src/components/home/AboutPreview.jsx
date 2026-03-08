import React, { useEffect, useRef } from 'react';
import { founderInfo, companyInfo } from '../../data/mock';
import { Award, CheckCircle, Users } from 'lucide-react';

const AboutPreview = () => {
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

  const highlights = [
    "Established in 2005",
    "18+ Years of Experience",
    "1000+ Students Guided",
    "Trusted Tax & Accounting Services"
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-[#0f0f0f]">
        <div className="absolute inset-0 bg-gradient-to-tl from-[#0d0b08] via-[#0f0f0f] to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_80%_20%,rgba(212,175,55,0.14)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_20%_80%,rgba(212,175,55,0.10)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_50%,rgba(212,175,55,0.06)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.4)_100%)]" />
      </div>
      
      <div
        ref={sectionRef}
        className="relative z-10 max-w-7xl mx-auto px-6 opacity-0 translate-y-8 transition-all duration-1000 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-[#d4af37] text-sm font-semibold tracking-widest uppercase mb-4 block">
              About Us
            </span>
            <h2 className="text-[#faf8f5] text-3xl md:text-4xl font-serif font-bold mb-6">
              Where Education Meets Trust
            </h2>
            <p className="text-[#faf8f5]/70 text-lg leading-relaxed mb-8">
              {founderInfo.story}
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-[#d4af37] flex-shrink-0" />
                  <span className="text-[#faf8f5]/80 text-sm">{item}</span>
                </div>
              ))}
            </div>

            {/* Founder Card */}
            <div className="p-6 rounded-2xl bg-[#1a1a1a]/70 border border-[#d4af37]/20">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full border-2 border-[#d4af37] overflow-hidden flex-shrink-0">
                  <img 
                    src={founderInfo.image} 
                    alt={founderInfo.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-[#faf8f5] font-semibold text-lg">{founderInfo.name}</h4>
                  <p className="text-[#d4af37] text-sm">{founderInfo.qualifications}</p>
                  <p className="text-[#faf8f5]/60 text-sm">Founder & Director</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden">
              {/* Certificate Style Card */}
              <div className="bg-[#1a1a1a] border-2 border-[#d4af37]/30 rounded-2xl p-8 md:p-12">
                <div className="text-center">
                  {/* Seal */}
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full border-4 border-[#d4af37] flex items-center justify-center">
                    <Award size={40} className="text-[#d4af37]" />
                  </div>
                  
                  <h3 className="text-[#d4af37] font-serif text-2xl font-bold mb-2">
                    Certificate of Excellence
                  </h3>
                  <p className="text-[#faf8f5]/60 text-sm mb-6">
                    Recognized for Outstanding Services in Education & Government Documentation
                  </p>

                  <div className="border-t border-b border-[#d4af37]/20 py-6 my-6">
                    <p className="text-[#faf8f5] text-lg font-semibold">
                      {companyInfo.name}
                    </p>
                    <p className="text-[#d4af37] text-sm mt-1">Since {companyInfo.established}</p>
                  </div>

                  <div className="flex items-center justify-center gap-8">
                    <div className="text-center">
                      <p className="text-[#d4af37] text-3xl font-bold">18+</p>
                      <p className="text-[#faf8f5]/60 text-xs">Years</p>
                    </div>
                    <div className="w-px h-12 bg-[#d4af37]/30" />
                    <div className="text-center">
                      <p className="text-[#d4af37] text-3xl font-bold">10+</p>
                      <p className="text-[#faf8f5]/60 text-xs">Universities</p>
                    </div>
                    <div className="w-px h-12 bg-[#d4af37]/30" />
                    <div className="text-center">
                      <p className="text-[#d4af37] text-3xl font-bold">1k+</p>
                      <p className="text-[#faf8f5]/60 text-xs">Students</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-[#d4af37]/20 rounded-full" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 border border-[#d4af37]/20 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
