import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../../data/mock';
import { Button } from '../ui/button';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Premium Background */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0b08] via-[#0a0a0a] to-[#0d0b08]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_50%,rgba(212,175,55,0.12)_0%,transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_30%_30%,rgba(212,175,55,0.08)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_70%_70%,rgba(212,175,55,0.08)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.4)_100%)]" />
      </div>
      
      <div
        ref={sectionRef}
        className="relative z-10 max-w-4xl mx-auto px-6 opacity-0 translate-y-8 transition-all duration-1000 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
      >
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[#d4af37] text-sm font-semibold tracking-widest uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="text-[#faf8f5] text-3xl md:text-4xl font-serif font-bold">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="relative">
          <div className="bg-[#1a1a1a]/50 border border-[#d4af37]/20 rounded-2xl p-8 md:p-12">
            {/* Quote Icon */}
            <div className="w-16 h-16 rounded-full bg-[#d4af37]/10 flex items-center justify-center mx-auto mb-8">
              <Quote size={32} className="text-[#d4af37]" />
            </div>

            {/* Testimonial Text */}
            <div className="text-center">
              <p className="text-[#faf8f5]/80 text-lg md:text-xl leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].text}"
              </p>

              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#d4af37]/20 flex items-center justify-center">
                  <span className="text-[#d4af37] font-semibold">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <div className="text-left">
                  <p className="text-[#faf8f5] font-semibold">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-[#d4af37] text-sm">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="border-[#d4af37]/30 text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0a0a0a]"
            >
              <ChevronLeft size={20} />
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-[#d4af37] w-6'
                      : 'bg-[#d4af37]/30 hover:bg-[#d4af37]/50'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="border-[#d4af37]/30 text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0a0a0a]"
            >
              <ChevronRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
