import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { educationCourses, universities, contactInfo } from '../data/mock';
import { Button } from '../components/ui/button';
import {
  GraduationCap,
  BookOpen,
  MessageCircle,
  CheckCircle,
  ArrowRight,
  Building,
  Globe,
  Award,
  Users,
  MapPin
} from 'lucide-react';

const EducationPage = () => {
  const heroRef = useRef(null);
  const coursesRef = useRef(null);
  const universitiesRef = useRef(null);
  const [selectedCategory, setSelectedCategory] = useState('All');

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

    [heroRef, coursesRef, universitiesRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const handleWhatsApp = (course = '') => {
    const message = course
      ? `Hello, I'm interested in admission for ${course}. Please provide more information.`
      : "Hello, I'm interested in education services. Please provide guidance.";
    window.open(`https://wa.me/${contactInfo.whatsapp}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const categories = ['All', ...new Set(educationCourses.map((c) => c.category))];
  const filteredCourses = selectedCategory === 'All'
    ? educationCourses
    : educationCourses.filter((c) => c.category === selectedCategory);

  const highlights = [
    { icon: Award, text: "NAAC & UGC Recognized" },
    { icon: Globe, text: "English, Hindi & Gujarati Medium" },
    { icon: Users, text: "10,000+ Students Guided" },
    { icon: BookOpen, text: "Study from Home Options" }
  ];

  return (
    <div className="min-h-screen relative">
      {/* Global Premium Background */}
      <div className="fixed inset-0 bg-[#0a0a0a] -z-10">
        <div className="absolute inset-0 bg-gradient-to-tl from-[#0d0b08] via-[#0a0a0a] to-[#0d0b08]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_70%_20%,rgba(212,175,55,0.12)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_30%_80%,rgba(212,175,55,0.10)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_10%_40%,rgba(212,175,55,0.08)_0%,transparent_50%)]" />
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
                Education Services
              </span>
              <h1 className="text-[#faf8f5] text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                Study in NAAC & UGC<br />Recognized Universities
              </h1>
              <p className="text-[#faf8f5]/70 text-lg max-w-2xl mx-auto mb-8">
                Education available in English, Hindi & Gujarati medium
              </p>

              <Button
                onClick={() => handleWhatsApp()}
                size="lg"
                className="bg-[#d4af37] text-[#0a0a0a] hover:bg-[#c4a030] font-semibold"
              >
                <GraduationCap className="mr-2" size={20} />
                Get Admission Guidance
              </Button>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-3 p-6 rounded-xl bg-[#1a1a1a]/50 border border-[#d4af37]/10"
                >
                  <item.icon className="text-[#d4af37]" size={28} />
                  <span className="text-[#faf8f5]/80 text-sm text-center">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Special Highlight */}
        <section className="py-12 bg-[#d4af37]/5 border-y border-[#d4af37]/20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h3 className="text-[#d4af37] text-xl md:text-2xl font-semibold">
              Guaranteed Study-from-Home Options with Recognized Universities
            </h3>
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-20 bg-[#0f0f0f]">
          <div
            ref={coursesRef}
            className="max-w-7xl mx-auto px-6 opacity-0 translate-y-8 transition-all duration-1000 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
          >
            <div className="text-center mb-12">
              <span className="text-[#d4af37] text-sm font-semibold tracking-widest uppercase mb-4 block">
                Available Courses
              </span>
              <h2 className="text-[#faf8f5] text-3xl md:text-4xl font-serif font-bold">
                Courses Offered
              </h2>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-[#d4af37] text-[#0a0a0a]'
                      : 'bg-[#1a1a1a] text-[#faf8f5]/70 hover:text-[#d4af37] border border-[#d4af37]/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Courses Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {filteredCourses.map((course, index) => (
                <div
                  key={course.id}
                  className="group p-6 rounded-xl bg-[#1a1a1a]/50 border border-[#d4af37]/10 hover:border-[#d4af37]/40 transition-all duration-500"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-lg bg-[#d4af37]/10 flex items-center justify-center">
                      <GraduationCap className="text-[#d4af37]" size={24} />
                    </div>
                    <span className="text-[#d4af37]/60 text-xs px-2 py-1 rounded-full bg-[#d4af37]/10">
                      {course.category}
                    </span>
                  </div>

                  <h3 className="text-[#faf8f5] font-semibold mb-4 group-hover:text-[#d4af37] transition-colors">
                    {course.name}
                  </h3>

                  <button
                    onClick={() => handleWhatsApp(course.name)}
                    className="flex items-center gap-2 text-[#d4af37] text-sm font-medium hover:gap-3 transition-all duration-300"
                  >
                    Enquire Now
                    <ArrowRight size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Universities Section */}
        <section className="py-20 bg-[#0a0a0a]">
          <div
            ref={universitiesRef}
            className="max-w-7xl mx-auto px-6 opacity-0 translate-y-8 transition-all duration-1000 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
          >
            <div className="text-center mb-12">
              <span className="text-[#d4af37] text-sm font-semibold tracking-widest uppercase mb-4 block">
                Our Partners
              </span>
              <h2 className="text-[#faf8f5] text-3xl md:text-4xl font-serif font-bold">
                Affiliated Universities
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {universities.map((university, index) => (
                <div
                  key={university.id}
                  className="group rounded-2xl bg-[#1a1a1a]/50 border border-[#d4af37]/10 hover:border-[#d4af37]/40 transition-all duration-500 overflow-hidden"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* University Photo */}
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={university.photo} 
                      alt={university.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
                    
                    {/* Logo overlay */}
                    {university.logo && (
                      <div className="absolute bottom-4 right-4 w-16 h-16 rounded-full bg-white p-1 shadow-lg">
                        <img 
                          src={university.logo} 
                          alt={`${university.name} logo`}
                          className="w-full h-full object-contain rounded-full"
                        />
                      </div>
                    )}
                  </div>
                  
                  {/* University Info */}
                  <div className="p-6">
                    <h3 className="text-[#faf8f5] font-semibold text-lg mb-1 group-hover:text-[#d4af37] transition-colors">
                      {university.name}
                    </h3>
                    <p className="text-[#faf8f5]/50 text-sm flex items-center gap-2">
                      <MapPin size={14} className="text-[#d4af37]" />
                      {university.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#0f0f0f]">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-[#faf8f5] text-3xl md:text-4xl font-serif font-bold mb-6">
              Start Your Education Journey Today
            </h2>
            <p className="text-[#faf8f5]/70 text-lg mb-8">
              Get personalized guidance for admission in your dream course and university.
            </p>
            <Button
              onClick={() => handleWhatsApp()}
              size="lg"
              className="bg-[#d4af37] text-[#0a0a0a] hover:bg-[#c4a030] font-semibold"
            >
              <MessageCircle className="mr-2" size={20} />
              Get Free Consultation
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default EducationPage;
