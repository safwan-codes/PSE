import React, { useEffect, useRef, useState } from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { contactInfo, faqs, companyInfo } from '../data/mock';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import {
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Send,
  CheckCircle
} from 'lucide-react';
import { toast } from 'sonner';

const ContactPage = () => {
  const heroRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

    [heroRef, formRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${contactInfo.whatsapp}`, '_blank');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission (mock)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast.success('Your enquiry has been submitted! We will contact you soon.');
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
      });
      setTimeout(() => setSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <div className="min-h-screen relative">
      {/* Global Premium Background */}
      <div className="fixed inset-0 bg-[#0a0a0a] -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0b08] via-[#0a0a0a] to-[#0d0b08]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_100%_80%_at_50%_30%,rgba(212,175,55,0.14)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_20%_90%,rgba(212,175,55,0.10)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_80%_90%,rgba(212,175,55,0.10)_0%,transparent_50%)]" />
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
                Get In Touch
              </span>
              <h1 className="text-[#faf8f5] text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                Contact Us
              </h1>
              <p className="text-[#d4af37] text-xl font-semibold">
                {companyInfo.gujaratiPunchLine}
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-[#0f0f0f]">
          <div
            ref={formRef}
            className="max-w-7xl mx-auto px-6 opacity-0 translate-y-8 transition-all duration-1000 ease-out [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0"
          >
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <div>
                <h2 className="text-[#faf8f5] text-2xl md:text-3xl font-serif font-bold mb-8">
                  Visit Our Office
                </h2>

                <div className="space-y-6 mb-12">
                  {/* Address */}
                  <div className="flex items-start gap-4 p-6 rounded-xl bg-[#1a1a1a]/50 border border-[#d4af37]/10">
                    <div className="w-12 h-12 rounded-lg bg-[#d4af37]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-[#d4af37]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-[#faf8f5] font-semibold mb-2">Office Address</h3>
                      <p className="text-[#faf8f5]/70 text-sm leading-relaxed">
                        {contactInfo.address.line1}<br />
                        {contactInfo.address.line2}<br />
                        {contactInfo.address.line3}
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4 p-6 rounded-xl bg-[#1a1a1a]/50 border border-[#d4af37]/10">
                    <div className="w-12 h-12 rounded-lg bg-[#d4af37]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="text-[#d4af37]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-[#faf8f5] font-semibold mb-2">Phone Numbers</h3>
                      {contactInfo.phones.map((phone, idx) => (
                        <a
                          key={idx}
                          href={`tel:${phone}`}
                          className="block text-[#faf8f5]/70 text-sm hover:text-[#d4af37] transition-colors"
                        >
                          {phone}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4 p-6 rounded-xl bg-[#1a1a1a]/50 border border-[#d4af37]/10">
                    <div className="w-12 h-12 rounded-lg bg-[#d4af37]/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="text-[#d4af37]" size={24} />
                    </div>
                    <div>
                      <h3 className="text-[#faf8f5] font-semibold mb-2">Working Hours</h3>
                      <p className="text-[#faf8f5]/70 text-sm">
                        Monday - Saturday: 10:00 AM - 7:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp CTA */}
                <Button
                  onClick={handleWhatsApp}
                  size="lg"
                  className="w-full bg-[#d4af37] text-[#0a0a0a] hover:bg-[#c4a030] font-semibold"
                >
                  <MessageCircle className="mr-2" size={20} />
                  Chat on WhatsApp
                </Button>

                {/* Map Section */}
                <div className="mt-8">
                  {/* Map Header with Link */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 flex items-center justify-center">
                        <MapPin className="text-[#d4af37]" size={20} />
                      </div>
                      <div>
                        <h3 className="text-[#faf8f5] font-semibold">Find Us on Map</h3>
                        <p className="text-[#faf8f5]/60 text-sm">43, Jantanagar Society, Rander, Surat</p>
                      </div>
                    </div>
                    <a
                      href="https://www.google.com/maps/search/43+Jantanagar+Society+Near+RIG+Ground+Rander+Surat+395005"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 rounded-lg border border-[#d4af37] text-[#d4af37] text-sm font-medium hover:bg-[#d4af37] hover:text-[#0a0a0a] transition-all duration-300"
                    >
                      Open in Google Maps
                    </a>
                  </div>

                  {/* Embedded Map */}
                  <div className="rounded-xl overflow-hidden border border-[#d4af37]/20">
                    <iframe
                      src="https://maps.google.com/maps?q=43,Jantanagar+Society+Nr.+R.I.G+Ground+Rander+Surat+395005&t=&z=16&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="43, Jantanagar Society, Nr. R.I.G Ground, Rander, Surat-395005"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <h2 className="text-[#faf8f5] text-2xl md:text-3xl font-serif font-bold mb-8">
                  Send Us a Message
                </h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-[#faf8f5]/80">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Your name"
                        className="bg-[#1a1a1a] border-[#d4af37]/20 text-[#faf8f5] placeholder:text-[#faf8f5]/40 focus:border-[#d4af37]"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-[#faf8f5]/80">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="+91 98980 56885"
                        className="bg-[#1a1a1a] border-[#d4af37]/20 text-[#faf8f5] placeholder:text-[#faf8f5]/40 focus:border-[#d4af37]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-[#faf8f5]/80">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      className="bg-[#1a1a1a] border-[#d4af37]/20 text-[#faf8f5] placeholder:text-[#faf8f5]/40 focus:border-[#d4af37]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-[#faf8f5]/80">Service Required</Label>
                    <Input
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      placeholder="e.g., GST Registration, B.Ed Admission"
                      className="bg-[#1a1a1a] border-[#d4af37]/20 text-[#faf8f5] placeholder:text-[#faf8f5]/40 focus:border-[#d4af37]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-[#faf8f5]/80">Your Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your requirements..."
                      rows={5}
                      className="bg-[#1a1a1a] border-[#d4af37]/20 text-[#faf8f5] placeholder:text-[#faf8f5]/40 focus:border-[#d4af37] resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-[#d4af37] text-[#0a0a0a] hover:bg-[#c4a030] font-semibold disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      'Submitting...'
                    ) : submitted ? (
                      <>
                        <CheckCircle className="mr-2" size={20} />
                        Submitted!
                      </>
                    ) : (
                      <>
                        <Send className="mr-2" size={20} />
                        Submit Enquiry
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-[#0a0a0a]">
          <div className="max-w-3xl mx-auto px-6">
            <div className="text-center mb-12">
              <span className="text-[#d4af37] text-sm font-semibold tracking-widest uppercase mb-4 block">
                FAQs
              </span>
              <h2 className="text-[#faf8f5] text-3xl md:text-4xl font-serif font-bold">
                Frequently Asked Questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq) => (
                <AccordionItem
                  key={faq.id}
                  value={`item-${faq.id}`}
                  className="bg-[#1a1a1a]/50 border border-[#d4af37]/10 rounded-xl px-6 data-[state=open]:border-[#d4af37]/40"
                >
                  <AccordionTrigger className="text-[#faf8f5] hover:text-[#d4af37] text-left font-medium py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-[#faf8f5]/70 pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
